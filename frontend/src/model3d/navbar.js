import React, { useState} from 'react';
// import { Link } from 'react-router-dom';
import './navbarstyle.css';

const Navbar = () => { 
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };


  return (
    <div className="navbarstyle"> 
      <div className="navtitle">
        FoodPath
      </div>
      <div>
      <a href="/" className="navbutton">2D Model</a>
        <button className="navbutton" onClick={toggleDropdown}>Healthy Foods!</button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <a href="/guides/brain" > For Brain</a>
            <a href="/guides/brain">For Lungs</a>
            <a href="/guides/brain">For Heart</a>
            <a href="/guides/brain">For Stomach</a>
            <a href="/guides/brain">For Liver</a>
            <a href="/guides/brain">For Intestines</a>
          </div>
        )}
        <a href="/model2dpage" className="navbutton">2D Model</a>
      </div>
    </div>
  );
};

export default Navbar;
