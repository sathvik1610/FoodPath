import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [login, setLogin] = useState("LOGIN");
  const [path, setPath] = useState("/login");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const controls = useAnimation();
  const dropdownRef = useRef(null);
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const un = decodedToken.email.toUpperCase();
      setLoggedin(true);
      setLogin(un);
      setPath("/login");
    }
  }, [token]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    controls.start({
      y: visible ? 0 : -100,
      opacity: visible ? 1 : 0,
      transition: { duration: 0.4 },
    });
  }, [visible, controls]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setLoggedin(false);
    setLogin("LOGIN");
    setPath("/login");
    navigate("/login");
  };

  const handleBadges = () => {
    navigate("/trophies");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <motion.header
      animate={controls}
      className="bg-custom-blue text-white shadow-md w-[95%] m-auto mt-7 rounded-full fixed top-0 left-0 right-0 z-custom"
    >
      <div className="container mx-auto flex items-center py-4 px-6">
        <a href="/" className="text-2xl pl-8 font-cinzel">
          FoodPath®
        </a>
        <nav className="flex-1 font-helvetica">
          <ul className="flex justify-center gap-10 font-helvetica uppercase">
            <li className="nav-item mr-12">
              <a
                href="/faq"
                className="hover:text-[#CA8263] hover:bg-[#1C2E3B] px-4 py-2 transition duration-300 rounded-md"
              >
                FAQ
              </a>
            </li>
            <li className="nav-item mr-12">
              <a
                href="/model2dpage"
                className="hover:text-[#CA8263] hover:bg-[#1C2E3B] px-4 py-2 transition duration-300 rounded-md"
              >
                2D MODEL
              </a>
            </li>
            <li className="nav-item mr-12">
              <a
                href="/model3dpage"
                className="hover:text-[#CA8263] hover:bg-[#1C2E3B] px-4 py-2 transition duration-300 rounded-md"
              >
                3D MODEL
              </a>
            </li>
            <li className="nav-item mr-12">
              <a
                href="/quiz"
                className="hover:text-[#CA8263] hover:bg-[#1C2E3B] px-4 py-2 transition duration-300 rounded-md"
              >
                QUIZ
              </a>
            </li>
            <li className="nav-item mr-12">
              <a
                href='/trophies'
                className="hover:text-[#CA8263] hover:bg-[#1C2E3B] px-4 py-2 transition duration-300 rounded-md"
              >
                BADGES
              </a>
            </li>
          </ul>
        </nav>
        <div className="relative flex items-center space-x-2 pr-8 font-helvetica">
          {loggedin ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="hover:text-[#CA8263] hover:bg-[#1C2E3B] px-4 py-2 transition duration-300 uppercase rounded-md"
              >
                {login}
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                  <ul className="py-2">
                    <li
                      className="px-4 py-2 hover:bg-[#1C2E3B] hover:text-[#CA8263] transition duration-300 cursor-pointer rounded-md"
                      onClick={handleLogout}
                    >
                      LOGOUT
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <a
              href={path}
              className="hover:text-[#CA8263] hover:bg-[#1C2E3B] px-4 py-2 transition duration-300 uppercase rounded-md"
            >
              {login}
            </a>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
