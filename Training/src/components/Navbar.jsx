import React from "react";
import Logo from "../assets/Images/images.jpg";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-3">
      <img src={Logo} alt="Chumma" className="w-[50px]" />
      <Link to="/" className="text-blue-500 text-2xl font-bold">Movies</Link>
      <Link to="/watchlist" className="text-blue-500 text-2xl font-bold">Watchlist</Link>
    </div>
  );
};

export default Navbar;
