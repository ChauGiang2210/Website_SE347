import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/users/HomePage"
import {ROUTERS} from "./utils/router"
import Masterlayout from "./pages/users/theme/masterlayout"
import ProfilePage from "./pages/users/ProfilePage"
import Order from "./pages/users/Order"

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
        }
    ]

    return (
        <Masterlayout>
        <Routes>
            {
                userRouters.map((item,key) => 
                (
                    <Route key={key} path={item.path} element={item.component}/>
                ))
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


