import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/HomePage/Home";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path:'/',
                element: <Home/>,
            },
        ]
    }
])

export default router;