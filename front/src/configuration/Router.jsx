import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "../pages/Dashboard";
import SelectionDayShow from "../pages/SelectionDay/SelectionDayShow";
import SelectionDayIndex from "./../pages/SelectionDay/SelectionDayIndex";
import SelectionDayAdd from "../pages/SelectionDay/SelectionDayAdd"
import SelectionDayUpdate from "../pages/SelectionDay/SelectionDayUpdate"
import BootcampIndex from '../pages/Bootcamp/BootcampIndex'
import BootcampAdd from '../pages/Bootcamp/BootcampAdd'
import CommentsIndexByPerson from "../pages/Comments/CommentsIndexByPerson";
import Requirements from "../pages/ConfigurationPages/Requirements";
import RequirementEdit from "../pages/ConfigurationPages/RequirementEdit";
import PersonStatus from "../pages/ConfigurationPages/PersonStatus";
import RequirementStatus from "../pages/ConfigurationPages/RequirementStatus";
import Login from "../pages/Login";
import Signup from '../pages/Signup';
import PublicAddPerson from "../pages/Person/PublicAddPerson";
import AdminAddPerson from "../pages/Person/AdminAddPerson";
import ShowPerson from "../pages/Person/ShowPerson";
import AllPeople from "../pages/Person/AllPeople";
import IndexPerson from "../pages/Person/IndexPerson";
import CodersIndex from "../pages/CodersFrontend/CodersIndex";




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
    path: '/recruitment/selectiondayshow/:id',
    element: <SelectionDayShow />
  },
  {
    path: '/recruitment/selectiondayupdate/:id',
    element: <SelectionDayUpdate />
  },
  {
    path: 'recruitment/selectionday/add',
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
        path: '/tracking/bootcamp',
        element: <BootcampIndex />
      },
      {
        path: '/tracking/bootcamp/add',
        element: <BootcampAdd />
      },
      {
        path: '/tracking/coders',
        element: <CodersIndex />
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
    path:'/recruitment/person/index',
    element: <IndexPerson />
  },



  //Connfiguration
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


  //Comments
  
  {
    path: '/recruitment/comments',
    element: <CommentsIndexByPerson />
  },
])

export default Router;