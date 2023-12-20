
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/users/homePage"
import {ROUTERS} from "./utils/router"
import Masterlayout from "./pages/users/theme/masterLayout"
import ProfilePage from "./pages/users/profilePage"
import Order from "./pages/users/order"
import Cart from "./pages/users/cart"
import Login from "./pages/users/login/login.js"
import Register from "./pages/users/register/register"
import ForgotPassword from "pages/users/forgotPassword/forgotPassword"


const renderUserRouter = () =>
{
    const userRouters =
    [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage/>
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage/>
        },
        {
            path: ROUTERS.USER.ORDER,
            component: <Order/>
        },
        {
            path: ROUTERS.USER.CART,
            component: <Cart/>
        },
        {
            path: ROUTERS.USER.LOGIN,
            component: <Login/>
        },
        {
            path: ROUTERS.USER.REGISTER,
            component: <Register/>
        },
        {
            path: ROUTERS.USER.FORGOTPASSWORD,
            component: <ForgotPassword/>
        },
    ]

    return (
        <Masterlayout>
        <Routes>
            {
                userRouters.map(
                    (item,key) => <Route key={key} path={item.path} element={item.component}/>)
            }
        </Routes>
        </Masterlayout>
    )
}
const RouterCustom = () =>
{
    return renderUserRouter();
}

export default RouterCustom;


