import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const LogOut = () =>
{
    const handleLogout = () => {
        alert("Bạn đã đăng xuất");
    };
    return (
        <>
            <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{textDecoration: "none", color: "black" ,fontSize: '16px'}}>
                Username
            </a>

            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/user">Thông tin</a></li>
                <li><a className="dropdown-item" href="/admin">Quản lý</a></li>
                <li><a className="dropdown-item" href="/" onClick={handleLogout}>Log out</a></li>
            </ul>
            </div>
        </>
    )
};
export default memo(LogOut);