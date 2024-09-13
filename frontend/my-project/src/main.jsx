import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import PracticeArea from "./Components/PracticeArea.jsx";
import Signin from "./Components/Signin.jsx";
import Registration from "./Components/Registration.jsx";
import Coporate from "./Components/PreacticeAreaPage/Coporate.jsx";
import RealEstate from "./Components/PreacticeAreaPage/RealEstate.jsx";
import Health from "./Components/PreacticeAreaPage/Health.jsx";
import Insurance from "./Components/PreacticeAreaPage/Insurance.jsx";
import Construction from "./Components/PreacticeAreaPage/Construction.jsx";
import Ecommerce from "./Components/PreacticeAreaPage/Ecommerce.jsx";
import ForgetPassword from "./Components/ForgetPassword.jsx";
import Profile from "./Components/Profile.jsx";
import Error from "./Components/UI/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "practice-area",
        element: <PracticeArea />,
      },
      
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "forgetPassword",
        element: <ForgetPassword />,
      },
      {
        path: "coporate",
        element: <Coporate />,
      },
      {
        path: "realEstate",
        element: <RealEstate />,
      },
      {
        path: "health",
        element: <Health />,
      },
      {
        path: "insurance",
        element: <Insurance />,
      },
      {
        path: "construction",
        element: <Construction />,
      },
      {
        path: "ecommerce",
        element: <Ecommerce />,
      },
    ],
  },
  {
    path: "error",
    element: <Error />,
  },
  {
    path: "sing-in",
    element: <Signin />,
  },
  {
    path: "registration",
    element: <Registration />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
