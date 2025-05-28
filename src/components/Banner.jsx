import React from "react";
import TasawarBanner from "./../assets/tasawar.png";

const Banner = () => {
  return (
    <div className="w-full md:h-[92vh] h-[40vh] overflow-hidden">
      <img
        className="md:h-[92vh] h-[40vh] w-full object-top object-cover"
        src={TasawarBanner}
      />
    </div>
  );
};

export default Banner;
