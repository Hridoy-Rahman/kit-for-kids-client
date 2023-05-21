import { createBrowserRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';
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
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import UpdateToy from "../Pages/MyToys/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: (
          <>
            <Helmet>
              <title>Kits for Kids | Home</title>
            </Helmet>
            <Home></Home>
          </>
        )
      },
      {
        path: 'login',
        element: (
          <>
            <Helmet>
              <title>Kits for Kids | Login</title>
            </Helmet>
            <Login></Login>
          </>
        )
      },
      {
        path: 'signup',
        element: (
          <>
            <Helmet>
              <title>Kits for Kids | Sign Up</title>
            </Helmet>
            <SignUp></SignUp>
          </>
        )
      },
      {
        path: 'blogs',
        element: (
          <>
            <Helmet>
              <title>Kits for Kids | Blogs</title>
            </Helmet>
            <Blogs></Blogs>
          </>
        )
      },
      {
        path: "alltoy",
        element: (
          <>
            <Helmet>
              <title>Kits for Kids | All Toys</title>
            </Helmet>
            <PrivateRoute><AllToy></AllToy></PrivateRoute>
          </>
        )
      },
      {
        path: "addatoy",
        element: (
          <>
            <Helmet>
              <title>Kits for Kids | Add a Toy</title>
            </Helmet>
            <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
          </>
        )
      },
      {
        path: "toydetails/:id",
        element: (
          <PrivateRoute>
            <Helmet titleTemplate="%s | Toy Details">
              <title>Kits for Kids</title>
            </Helmet>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://kit-for-kids-server.vercel.app/products/${params.id}`)
      },
      {
        path: "addedtoy/:id",
        element: (
          <PrivateRoute>
            <Helmet titleTemplate="%s | Added Toy Details">
              <title>Kits for Kids</title>
            </Helmet>
            <AddedToyDetails></AddedToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://kit-for-kids-server.vercel.app/addedToy/${params.id}`)
      },
      {
        path: 'myToys/:user_email',
        element: (
          <PrivateRoute>
            <Helmet titleTemplate="%s | My Toys">
              <title>Kits for Kids</title>
            </Helmet>
            <MyToys />
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          const url = `https://kit-for-kids-server.vercel.app/addedToy?user_email=${params.user_email}`;
          console.log(params)
          return fetch(url).then(response => response.json());
        }
      },
      {
        path: 'updateToy/:id',
        element: (
          <PrivateRoute>
            <Helmet titleTemplate="%s | Update Toy">
              <title>Kits for Kids</title>
            </Helmet>
            <UpdateToy></UpdateToy>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://kit-for-kids-server.vercel.app/addedToy/${params.id}`)
      },
    ]
  },
  {
    path: '*',
    element: (
      <>
        <Helmet>
          <title>Kit For Kids | Not Found</title>
        </Helmet>
        <NotFoundPage></NotFoundPage>
      </>
    ),
  }
]);

export default router;
