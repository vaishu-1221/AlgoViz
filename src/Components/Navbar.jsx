import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-bar shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900">
        <i>AlgoVisualizer</i>
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-primary pb-1"
                : "hover:text-gray-900"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/sorting"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-primary pb-1"
                : "hover:text-primary"
            }
          >
            Sorting
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/graph"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-primary pb-1"
                : "hover:text-primary"
            }
          >
            Graph
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/detail/sorting/bubble"
            className={({ isActive }) =>
              isActive
                ? "text-primary border-b-2 border-primary pb-1"
                : "hover:text-primary"
            }
          >
            Description
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
