import { Link, NavLink, useLocation } from "react-router-dom";
import { useGlobalContext } from "../context/ProductContext";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const { showSearch, setShowSearch, search, setSearch } = useGlobalContext();
  const { pathname } = useLocation();
  const [menu, setMenu] = useState("hidden");
  const showSearchBtn = pathname === "/collection";
  const inputSearch = useRef(null);
  useEffect(() => {
    if (showSearch === "flex") {
      inputSearch.current?.focus();
    }
  }, [showSearch]);
  const handleShowSearch = () => {
    setShowSearch("flex");
    setSearch("");
  };
  const handleCloseSearch = () => {
    setShowSearch("hidden");
    setSearch("");
  };

  return (
    <>
      <nav className="w-[80vw] m-auto flex justify-between items-center relative">
        <button
          className="block xl:hidden cursor-pointer"
          onClick={() =>
            menu === "hidden" ? setMenu("flex") : setMenu("hidden")
          }
        >
          <i className="fa-solid fa-ellipsis text-2xl"></i>
        </button>
        <div>
          <Link to="/">
            <button className="cursor-pointer font-bold text-2xl">
              My Store
            </button>
          </Link>
        </div>
        <div className="hidden xl:block">
          <ul className="flex ">
            <li>
              <NavLink
                to="/"
                className="p-6 font-semibold hover:border-b-2 transition-all ease-in duration-100"
              >
                <i className="fa-solid fa-house"></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection"
                className="p-6 font-semibold hover:border-b-2 transition-all ease-in duration-100"
              >
                COLLECTION
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="p-6 font-semibold hover:border-b-2 transition-all ease-in duration-100"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="p-6 font-semibold hover:border-b-2 transition-all ease-in duration-100"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className={`absolute block xl:hidden top-16 left-0 z-10 bg-orange-400 h-60 transition-all ease-in duration-150 ${menu}`}
        >
          <ul className="flex flex-col">
            <li onClick={() => setMenu("hidden")}>
              <NavLink
                to="/"
                className="block p-4 w-44 font-semibold hover:border-b-2 transition-all ease-in duration-100"
              >
                <i className="fa-solid fa-house"></i>
              </NavLink>
            </li>
            <li onClick={() => setMenu("hidden")}>
              <NavLink
                to="/collection"
                className="block p-4 w-44 font-semibold hover:border-b-2 transition-all ease-in duration-100"
              >
                COLLECTION
              </NavLink>
            </li>
            <li onClick={() => setMenu("hidden")}>
              <NavLink
                to="/about"
                className="block p-4 w-44 font-semibold hover:border-b-2 transition-all ease-in duration-100"
              >
                ABOUT
              </NavLink>
            </li>
            <li onClick={() => setMenu("hidden")}>
              <NavLink
                to="/contact"
                className="block p-4 w-44 font-semibold hover:border-b-2 transition-all ease-in duration-100"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex">
          <button
            className="px-2 py-4 md:px-4 cursor-pointer hover:scale-[1.2]"
            onClick={handleShowSearch}
          >
            {showSearchBtn ? (
              <i className="fa-solid fa-magnifying-glass"></i>
            ) : null}
          </button>
          <Link to="/login">
            <button className="px-2 py-4 md:px-4 cursor-pointer hover:scale-[1.2]">
              <i className="fa-regular fa-user"></i>
            </button>
          </Link>

          <div className="px-2 py-4 md:px-4 cursor-pointer hover:scale-[1.2] relative">
            <button>
              <i className="fa-solid fa-bag-shopping"></i>
            </button>
            <span className="absolute bottom-3 right-3 text-center text-white text-[10px] w-4 h-4 bg-red-500 p-0.5 rounded-full">
              0
            </span>
          </div>
        </div>
      </nav>

      {showSearchBtn ? (
        <div
          className={` pt-5 w-full mt-5 justify-center gap-2 border-b pb-2  bg-slate-50 ${showSearch}`}
        >
          <input
            type="text"
            placeholder="Search filter..."
            className="text-xl border p-2 outline-0 w-1/2"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            autoFocus
            ref={inputSearch}
          />
          <button
            className="text-2xl cursor-pointer hover:text-orange-700"
            onClick={handleCloseSearch}
          >
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
