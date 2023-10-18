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
//import CommentsIndexByPerson from "../pages/Comments/CommentsIndexByPerson";
import Requirements from "../pages/ConfigurationPages/Requirements";
import RequirementEdit from "../pages/ConfigurationPages/RequirementEdit";
import PersonStatus from "../pages/ConfigurationPages/PersonStatus";
import StatusRequirement from "../pages/ConfigurationPages/StatusRequirement";
import Login from "../pages/Login";
import Signup from '../pages/Signup';
import CodersIndex from "../pages/CodersFrontend/CodersIndex";
import Evaluation from "../pages/Evaluation";
import PublicAddPerson from "../pages/Person/PublicAddPerson";
import AdminAddPerson from "../pages/Person/AdminAddPerson";
import ShowPerson from "../pages/Person/ShowPerson";
import AllPeople from "../pages/Person/AllPeople";
import IndexPerson from "../pages/Person/IndexPerson";
import IndexPersonBootcamp from "../pages/PersonBootcamp/IndexPersonBootcamp";
import PersonbyBootcampTable from "../pages/PersonBootcamp/PersonbyBootcampTable";
import Statistics from "../pages/Statistics/Statistics";
import CodersAdd from "../pages/CodersFrontend/CodersAdd";
import IndexPersonBootcamp from "../pages/PersonBootcamp/IndexPersonBootcamp";
import PeoplebyBootcamp from "../pages/PersonBootcamp/PeoplebyBootcamp";


// const Router = createBrowserRouter([
//   {
//     path: '/home',
//     element: <Navigate to='/' />
//   },
//   {
//     path: '/dashboard',
//     element: <Navigate to='/' />
//   },

//   {
//     path: '/person/:id',
//     element: <ShowPerson />
//   },
//   {
//     path: '/people',
//     element: <AllPeople />
//   },
  
    

//   {
//     path: '/',
//     element: <DefaultLayout title='Home'/>,
//     children:[
//       {
//         path: '/',
//         element: <Dashboard />
//       }
//     ]
//   },
//   {
//     path: '/tracking',
//     element: <DefaultLayout title='Seguimiento'/>,
//     children:[
//       {
//         path: '/tracking/bootcamp',
//         element: <BootcampIndex />
//       },
//       {
//         path: '/tracking/bootcamp/add',
//         element: <BootcampAdd />
//       },
//       {
//         path: '/tracking/coders',
//         element: <CodersIndex />
//       },
//       {
//         path:'/tracking/evaluation/id',
//       element:<Evaluation/>
//       }

//     ]
//   },
//   {
//     path: '/login',
//     element: <Login/>
//   },
//   {
//     path: '/signup',
//     element: <Signup/>
//   },
//   {
//     path:'/inscribe',
//     element: <PublicAddPerson />
//   },

//   {
//     path: '/recruitment',
//     element: <DefaultLayoutRecruitment title='Captación'/>,
//     children:[
      
//       {
//         path:'/recruitment/person/add',
//         element: <AdminAddPerson />
//       },
//       {
//         path:'/recruitment/person/index',
//         element: <IndexPerson />
//       },
//        //Comments
  
//       {
//         path: '/recruitment/comments',
//         element: <CommentsIndexByPerson />
//       },
//       //
//       {
//         path: '/recruitment/selectiondayshow/:id',
//         element: <SelectionDayShow />
//       },
//       {
//         path: '/recruitment/selectiondayupdate/:id',
//         element: <SelectionDayUpdate />
//       },
//       {
//         path: '/recruitment/selectionday/add',
//         element: <SelectionDayAdd />
//       },
//       {
//         path: '/recruitment/selectionday',
//         element: <SelectionDayIndex />
//       },
    
//     ]
//   },

//   //Configuration
//   {
//     path: '/configuration',
//     element: <DefaultLayoutConfiguration title='Configuración'/>,
//     children:[
//       {
//         path: '/configuration/requirements',
//         element: <Requirements />
//       },
//       {
//         path: '/configuration/requirements/edit/:id',
//         element: <RequirementEdit />
//       },
//       {
//         path: '/configuration/person/status',
//         element: <PersonStatus />
//       },
//       {
//         path: '/configuration/status/requirement',
//         element: <StatusRequirement />
//       },
//     ]
//   },

// ])

// export default Router;


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
    path: '/stats',
    element: <Statistics />
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
    element: <DefaultLayout title='Seguimiento' />,
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
        path:'/recruitment/personbootcamp/index',
        element: <IndexPersonBootcamp />
      },
      {
        path:'/recruitment/personbybootcamp/:id',
        element: <PersonbyBootcampTable />
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