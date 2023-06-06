import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import UseCart from "../../../Hooks/UseCart";
import { useContext } from "react";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);

  const [cart] = UseCart();

  // console.log(cart);

  const [isAdmin] = useAdmin();
  const handleLogout = () => {
    LogOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navOptions = (
    <>
      <div className="md:flex gap-10"></div>

      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/menu">OUR MENU</Link>
      </li>
      <li>
        <Link to="/order/Salad">ORDER FOOD</Link>
      </li>
      {isAdmin || (
        <li>
          <Link to="secret">
            Dashboard<MdDashboard></MdDashboard>{" "}
          </Link>
        </li>
      )}
      {isAdmin ? (
        <li>
          <Link to="/dashboard/admin-home">
            <button className="flex gap-2  items-center">
              <FaHome className="text-2xl mx-2" />{" "}
            </button>
          </Link>
        </li>
      ) : (
        <li>
          <Link to="/dashboard/my-cart">
            <button className="flex gap-2  items-center">
              <FaShoppingCart />{" "}
              <div className="badge badge-error">{cart?.length || 0}</div>
            </button>
          </Link>
        </li>
      )}

      {user ? (
        <>
          <figure>
            <img
              className="avatar w-10 rounded-full mx-2"
              src={user?.photoURL}
              title={user?.displayName}
              alt=""
            />
          </figure>
          <button onClick={handleLogout} className="btn btn-ghost mx-2">
            Logout
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 max-w-screen-2xl bg-opacity-30 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>
      <div className="navbar hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">SIGN OUT</a>
      </div> */}
    </div>
  );
};

export default Navbar;
