import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Router;
