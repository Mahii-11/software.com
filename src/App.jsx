import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import ApplayOut from "./layout/ApplayOut";
import TrustTeamSection from "./pages/TrustTeamSection";
import MediaPage from "./pages/MediaPage";
import { ContactForm } from "./pages/ContactForm";


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
      },

      {
        path: "/contact",
        element: <ContactForm />
      }
      
    ]
  }

 

 
]);

export default function App() {
  return <RouterProvider router={router} />;
}
