import { memo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "component/banner/banner";
import "./style.scss";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 


const UserManage = () => {
    const admin_name = "Ngọc Thức"
    const admin_email = "abc@gmail.com"
    const admin_password = "123456"
    const admin_role = "Admin"

    const user_name = "Châu Giang"
    const user_email = "chaugiang2210@gmail"
    const user_password = "123456"
    const user_role = "User"
  return (
    <>
      <div className="Manage">
        <h3>QUẢN LÝ NGƯỜI DÙNG</h3>
        <hr className="border border-secondary border-2 opacity-50"></hr>
        <Link to ="/admin/usermanage/adduser"><button type="button" className="btn btn-outline-secondary btn_cus">Thêm người dùng</button></Link>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Admin</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">User</button>
            </li>
            </ul>
            <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên người dùng</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mật khẩu</th>
                    <th scope="col">Phân quyền</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{admin_name}</td>
                    <td>{admin_email}</td>
                    <td>{admin_password}</td>
                    <td>{admin_role}</td>
                    <td><Link to ="#" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link">Xóa</Link></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>{admin_name}</td>
                    <td>{admin_email}</td>
                    <td>{admin_password}</td>
                    <td>{admin_role}</td>
                    <td><Link to ="#" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link">Xóa</Link></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>{admin_name}</td>
                    <td>{admin_email}</td>
                    <td>{admin_password}</td>
                    <td>{admin_role}</td>
                    <td><Link to ="#" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link">Xóa</Link></td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên người dùng</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mật khẩu</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Phân quyền</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{user_name}</td>
                    <td>{user_email}</td>
                    <td>{user_password}</td>
                    <td>{user_role}</td>
                    <td><Link to ="#" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link">Xóa</Link></td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>{user_name}</td>
                    <td>{user_email}</td>
                    <td>{user_password}</td>
                    <td>{user_role}</td>
                    <td><Link to ="#" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link">Xóa</Link></td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>{user_name}</td>
                    <td>{user_email}</td>
                    <td>{user_password}</td>
                    <td>{user_role}</td>
                    <td><Link to ="#" className="card-link">Sửa</Link></td>
                    <td><Link to ="#" className="card-link">Xóa</Link></td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
      </div>
    
    </>
  );
};

export default memo(UserManage);
