import { createBrowserRouter } from 'react-router-dom';
import Login from '../../Auth/Login';
import Main from '../../LayOut/Main';



export const Routes = createBrowserRouter([

   // Main Layout 
   {
      path: '/', element: <Main />, children: [
         { path: '/', element: <Login /> },
         // { path: '/home', element: <Home /> },
         // { path: '/details/:id', element: <PrivetRoutes><Details /></PrivetRoutes>, loader: ({ params }) => fetch(`https://m-server-pi.vercel.app/posts/${params.id}`) },

      ]
   },

])

