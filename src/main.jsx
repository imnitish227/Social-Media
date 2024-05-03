import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./router/App";
import Createpost, { Createpostdata } from "./components/Createpost";
import Postlist from "./components/Postlist";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Postlist />,
      },
      {
        path: "/create-post",
        element: <Createpost />,
        action: Createpostdata,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
