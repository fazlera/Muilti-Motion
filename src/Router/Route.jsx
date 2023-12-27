import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/HomePage/Home";
import Service from "../Pages/Service/Service";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path:'/',
                element: <Home/>,
            },
            {
                path:'/service',
                element: <Service/>,
            },
            {
                path:'/about',
                element: <Service/>,
            },
            {
                path:'/contact',
                element: <Service/>,
            },
        ]
    }
])

export default router;