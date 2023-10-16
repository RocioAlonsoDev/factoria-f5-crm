import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "../pages/Dashboard";
import SelectionDayShow from "../pages/SelectionDay/SelectionDayShow";
import SelectionDayIndex from "./../pages/SelectionDay/SelectionDayIndex";
import SelectionDayAdd from "../pages/SelectionDay/SelectionDayAdd";
import Login from "../pages/Login";
import Signup from '../pages/Signup';
import CodersIndex from "../pages/CodersFrontend/CodersIndex";

import Evaluation from "../pages/Evaluation";



const Router = createBrowserRouter([
  {
    path: '/recruitment/selectiondayshow/id',
    element: <SelectionDayShow />
  },
  {
    path: '/recruitment/selectionday/add',
    element: <SelectionDayAdd />
  },
  

  {
    path: '/',
    element: <DefaultLayout title='Home'/>,
    children:[
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/tracking',
    element: <DefaultLayout title='Seguimiento'/>,
    children:[
      {
        path: '/tracking/bootcamps',
        element: <Dashboard />
      },
      {
        path: '/tracking/coders',
        element: <CodersIndex />
      },
      {
        path:'/tracking/evaluation/id',
      element:<Evaluation/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/recruitment/selectionday',
    element: <SelectionDayIndex />
  },

])

export default Router;