import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import gif from "../../../public/loading.gif";
const Main = () => {
  const location = useLocation();
  const { loading } = useContext(AuthContext);
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("sign-up");

  return (
    <div>
      {(loading && (
        <>
          {/* <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
          </button> */}
          <img
            src={gif}
            className="w-full flex justify-center items-center"
            alt=""
          />
        </>
      )) || (
        <>
          {" "}
          {noHeaderFooter || <Navbar></Navbar>}
          <Outlet></Outlet>
          {noHeaderFooter || <Footer></Footer>}
        </>
      )}
    </div>
  );
};

export default Main;
