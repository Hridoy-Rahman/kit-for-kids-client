import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sign/SignUp";
import Blogs from "../Pages/Blogs/Blogs";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
           path:'/',
           element:<Home></Home>
        },
        {
            path:'login',
            element: <Login></Login>
        },
        {
            path:'signup',
            element:<SignUp></SignUp>
        },
        {
            path:'blogs',
            element: <Blogs></Blogs>
        }
      ]
    },
  ]);

  export default router;