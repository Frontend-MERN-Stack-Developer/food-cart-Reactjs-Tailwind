import React, { useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";

const CartPopup = ({ showPopup, setShowPopup, cartItem, setCartItem }) => {
  const popupRef = useRef(null);

  const removeItem = (id) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }

    setCartItem(
      cartItem.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalPrice = cartItem.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity) || 0;
    return sum + price * quantity;
  }, 0);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowPopup]);

  return (
    <div
      ref={popupRef}
      className={`popup-content fixed top-0 right-0 bg-white inset-shadow-2xs w-[40vw] h-full p-2.5 transition-all duration-500 ${
        showPopup ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <header className="flex justify-between items-center">
        <h4>Cart Popup</h4>
        <button
          type="button"
          className="cursor-pointer -translate-x-full"
          onClick={() => setShowPopup(false)}
        >
          <RxCross1 />
        </button>
      </header>

      {cartItem.length === 0 ? (
        <p className="text-center mt-20 text-gray-500 text-lg">
          Your cart is empty
        </p>
      ) : (
        <div className="space-y-4">
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-3 bg-white rounded-lg shadow"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.food_image}
                  alt={item.food_name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium">{item.food_name}</h3>
                  <p>
                    Rs {item.price} x {item.quantity}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold">
              Total: Rs {totalPrice.toFixed(2)}
            </h2>
            <button className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPopup;
