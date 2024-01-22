import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./routes/Home";
import Repos from "./routes/Repos";

const router = createBrowserRouter([
  {
    path: "/Github_finder",
    element: <App />,
    children: [
      {
        path: "/Github_finder",
        element: <Home />,
      },
      {
        path: "/Github_finder",
        element: <Repos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);