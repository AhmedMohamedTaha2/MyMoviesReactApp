// NavbarComponent.jsx
<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavbarComponent = ({ setSearchTerm, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-gradient-to-r from-gray-900 to-gray-800 border-b-2 border-gray-100">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-white text-xl font-bold hover:text-gray-300"
            onClick={() => setSearchTerm("")}
          >
            <img src="/public/Search.png" alt="Logo" className="w-24" />
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="relative size-9 flex justify-center items-center gap-x-2 rounded-lg"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              style={{ backgroundColor: "#FFF" }}
            >
              {!isOpen ? (
                <svg
                  className="shrink-0 size-4 text-sky-500 font-bold"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              ) : (
                <svg
                  className="shrink-0 size-4 text-red-600 font-bold"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              )}
=======
import React from "react";

const NavbarComponent = ({ children }) => {
  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-slate-800 bg-red-600">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl text-sky-500">MoviesApp</h3>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg bg-red-500 bg-red-500"
              id="hs-navbar-example-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-example"
              style={{ backgroundColor: '#FFF' }}
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4 text-sky-500 font-bold"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4 text-red-600 font-bold"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4
            </button>
          </div>
        </div>

<<<<<<< HEAD
        <div className="hidden sm:block sm:basis-full sm:grow">
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-5 sm:mt-0 sm:ps-5 justify-center md:justify-end">
            {children}
          </div>
        </div>

        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="sm:hidden basis-full grow"
        >
          <div className="flex flex-col items-center gap-5 mt-5">
            {children}
          </div>
        </motion.div>
=======
        <div
          id="hs-navbar-example"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-5 sm:mt-0 sm:ps-5 justify-center md:justify-end">
            {/* هنا هيتم عرض SearchComponent لأنه بيتبعت كـ children */}
            {children}
          </div>
        </div>
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4
      </nav>
    </header>
  );
};

<<<<<<< HEAD
export default NavbarComponent;
=======
export default NavbarComponent;
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4
