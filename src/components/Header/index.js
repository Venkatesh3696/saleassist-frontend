import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { PiBookmarkSimple } from "react-icons/pi";
import { IoBagOutline } from "react-icons/io5";
import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <h1>TANN TRIM</h1>
      <div>
        <FaSearch className="icon" />
        <IoPersonOutline className="icon" />
        <PiBookmarkSimple className="icon" />
        <IoBagOutline className="icon" />
      </div>
    </div>
  );
};

export default Header;
