import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Recipe from "./pages/Recipe";
import Signup from "./pages/Signup";
import RootLayout from "./layout/RootLayout";
import { auth } from "./firebase/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useGlobalContext } from "./hooks/useGlobalContext";

function App() {
  const { user, isAuthReady, dispatch } = useGlobalContext();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "recipe/:id",
          element: <Recipe />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "IS_AUTH_READY", payload: user });
    });
  }, []);
  return isAuthReady && <RouterProvider router={routes} />;
}

export default App;
