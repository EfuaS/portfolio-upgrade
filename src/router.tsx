/* Generated with Copilot — reviewed */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./features/sections/Home";
import { About } from "./features/sections/About";
import { Works } from "./features/sections/Works";
import { Education } from "./features/sections/Education";
import { Contact } from "./features/sections/Contact";
import { Layout } from "./features/sections/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
