import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CakePage from "./pages/CakePage/CakePage";
import CakesPage from "./pages/Cakes/CakesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/cakes",
        element: <CakesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "cakes/:cakeId",
        element: <CakePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
