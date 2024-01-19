import { memo, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Banner from "component/banner/banner";
import "./style.scss";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Delete from "component/delete/index";
import { getAllUser } from "../../../services/user"
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../component/LoadingComponent"


const UserManage = () => {

    const [loading, setLoading] = useState(false);

    const fetchUserAll = async () => {
        const res = await getAllUser()
        // console.log('res', res)
        return res
    }

    const { isSuccess, isLoading, data: users } = useQuery({ queryKey: ['users'], queryFn: fetchUserAll, retry: 3, retryDelay: 1000 })
    // console.log(users.users)
    // useEffect(() => {
    //     if (isSuccess) {
    //         // setLoading(true)
    //         console.log('users', users.users)
    //     } else {
    //         // setLoading(false)
    //     }
    // }, [isSuccess])

    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const handleDeleteClick = () => {
        // Mở modal xóa khi click vào liên kết "Xóa"
        setDeleteModalVisible(true);
    };

    const handleDeleteConfirm = () => {
        // Thực hiện hành động xóa ở đây
        // Đóng modal xóa
        setDeleteModalVisible(false);
    };
    // const admin_name = "Ngọc Thức"
    // const admin_email = "abc@gmail.com"
    // const admin_password = "123456"
    // const admin_role = "Admin"

    // const user_name = "Châu Giang"
    // const user_email = "chaugiang2210@gmail"
    // const user_password = "123456"
    // const user_role = "User"
    return (
        <Loading isLoading={isLoading}>
            <div className="Manage">
                <h3>QUẢN LÝ NGƯỜI DÙNG</h3>
                <hr className="border border-secondary border-2 opacity-50"></hr>
                <Link to="/admin/usermanage/adduser"><button type="button" className="btn btn-outline-secondary btn_cus">Thêm người dùng</button></Link>
                {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Admin</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">User</button>
                    </li>
                </ul> */}
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
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
                                {
                                    users && users.users.map((user, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index}</th>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td>{user.role}</td>
                                            <td><Link to="/admin/usermanage/fixuser" className="card-link">Sửa</Link></td>
                                            <td><Link to="#" className="card-link" onClick={handleDeleteClick}>Xóa</Link></td>
                                        </tr>
                                    ))
                                }
                                {/* <tr>
                                    <th scope="row">1</th>
                                    <td>{admin_name}</td>
                                    <td>{admin_email}</td>
                                    <td>{admin_password}</td>
                                    <td>{admin_role}</td>
                                    <td><Link to="/admin/usermanage/fixuser" className="card-link">Sửa</Link></td>
                                    <td><Link to="#" className="card-link" onClick={handleDeleteClick}>Xóa</Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>{admin_name}</td>
                                    <td>{admin_email}</td>
                                    <td>{admin_password}</td>
                                    <td>{admin_role}</td>
                                    <td><Link to="/admin/usermanage/fixuser" className="card-link">Sửa</Link></td>
                                    <td><Link to="#" className="card-link" onClick={handleDeleteClick}>Xóa</Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>{admin_name}</td>
                                    <td>{admin_email}</td>
                                    <td>{admin_password}</td>
                                    <td>{admin_role}</td>
                                    <td><Link to="/admin/usermanage/fixuser" className="card-link">Sửa</Link></td>
                                    <td><Link to="#" className="card-link" onClick={handleDeleteClick}>Xóa</Link></td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
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
                                    <td><Link to="/admin/usermanage/fixuser" className="card-link">Sửa</Link></td>
                                    <td><Link to="#" className="card-link">Xóa</Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{user_name}</td>
                                    <td>{user_email}</td>
                                    <td>{user_password}</td>
                                    <td>{user_role}</td>
                                    <td><Link to="/admin/usermanage/fixuser" className="card-link">Sửa</Link></td>
                                    <td><Link to="#" className="card-link">Xóa</Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{user_name}</td>
                                    <td>{user_email}</td>
                                    <td>{user_password}</td>
                                    <td>{user_role}</td>
                                    <td><Link to="/admin/usermanage/fixuser" className="card-link">Sửa</Link></td>
                                    <td><Link to="#" className="card-link">Xóa</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                </div>
            </div>
            {isDeleteModalVisible && (
                <Delete onClose={() => setDeleteModalVisible(false)} onConfirm={handleDeleteConfirm} />
            )}
        </Loading>
    );
};

export default memo(UserManage);
