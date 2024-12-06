import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import img from "./../../assets/about-BgAkqdr2.jpg";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT" },
    { to: "/skills", label: "SKILLS" },
    { to: "/experience", label: "EXPERIENCE" },
    { to: "/work", label: "WORK" },
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="sidebar"
        aria-expanded={isSidebarOpen ? "true" : "false"}
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        id="sidebar"
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto flex flex-col items-center pt-14 bg-gray-50">
          <img src={img} alt="Profile" className="mb-8 rounded-full shadow-lg w-[170px] h-[170px]" />
          <div className="absolute top-2 right-6 lg:hidden" onClick={() => setIsSidebarOpen(false)}>
            <i className="fa-solid fa-x cursor-pointer"></i>
          </div>
          <div className="text-center mb-10">
            <p className="text-2xl font-serif font-bold">Salah Saed</p>
            <p className="font-thin text-xs text-gray-400">
              <span className="text-blue-300">FRONTEND DEVELOPER</span> IN EGYPT
            </p>
          </div>
          <ul className="space-y-2 text-center font-thin">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.to} className="p-2 text-gray-400 rounded-lg group">
                  <span className="ms-3 hover:border-b hover:border-b-blue-500 ease-in-out duration-300">{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
