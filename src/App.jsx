import { Suspense, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { Outlet, createBrowserRouter } from "react-router-dom";
import appStore from "./Utils/Redux/appStore.js";
import UserContext from "./Utils/UserContext.js";
import About from "./components/About.jsx";
import Body from "./components/Body.jsx";
import Cart from "./components/Cart.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Footer from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Ordered from "./components/Ordered.jsx";
import Profile from "./components/Profile.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";

const App = () => {
  const [userName, setUserName] = useState();

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <>
          <Header />
          <Outlet />
          <Toaster position="bottom-right" reverseOrder={false} />
          <Footer />
        </>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        errorElement: <Error />,
      },
      {
        path: "/restaurants",
        element: <Body />,
      },

      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <About />,
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/ordered",
        element: <Ordered />,
      },
      {
        path: "/restaurants/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
export default appRouter;
