import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "../pages/Dashboard";
import SelectionDayShow from "../pages/SelectionDay/SelectionDayShow";
import SelectionDayIndex from "./../pages/SelectionDay/SelectionDayIndex";
import SelectionDayAdd from "../pages/SelectionDay/SelectionDayAdd";
import Requirements from "../pages/ConfigurationPages/Requirements";
import RequirementEdit from "../pages/ConfigurationPages/RequirementEdit";
import PersonStatus from "../pages/ConfigurationPages/PersonStatus";
import RequirementStatus from "../pages/ConfigurationPages/RequirementStatus";
import Login from "../pages/Login";
import Signup from '../pages/Signup';
import CodersIndex from "../pages/CodersFrontend/CodersIndex";

import Evaluation from "../pages/Evaluation";
import PublicAddPerson from "../pages/Person/PublicAddPerson";
import AdminAddPerson from "../pages/Person/AdminAddPerson";



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
    path: '/recruitment/selectiondayshow/:id',
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


  // Person

  {
    path:'/inscribe',
    element: <PublicAddPerson />
  },

  {
    path:'/recruitment/person/add',
    element: <AdminAddPerson />
  },
  {
    path: '/configuration/requirements',
    element: <Requirements />
  },
  {
    path: '/configuration/requirements/edit/:id',
    element: <RequirementEdit />
  },
  {
    path: '/configuration/person/status',
    element: <PersonStatus />
  },
  {
    path: '/configuration/requirement/status',
    element: <RequirementStatus />
  },
])

export default Router;