import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CashOut from "../../components/CashOut/CashOut";
import CourseDetail from "../../components/CourseDetail/CourseDetail";
import Courses from "../../components/Courses/Courses";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import NotFound from "../../components/NotFound/NotFound";
import Register from "../../components/Register.js/Register";
import Main from "../../layouts/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path:'/',
                loader: ()=>fetch('https://infinite-courses-server.vercel.app/courses'),
                element: <Home/>
            },
            {
                path:'/courses',
                element:<Courses/>,
                loader: ()=>fetch('https://infinite-courses-server.vercel.app/courses')
            },
            {
                path:'/course/:id',
                element:<CourseDetail/>,
                loader: ({params})=>fetch(`https://infinite-courses-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/cashout/:id',
                element:<PrivateRoute><CashOut/></PrivateRoute>,
                loader: ({params})=>fetch(`https://infinite-courses-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])