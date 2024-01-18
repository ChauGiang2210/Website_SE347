import React from "react";
import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMutationHook } from '../../../hooks/useMutationHook';
import "./style.css";
import { register } from "../../../services/user";

const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setComfirmPassword] = useState('');
    const [role, setRole] = useState('user');

    const mutation = useMutationHook(
        (data) => {
            return register(data)
        }
    )

    const { data, isSuccess, isError } = mutation

    useEffect(() => {
        // console.log(data);
        if (isError || (isSuccess && !data?.success)) {
            alert("Đăng ký thất bại");
            navigate("/register")
        }
        if (isSuccess && data?.success) {
            alert("Đăng ký thành công")
            console.log(data);
            navigate("/login")
        }
        if (data?.success) {
            alert("đăng ký thành công")
            console.log(data);
            navigate("/login")
        }
    }, [isSuccess, isError])

    const handleOnChangeUsername = (e) => {
            setUsername(e.target.value);
        }

    const handleOnChangeEmail = (e) => {
            setEmail(e.target.value);
        }

    const handleOnChangePassword = (e) => {
            setPassword(e.target.value);
        }

    const handleOnChangeConfirmPassword = (e) => {
            setComfirmPassword(e.target.value);
        }

    const handleOnChangeRole = (e) => {
            setRole(e.target.value)
        }

    const handleRegisterClick = async () => {
        // console.log(username, email, password, role);
        mutation.mutate({ username, email, password, role })
    }

    return (
        <div className="modal">
            <div className="modal__overlay" />
            <div className="modal__body">
                <div className="auth-form">
                    <form className="auth-form__container">
                        <div className="auth-form__header">
                            <h3 className="auth-form__heading">Đăng ký</h3>
                            <span className="auth-form__switch-btn">
                            <Link to={"/login"} className="auth-form__switch-btn">Đăng nhập</Link>
                                </span>
                        </div>
                        <div className="auth-form__form">
                            <div className="auth-form__group">
                                <input
                                    type="text"
                                    className="auth-form__input"
                                    placeholder="Nhập tên của bạn"
                                    value={username}
                                    onChange={handleOnChangeUsername}
                                />
                            </div>
                            <div className="auth-form__group">
                                <input
                                    type="email"
                                    className="auth-form__input"
                                    placeholder="Nhập email của bạn"
                                    value={email}
                                    onChange={handleOnChangeEmail}
                                />
                            </div>
                            <div className="auth-form__group">
                                <input
                                    type="password"
                                    className="auth-form__input"
                                    placeholder="Nhập mật khẩu của bạn"
                                    value={password}
                                    onChange={handleOnChangePassword}
                                />
                            </div>
                            <div className="auth-form__group">
                                <input
                                    type="password"
                                    className="auth-form__input"
                                    placeholder="Nhập lại mật khẩu của bạn"
                                    value={confirmPassword}
                                    onChange={handleOnChangeConfirmPassword}
                                />
                            </div>
                            <select className="form-select" aria-label="Default select example" 
                                    value={role}
                                    onChange={handleOnChangeRole}
                                    >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className="auth-form__aside">
                            <p className="auth-form__policy-text">
                                Bằng việc đăng ký, bạn đã đồng ý với YangThuk về 
                                <Link to ="" className="auth-form__text-link">
                                    Điều khoản dịch vụ 
                                </Link>
                                &amp;
                                <Link to ="" className="auth-form__text-link">
                                     Chính sách bảo mật
                                </Link>
                            </p>
                        </div>
                        <div className="auth-form__controls">
                            <Link to={"/login"} className="link">
                            <button className="btn btn--normal auth-form__controls-back">
                                TRỞ LẠI
                            </button>
                            </Link>
                            <button className="btn btn--primary"
                                onClick={handleRegisterClick}
                                disabled={!username || !email || !password || !confirmPassword}
                            >ĐĂNG KÝ</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default memo(Register);