import { memo } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import LogOut from "component/logOut/index";
import { logout } from "../../services/user"
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../../redux/slides/userSlide";
import { resetOrder } from "../../redux/slides/orderSlide";

const LogOut = ({username}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)

    const handleLogout = async () => {
        alert("Bạn đã đăng xuất");
        dispatch(resetUser())
        dispatch(resetOrder())
        const res = await logout();
        console.log(res);
        localStorage.removeItem("token");
        localStorage.removeItem("cartItems");
        localStorage.removeItem("user");
    };

    return (
        <>
            <div className="dropdown">
                <Link className="btn btn-secondary dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ textDecoration: "none", color: "black", fontSize: '16px' }}>
                    {username}
                </Link>

                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/user">Thông tin</Link></li>
                    { user?.role === 'admin' && <li><a className="dropdown-item" href="/admin">Quản lý</a></li>}
                    {/* <li><a className="dropdown-item" href="/admin">Quản lý</a></li> */}
                    <li><Link className="dropdown-item" to="/" onClick={handleLogout}>Log out</Link></li>
                </ul>
            </div>
        </>
    )
};
export default memo(LogOut);