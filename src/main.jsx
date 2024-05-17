import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home/Home";
import NotFound from "./Component/NotFound";
import AuthProvider from "./AuthProvider/AuthProvider";
import Categories from "./pages/Categories/Categories";
import UpadateProfile from "./pages/UpadateProfile/UpadateProfile";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Appertment from "./pages/Categories/Appertment/Appertment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/categories',
        element: <Categories></Categories>,
      },
      {
        path: '/updateprofile',
        element: <UpadateProfile></UpadateProfile>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/categories/appertment',
        element: <Appertment></Appertment>
      },
      {
        path: '/categories/student',
        element: <Appertment></Appertment>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
