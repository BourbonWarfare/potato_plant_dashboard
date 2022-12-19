import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route
} from "react-router-dom";
import "./index.css";
import SERVICES from "./potato_library.js";

import Dashboard from "./routes/dashboard.jsx";

let service_children = [];
for (const service in SERVICES) {
    const service_data = SERVICES[service];
    service_children.push({
        path: service_data.uri,
        element: service_data.component
    });
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: service_children
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
