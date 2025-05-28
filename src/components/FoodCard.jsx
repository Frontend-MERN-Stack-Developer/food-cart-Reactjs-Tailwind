import { food_items } from "../FoodData";
import { GiChickenOven } from "react-icons/gi";
import { GiZigzagLeaf } from "react-icons/gi";

const FoodCard = ({ selectedCategory, searchItem, setCartItem, cartItem }) => {
  const filterFood = food_items.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.food_category === selectedCategory;

    const matchSearch = item.food_name
      .toLowerCase()
      .includes(searchItem.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="pt-8 pb-5 container">
      <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-slate-700">
          All Food Items
        </span>
      </h1>

      <div className="flex flex-wrap gap-4 justify-between">
        {filterFood.map((item, id) => (
          <div
            key={id}
            className="group bg-white  shadow-lg p-1.5 rounded-md lg:w-[24%] md:w-[31%] sm:w-[46%] w-[100%]"
          >
            <div className="w-full max-h-50 h-56 overflow-hidden group-hover:overflow-visible">
              <img
                className="object-cover h-full w-full group-hover:scale-110 transition-all"
                src={item.food_image}
              />
            </div>
            <div className="p-2.5">
              <h2 className="font-bold">{item.food_name}</h2>
              <div className="flex justify-between py-2.5 items-center">
                <h4>Rs {item.price}</h4>
                <span className="flex gap-1.5 justify-center items-center">
                  {item.food_type}
                  {item.food_type === "veg" ? (
                    <GiZigzagLeaf />
                  ) : (
                    <GiChickenOven />
                  )}
                </span>
              </div>
              <button
                onClick={() => {
                  if (!cartItem.some((cartItem) => cartItem.id === item.id)) {
                    setCartItem([...cartItem, item]);
                    console.log(setCartItem, cartItem);
                  }
                }}
                // onClick={() => setCartItem([...cartItem, item])}
                className="bg-green-500 text-white w-full p-2 rounded-md cursor-pointer hover:bg-slate-700 transition-all"
              >
                Add to cart tasawar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCard;
