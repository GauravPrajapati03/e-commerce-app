import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchOpen]);

  return (
    <header className="shadow-lg bg-white">
      <div className="flex p-5 items-center justify-between max-w-[1080px] m-auto">
        <div className="text-[1.5rem] font-bold">Neomart</div>

        <nav className="hidden md:flex gap-12 text-[1.1rem] font-light">
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-5 text-[1.2rem]">
          <div ref={searchRef}>
            {searchOpen ? (
              <input
                type="text"
                placeholder="Search here..."
                autoFocus
                className="border border-gray-300 rounded-full px-4 py-1 text-[0.75rem] w-[150px] sm:w-[200px] md:w-[200px] focus:outline-none"
              />
            ) : (
              <CiSearch
                className="cursor-pointer text-[1.5rem]"
                onClick={() => setSearchOpen(true)}
              />
            )}
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <FiUser className="text-[1.5rem]" />
            <span className="hidden sm:inline">Account</span>
          </div>

          <button
            className="md:hidden text-[1.8rem]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-5 py-4 bg-gray-50 text-lg">
          <a href="" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="" onClick={() => setMenuOpen(false)}>
            Shop
          </a>
          <a href="" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <a href="" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
