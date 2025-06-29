import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      
      
    ],
  },
]);
