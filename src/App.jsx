import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import ApplayOut from "./layout/ApplayOut";
import TrustTeamSection from "./pages/TrustTeamSection";
import MediaPage from "./pages/MediaPage";

const router = createBrowserRouter([

  {
    path: "/",
    element: <ApplayOut />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/our-team",
        element: <TrustTeamSection />
      }, 
      {
        path: "/media",
        element: <MediaPage />
      }
    ]
  }

 

 
]);

export default function App() {
  return <RouterProvider router={router} />;
}
