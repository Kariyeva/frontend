import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import CourseDetail from "./CourseDetail";
import NotFound from "./NotFound";
import CourseError from "./CourseError";
import { courseLoader } from "./courseLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "courses", element: <Courses /> },
      {
        path: "courses/:id",
        element: <CourseDetail />,
        loader: courseLoader,
        errorElement: <CourseError />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);