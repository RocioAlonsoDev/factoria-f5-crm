import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login"


const Router = createBrowserRouter([
  {
    path: '/home',
    element: <Navigate to='/' />
  },
  {
    path: '/dashboard',
    element: <Navigate to='/' />
  },
  {
    path: '/',
    element: <DefaultLayout/>,
    children:[
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  }
])

export default Router;