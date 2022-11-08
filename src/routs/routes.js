import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main';
import Home from '../pages/home/Home';
import Blog from '../pages/blog/Blog';
import Allservices from '../pages/services/Allservices';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/shortServices'),
                element: <Home />
            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/services'),
                element: <Allservices />
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    }
])