import React from "react";
import heroImg from "../assets/images/herococktail.jpg";

const Home = () => {
  return (
    <div class="flex justify-center w-auto">
      <div class="text-center mt-12 mb-12">
        <strong class="text-purple-600 text-xl text-center my-5">
          Drinks please!
        </strong>
        <p>An easy way to find your new favorite drink.</p>
      </div>
      <img
        style={{ width: "30%", height: "30%" }}
        src={heroImg}
        alt="old fashioned cocktail"
      />
    </div>
  );
};

export default Home;
