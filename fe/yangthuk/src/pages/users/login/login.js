import React from "react";
import { memo } from "react";
import "./style.css";

const Login = () => {
    return (
        <div className="modal">
            <div className="modal__overlay" />
            <div className="modal__body">
                <div className="auth-form">
                    <form className="auth-form__container">
                        <div className="auth-form__header">
                            <h3 className="auth-form__heading">Đăng nhập</h3>
                            <span className="auth-form__switch-btn">Đăng ký</span>
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
                                    placeholder="Nhập mật khẩu của bạn"
                                />
                            </div>
                        </div>
                        <div className="auth-form__aside">
                            <div className="auth-form__help">
                                <a href="" className="auth-form__help-link auth-form__help-forgot">
                                    Quên mật khẩu
                                </a>
                                <span className="auth-form__help-separate" />
                                <a href="" className="auth-form__help-link">
                                    Cần trợ giúp?
                                </a>
                            </div>
                        </div>
                        <div className="auth-form__controls">
                            <button className="btn btn--normal auth-form__controls-back">
                                TRỞ LẠI
                            </button>
                            <button className="btn btn--primary">ĐĂNG NHẬP</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default memo(Login);