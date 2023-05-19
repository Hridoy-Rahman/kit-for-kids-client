import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sign/SignUp";
import Blogs from "../Pages/Blogs/Blogs";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import AllToy from "../Pages/AllToy/AllToy";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";



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
        },
        {
          path:"toydetails",
          element:<ToyDetails></ToyDetails>
        },
        {
          path:"alltoy",
          element: <AllToy></AllToy>
        },
        {
          path:"addatoy",
          element: <AddAToy></AddAToy>
        },
        {
          path:"mytoy",
          element: <MyToys></MyToys>
        }
      ]
    },
  ]);

  export default router;