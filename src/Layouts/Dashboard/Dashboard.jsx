import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaCalendarAlt, FaHome } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
// import { BsFillChatTextFill, BsFillCalendarHeartFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import UseCart from "../../Hooks/UseCart";

const Dashboard = () => {
  const [cart] = UseCart();

  return (
    <div className="drawer  lg:drawer-open drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}

        <Outlet></Outlet>

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu gap-2 p-4 w-80 h-full bg-[#D1A054] ">
          {/* Sidebar content here */}

          <li>
            <NavLink to="/dashboard/home">
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservations">
              <FaCalendarAlt /> Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <GiWallet /> Payment history
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/my-cart">
              <button className="flex gap-2 items-center">
                <FaShoppingCart />{" "}My Cart
                <div className="badge badge-error">{cart?.length || 0}</div>
              </button>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to=" ">
              <BsFillChatTextFill /> add review
            </NavLink>
          </li>
          <li>
            <NavLink to=" ">
              <BsFillCalendarHeartFill /> my booking
            </NavLink>
          </li> */}

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome /> HOME
            </NavLink>
          </li>

          <li>
            <NavLink to="/menu">
              <BiMenu /> OUR MENU
            </NavLink>
          </li>

          <li>
            <NavLink to="/order/Salad">
              <BiMenu /> ORDER FOOD
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

{
  /* <li>
<NavLink
  to="/dashboard/my-cart"
  className="btn border-0 justify-start   bg-[#fa9704] hover:bg-[#f17624]"
>
 
  <FaShoppingCart  /> My Cart
</NavLink>
</li> */
}
// className="md:text-xl"
