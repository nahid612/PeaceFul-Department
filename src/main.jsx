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
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import FamilyDetails from "./pages/Categories/FamilyDetails";
import StudentDetails from "./pages/Categories/StudentDetails";
import Student from "./pages/Categories/Student";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("data.json"),
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/updateprofile",
        element: <UpadateProfile></UpadateProfile>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/categories/appertment",
        element: <Appertment></Appertment>,
      },
      {
        path: "appertmentdetails/:id",
        element: (
          <PrivateRoute>
            <AppertmentDetails></AppertmentDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const appert = data.find((info) => info.id == params.id);
          return appert;
        },
      },
      {
        path: "/categories/family",
        element: <Family></Family>,
      },
      {
        path: '/familydetails/:id',
        element: <PrivateRoute>
          <FamilyDetails></FamilyDetails>
        </PrivateRoute>,
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const family = data.find((info) => info.id == params.id);
          return family;
        },
      },
      {
        path: "/categories/student",
        element: <Student></Student>,
      },
      {
        path: '/studentdetails/:id',
        element: <PrivateRoute>
          <StudentDetails></StudentDetails>
        </PrivateRoute>,
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const student = data.find((info) => info.id == params.id);
          return student;
        },
      }
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
