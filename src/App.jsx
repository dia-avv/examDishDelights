import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import './App.css';
import Home from "./views/Home";
import Recipes from "./views/Recipes";
import Favorites from "./views/Favorites";
import About from "./views/About";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import RecipeDetails from "./views/RecipeDetails";

const router = createBrowserRouter([
  {
    path: "/examDishDelights/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "recipes/recipe/:recipeId",
        element: <RecipeDetails />
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  }
]);

export default function App() {
  return(
    <RouterProvider router={router} />
  );
}