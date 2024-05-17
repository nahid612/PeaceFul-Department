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
import Family from "./pages/Categories/Family";
import AppertmentDetails from "./pages/Categories/Appertment/AppertmentDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>fetch('data.json')
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
        path: 'appertmentdetails/:id',
        element: <AppertmentDetails></AppertmentDetails>,
        loader: async ({params}) =>{
          const res = await fetch('/data.json')
          const data = await res.json()
          const appert = data.find(info => info.id == params.id)
          return appert
        }
      },
      {
        path: '/family',
        element: <Family></Family>
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
