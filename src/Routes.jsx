import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ReversedHomepage from "pages/ReversedHomepage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "reversedhomepage",
      element: <ReversedHomepage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
