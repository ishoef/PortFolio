import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import HireMePage from "../Pages/HireMe/HireMePage";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "hireme",
        Component: HireMePage,
      },
      {
        path: "Projects/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);
