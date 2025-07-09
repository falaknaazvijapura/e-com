import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import { ForgetPass, Login, Register, ResetPass } from "../Pages/auth";


const router = createBrowserRouter([
    {
        path: "/auth",
        element: <AppLayout />,
        children: [
            {
                path: "login",
                element: <Login></Login>
            },

            {
                path: "register",
                element: <Register />
            },

            {
                path: "forget-password",
                element: <ForgetPass />
            },

            {
                path: "reset-password",
                element: <ResetPass />
            },
        ],
    },
]);

export default router;
