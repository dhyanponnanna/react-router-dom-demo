import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/> 
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>,
  }
  
  
])
function AppRoutes() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default AppRoutes
