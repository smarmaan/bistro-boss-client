import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems";
import AdminHome from "../Pages/Dashboard/AdminHome";
import UserHome from "../Pages/UserHome/UserHome";
import ManageBookings from "../Pages/Dashboard/ManageBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "add-item",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "bookings",
        element: (
          <AdminRoute>
            <ManageBookings />
          </AdminRoute>
        ),
      },
    ],
  },
]);

{
  /* <PrivateRoute>
<AllUsers />
</PrivateRoute> */
}
