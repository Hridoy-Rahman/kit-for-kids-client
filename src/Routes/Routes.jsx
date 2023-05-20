import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sign/SignUp";
import Blogs from "../Pages/Blogs/Blogs";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import AllToy from "../Pages/AllToy/AllToy";
import AddAToy from "../Pages/AddAToy/AddAToy";
import AddedToyDetails from "../Pages/AddedToyDetails/AddedToyDetails";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoutes";



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
          path:"alltoy",
          element: <PrivateRoute><AllToy></AllToy></PrivateRoute>
        },
        {
          path:"addatoy",
          element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
        },
        {
          path:"toydetails/:id",
          element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path:"addedtoy/:id",
          element:<PrivateRoute><AddedToyDetails></AddedToyDetails></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:5000/addedToy/${params.id}`)
        },
        {
          path: "/addedtoy/:user_email",
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/addedToy?user_email=${params.user_email}`)
        }

      ]
    },
  ]);

  export default router;