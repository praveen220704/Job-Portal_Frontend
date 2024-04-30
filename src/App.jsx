import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeNav from "./wrappers/HomeNav";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import DashboardNav from "./wrappers/DashboardNav";
import { loader as userLoader } from "./wrappers/DashboardNav";
import { loader as jobsLoader } from "./Components/Jobs";
import Jobs from "./Components/Jobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNav />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <DashboardNav />,
    loader: userLoader,
    children: [
      {
        path: 'dashboard',
        element: <h1>Dashboard</h1>
      },
      {
        path: 'jobs',
        element: <Jobs />,
        loader: jobsLoader
      },
      {
        path: 'applications',
        element: <h1>Applications</h1>
      },
      {
        path: 'profile',
        element: <h1>Profile</h1>
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;