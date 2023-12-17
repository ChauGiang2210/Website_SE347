import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/users/homePage"
import { ROUTERS } from "./utils/router"
import Masterlayout from "./pages/users/theme/masterLayout"
import ProfilePage from "./pages/users/profilePage"

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


