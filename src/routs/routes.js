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
                path: '/service/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
                element: <ServiceDetails />
            },
            {
                path: '/blog',
                element: <Blog />
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
                path: '/myreviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: '/editreview/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/editreview/${params.id}`),
                element: <EditReview />
            }
        ]
    },
    {
        path: '/*',
        element: <Err404 />
    }
])