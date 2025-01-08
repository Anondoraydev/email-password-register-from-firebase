
import React from "react"; 
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Home from "./componets/Home/Home";  
import Root from "./componets/Root/Root"; 
import Login from "./componets/Login/Login";
import Ragister from "./componets/Ragister/Ragister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,  
    children: [
      {
        path: "/",
        element: <Home />, 
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/ragister',
        element:<Ragister/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
