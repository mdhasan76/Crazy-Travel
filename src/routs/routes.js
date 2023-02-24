import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main';
import Home from '../pages/home/Home';
import Blog from '../pages/blog/Blog';
import Allservices from '../pages/services/Allservices';
import ServiceDetails from '../pages/serviceDetails/ServiceDetails';
import LogIn from '../pages/login/LogIn';
import Register from '../pages/register/Register';
import Err404 from '../pages/error/Err404';
import MyReviews from '../pages/myReviews/MyReviews';
import AddService from '../pages/addService/AddService';
import PrivateRoute from '../shared/PrivateRoute';
import EditReview from '../pages/editReview/EditReview';
import BlogDetails from '../pages/blog/BlogDetails';
import Hotels from '../pages/hotels/Hotels';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                loader: () => fetch('https://crazy-travle-server.vercel.app/shortServices'),
                element: <Home />
            },
            {
                path: '/services',
                loader: () => fetch('https://crazy-travle-server.vercel.app/services'),
                element: <Allservices />
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`https://crazy-travle-server.vercel.app/service/${params.id}`),
                element: <ServiceDetails />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/blog/:id',
                element: <BlogDetails />
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/hotels',
                element: <Hotels />
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: '/editreview/:id',
                loader: ({ params }) => fetch(`https://crazy-travle-server.vercel.app/editreview/${params.id}`),
                element: <EditReview />
            }
        ]
    },
    {
        path: '/*',
        element: <Err404 />
    }
])