import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza } from "react-icons/gi";
// import { food_items } from "../FoodData";
// import { useState } from "react";

const Categories = ({ onCategorySelect, selectedCategory }) => {
  const AllCategories = [
    {
      id: 1,
      name: "All",
      icon: (
        <TiThSmallOutline className="w-[30px] h-[30px] text-green-600 ml-auto" />
      ),
    },
    {
      id: 1,
      name: "breakfast",
      icon: (
        <MdOutlineFreeBreakfast className="w-[30px] h-[30px] text-green-600 ml-auto" />
      ),
    },
    {
      id: 1,
      name: "burger",
      icon: (
        <GiHamburger className="w-[30px] h-[30px] text-green-600 ml-auto" />
      ),
    },
    {
      id: 1,
      name: "main_course",
      icon: (
        <MdOutlineFoodBank className="w-[30px] h-[30px] text-green-600 ml-auto" />
      ),
    },
    {
      id: 1,
      name: "soups",
      icon: <TbSoup className="w-[30px] h-[30px] text-green-600 ml-auto" />,
    },
    {
      id: 1,
      name: "pasta",
      icon: (
        <CiBowlNoodles className="w-[30px] h-[30px] text-green-600 ml-auto" />
      ),
    },
    {
      id: 1,
      name: "pizza",
      icon: (
        <GiFullPizza className="w-[30px] h-[30px] text-green-600 ml-auto" />
      ),
    },
  ];
  return (
    <div className="container flex flex-wrap gap-5 md:justify-between justify-center items-center">
      {AllCategories.map((cat, id) => (
        <div
          key={id}
          onClick={() => onCategorySelect(cat.name)}
          className={`group p-2 rounded-lg min-w-[150px] h-[100px] flex flex-col justify-between cursor-pointer transition-all text-slate-800 hover:bg-green-400
    ${selectedCategory === cat.name ? "bg-green-400" : "bg-white"}`}
        >
          <h3 className="text-md text-slate-800 font-bold">{cat.name}</h3>
          <span className="group-hover:text-green-950">{cat.icon}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
