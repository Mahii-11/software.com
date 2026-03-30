import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import ApplayOut from "./layout/ApplayOut";

const router = createBrowserRouter([

  {
    path: "/",
    element: <ApplayOut />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ]
  }

 

 
]);

export default function App() {
  return <RouterProvider router={router} />;
}
