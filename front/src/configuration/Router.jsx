import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import DefaultLayoutConfiguration from "../layouts/DefaultLayoutConfiguration";
import DefaultLayoutRecruitment from "../layouts/DefaultLayoutRecruitment";
import DefaultLayoutDashboard from "../layouts/DefaultLayoutDashboard";
import Dashboard from "../pages/Dashboard";
import SelectionDayShow from "../pages/SelectionDay/SelectionDayShow";
import SelectionDayIndex from "./../pages/SelectionDay/SelectionDayIndex";
import SelectionDayAdd from "../pages/SelectionDay/SelectionDayAdd"
import SelectionDayUpdate from "../pages/SelectionDay/SelectionDayUpdate"
import BootcampIndex from '../pages/Bootcamp/BootcampIndex'
import BootcampForm from '../pages/Bootcamp/BootcampForm'
import Login from "../pages/Login"
import Signup from '../pages/Signup'

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
    path: '/person/:id',
    element: <ShowPerson />
  },
  {
    path: '/people',
    element: <AllPeople />
  },    

  {
    path: '/',
    element: <DefaultLayoutDashboard title='Home'/>,
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
        element: <CodersIndex />
      },
      {
        path: '/tracking/coders/add',
        element: <CodersAdd />
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
    path:'/inscribe',
    element: <PublicAddPerson />
  },

  {
    path:'/inscribe_femcoders',
    element: <AddPersonFemcoders />
  },

  {
    path:'/inscribe_digitalacademy',
    element: <AddPersonDigitalAcademy />
  },

  {
    path: '/recruitment',
    element: <DefaultLayoutRecruitment title='Captación'/>,
    children:[
      
      {
        path:'/recruitment/person/add',
        element: <AdminAddPerson />
      },
      {
        path:'/recruitment/person/index',
        element: <IndexPerson />
      },
      {
      path: '/recruitment/person/:id',
      element: <ShowPerson />
      },
      //
      {
        path: '/recruitment/selectiondayshow/:id',
        element: <SelectionDayShow />
      },
      {
        path: '/recruitment/selectiondayupdate/:id',
        element: <SelectionDayUpdate />
      },
      {
        path: '/recruitment/selectionday/add',
        element: <SelectionDayAdd />
      },
      {
        path: '/recruitment/selectionday',
        element: <SelectionDayIndex />
      },
      {
        path: '/recruitment/estadisticas',
        element: <Statistics />
      },
    
    ]
  },

  //Configuration
  {
    path: '/configuration',
    element: <DefaultLayoutConfiguration title='Configuración'/>,
    children:[
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
        path: '/configuration/status/requirement',
        element: <StatusRequirement />
      },
    ]
  },

])

export default Router;