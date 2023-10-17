import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "../pages/Dashboard";
import SelectionDayShow from "../pages/SelectionDay/SelectionDayShow";
import SelectionDayIndex from "./../pages/SelectionDay/SelectionDayIndex";
import SelectionDayAdd from "../pages/SelectionDay/SelectionDayAdd"
import BootcampIndex from '../pages/Bootcamp/BootcampIndex'
import BootcampForm from '../pages/Bootcamp/BootcampForm'
import Login from "../pages/Login"
import Signup from '../pages/Signup'

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
    element: <DefaultLayout 
      title='Seguimiento' 
      menuItems={[
        {url: '/tracking/bootcamp', label: 'BOOTCAMPS'},
        {url: '/tracking/coders', label: 'CODERS'}
      ]}/>,
    children:[
      {
        path: '/tracking/bootcamp',
        element: <BootcampIndex />
      },
      {
        path: '/tracking/bootcamp/add',
        element: <BootcampForm />
      },
      {
        path: '/tracking/bootcamp/update/:id',
        element: <BootcampForm />
      },
      {
        path: '/tracking/coders',
        element: <Dashboard />
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