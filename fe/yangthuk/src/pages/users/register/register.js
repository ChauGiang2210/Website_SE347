import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import "./style.css";

const Register = () => {
    // let history = useHistory();

    return (
        <div className="modal">
            <div className="modal__overlay" />
            <div className="modal__body">
                {/* Register form */}
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
                                />
                            </div>
                            <div className="auth-form__group">
                                <input
                                    type="email"
                                    className="auth-form__input"
                                    placeholder="Nhập email của bạn"
                                />
                            </div>
                            <div className="auth-form__group">
                                <input
                                    type="tel"
                                    className="auth-form__input"
                                    placeholder="Nhập số điện thoại của bạn"
                                />
                            </div>
                            <div className="auth-form__group">
                                <input
                                    type="text"
                                    className="auth-form__input"
                                    placeholder="Nhập địa chỉ của bạn"
                                />
                            </div>
                            <div className="auth-form__group">
                                <input
                                    type="password"
                                    className="auth-form__input"
                                    placeholder="Nhập mật khẩu của bạn"
                                />
                            </div>
                            <div className="auth-form__group">
                                <input
                                    type="password"
                                    className="auth-form__input"
                                    placeholder="Nhập lại mật khẩu của bạn"
                                />
                            </div>
                        </div>
                        <div className="auth-form__aside">
                            <p className="auth-form__policy-text">
                                Bằng việc đăng ký, bạn đã đồng ý với YangThuk về 
                                <a href="" className="auth-form__text-link">
                                    Điều khoản dịch vụ 
                                </a>
                                &amp;
                                <a href="" className="auth-form__text-link">
                                     Chính sách bảo mật
                                </a>
                            </p>
                        </div>
                        <div className="auth-form__controls">

                            <Link to={"/login"} className="link">
                            <button className="btn btn--normal auth-form__controls-back">

                                TRỞ LẠI
                            </button>
                            </Link>
                            <button className="btn btn--primary">ĐĂNG KÝ</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default memo(Register);