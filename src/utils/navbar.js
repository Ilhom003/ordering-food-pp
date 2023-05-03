import Home from "../components/Home"
import Foods from "../components/Foods"
import Product from "../components/Product"
import Cart from '../components/Cart'
import Contact from '../components/Contact'
import Login from '../components/Login'
import Register from '../components/Register'


export const navbarData = [
    {
        id:1,
        title:'Home',
        path:'/home',
        element: <Home/>,
        isPrivate: false,
        hidden:false
    },
    {
        id:2,
        title:'Foods',
        path:'/foods',
        element: <Foods/>,
        isPrivate: true,
        hidden:false
    },
    {
        id:3,
        title:'Product',
        path:'/foods/:id',
        element: <Product/>,
        isPrivate: true,
        hidden:true
    },
    {
        id:4,
        title:'Cart',
        path:'/cart',
        element: <Cart/>,
        isPrivate: true,
        hidden:false
    },
    {
        id:5,
        title:'Contact',
        path:'/contact',
        element: <Contact/>,
        isPrivate: true,
        hidden:false
    },
    {
        id:6,
        title:'Login',
        path:'/login',
        element: <Login/>,
        isPrivate: false,
        hidden:true
    },
    {
        id:7,
        title:'Register',
        path:'/register',
        element: <Register/>,
        isPrivate: false,
        hidden:true
    },
]

