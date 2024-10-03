import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import GamePage from "./components/GamePage";
import GameGrid from "./components/GameGrid";
import HomePage from "./components/HomePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/game/:slug",
        element: <GamePage />,
      },
    ],
  },
]);

export default router;
