import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import ApplayOut from "./layout/ApplayOut";
import TrustTeamSection from "./pages/TrustTeamSection";
import MediaPage from "./pages/MediaPage";
import { ContactForm } from "./pages/ContactForm";
import ServicesPage from "./pages/ServicesPage";
import { AllPortfolio } from "./pages/AllPortfolio";
import StoryPage from "./pages/StoryPage";
import AboutPage from "./pages/AboutPage";
import UltraPremiumSection from "./pages/UltraPremiumSection";



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
      },

      {
        path: "/services",
        element: <ServicesPage />
      },
      
      {
        path: "/portfolio",
        element: <AllPortfolio />
      }, 
      {
        path: "/story/:id",
        element: <StoryPage />
      }, 

      {
        path: "/about",
        element: <AboutPage />
      },

      {
        path: "/start-project",
        element: <UltraPremiumSection />
      }
      
    ]
  }

 

 
]);

export default function App() {
  return <RouterProvider router={router} />;
}
