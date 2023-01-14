import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://secquraise-jobtask-server.vercel.app/users'),

            },

        ]
    }
])
export default router;