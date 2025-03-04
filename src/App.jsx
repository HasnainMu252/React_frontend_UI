import IndexProvider from './Component/ContextAPi';
import UserProvider from './Component/ContextAPi/usercontext';
import ContextAuth from './Component/ContextAPi/UserAuth';

import Home from './Component/pages/Home';
import NavBar from './Component/pages/Navbar';
import About from './Component/pages/About';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Dashboard from './Component/pages/Dashboard';

import Courses from './Component/pages/courses';
import Reports from './Component/pages/Reports';
import Mock from './Component/pages/Mock_Test';
import NotFound from './Component/pages/NotFound';

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <NavBar />
                <Home />
            </div>
        ),
    },
    {
        path: "/about",
        element: (
            <div>
                <NavBar />
                <About />
            </div>
        ),
    },
    {
        path: "/dashboard",
        element: (
            <div>
                <NavBar />
                <Dashboard />
            </div>
        ),
        children: [
            { path: "course", element: <Courses /> },
            { path: "mock", element: <Mock /> },
            { path: "reports", element: <Reports /> },
        ],
    },
    {
        path: "/:id",
        element: (
            <div>
                <NavBar />
                <Home />
            </div>
        ),
    },
    {
        path:'*',
        element:<NotFound/>
    }
]);

const App = () => {
    return (
        <IndexProvider>
            <UserProvider>
                <ContextAuth>
                    <h1>This is App jsx</h1>
                    <RouterProvider router={router} />
                </ContextAuth>
            </UserProvider>
        </IndexProvider>
    );
};

export default App;
