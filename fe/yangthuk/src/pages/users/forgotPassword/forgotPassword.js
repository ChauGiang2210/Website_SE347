import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import "./forgotPassword.scss";

const ForgotPassword = () => {
    return (
        <div className="modal">
            <div className="modal__overlay" />
            <div className="modal__body">
                <div className="auth-form">
                    <form className="auth-form__container">
                        <div className="auth-form__header">
                            <h3 className="auth-form__heading">Quên mật khẩu</h3>
                        </div>
                        <div className="auth-form__form">
                            <div className="auth-form__group">
                                <input
                                    type="email"
                                    className="auth-form__input"
                                    placeholder="Nhập email của bạn"
                                />
                            </div>
                            <div className="auth-form__group">
                                <input
                                    type="password"
                                    className="auth-form__input"
                                    placeholder="Nhập mật khẩu mới của bạn"
                                />
                            </div>
                            <div className="auth-form__group">
                                <input
                                    type="password"
                                    className="auth-form__input"
                                    placeholder="Nhập lại mật khẩu mới của bạn"
                                />
                            </div>
                        </div>
                        <div className="auth-form__controls">
                            <Link to={"/login"} className="link">
                                <button className="btn btn--normal auth-form__controls-back">
                                    TRỞ LẠI
                                </button>
                            </Link>
                            <button className="btn btn--primary">ĐẶT LẠI MẬT KHẨU</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default memo(ForgotPassword);