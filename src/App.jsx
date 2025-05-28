import { useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import FoodCard from "./components/FoodCard";
import Header from "./components/Header";
import CartPopup from "./components/CartPopup";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("");

  const [cartItem, setCartItem] = useState(() => {
    const saved = localStorage.getItem("foodCart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("foodCart", JSON.stringify(cartItem));
  }, [cartItem]);

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-slate-200 w-full">
      <Header
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        cartItem={cartItem}
        setShowPopup={setShowPopup}
      />
      <Banner />
      <div className="px-2.5 md:px-5 pt-3.5 md:py-10">
        <Categories
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <FoodCard
          selectedCategory={selectedCategory}
          searchItem={searchItem}
          cartItem={cartItem}
          setCartItem={setCartItem}
        />
      </div>
      <CartPopup
        cartItem={cartItem}
        setCartItem={setCartItem}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </div>
  );
}

export default App;
