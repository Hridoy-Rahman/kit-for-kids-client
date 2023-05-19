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
          element: <AllToy></AllToy>
        },
        {
          path:"addatoy",
          element: <AddAToy></AddAToy>
        },
        {
          path:"toydetails/:id",
          element:<ToyDetails></ToyDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path:"addedtoy/:id",
          element:<AddedToyDetails></AddedToyDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/addedToy/${params.id}`)
        } 

      ]
    },
  ]);

  export default router;