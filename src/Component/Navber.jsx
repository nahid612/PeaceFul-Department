import { Link, NavLink } from "react-router-dom";

const Navber = () => {
  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-bold border border-green-600"
              : "font-medium"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <details>
          <summary>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " text-green-500 font-bold border border-green-600"
                  : "font-medium"
              }
              to="/categories"
            >
              Categories
            </NavLink>
          </summary>
          <ul className="p-2">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold border border-green-600"
                    : "font-medium"
                }
                to="/categories"
              >
                Students
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold border border-green-600"
                    : " font-medium"
                }
                to="/categories"
              >
                Rent
              </NavLink>
            </li>
            
          </ul>
        </details>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-green-500 font-bold border border-green-600"
              : "font-bold"
          }
          to="/updateprofile"
        >
          Update User
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl">PeaceFul-Department</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to='/login'>
        <a className="btn">Login</a>
        </Link>
      </div>
    </div>
  );
};

export default Navber;
