import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul class="flex no-underline justify-end">
          <li class="text-white px-8 m-2 border-transparent rounded-lg bg-red-900 hover:bg-blue-600">
            <Link to="/">Home</Link>
          </li>
          <li class="text-white px-8 m-2 border-transparent rounded-lg bg-red-900 hover:bg-blue-600">
            <Link to="/drinks">Drinks</Link>
          </li>
          <li class="text-white px-8 m-2 border-transparent rounded-lg bg-red-900 hover:bg-blue-600">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
