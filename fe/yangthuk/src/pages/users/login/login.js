import React from "react";
import { memo, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../../services/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { useMutation } from '@tanstack/react-query'
import { useMutationHook } from '../../../hooks/useMutationHook';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { getDetailUser } from "../../../services/user";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/slides/userSlide";
// import style from "./style.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const mutation = useMutationHook( 
        data => login(data),
      )
    
    function isValidForm() {
        return email &&
            email.trim() !== "" &&
            password &&
            password.trim() !== ""
            ? true
            : false;
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    
    const handleLoginClick = async () => {
        mutation.mutate({email, password})
    }

    const handleGetDetailUser = async (id, token) => {
        const data = await getDetailUser(id)
        dispatch(updateUser({...data.user, access_token: token}))
    }

    useEffect(() => {
        if (mutation.isSuccess) {
            localStorage.setItem("token", JSON.stringify(mutation.data.finalData.access_token));
            alert("Đăng nhập thành công");
            navigate("/")
        }
        if (mutation.data?.finalData.access_token) {
            const decoded = jwtDecode(mutation.data.finalData.access_token);
            if (decoded?.id)
            {
                handleGetDetailUser(decoded.id, mutation.data.finalData.access_token);
            }
        }
        if (mutation.isError) {
            alert("Đăng nhập thất bại");
        }
    }, [mutation.isSuccess, mutation.isError])
    

    return (
        <div className="modal">
            <div className="modal__overlay" />
            <div className="modal__body">
                <div className="auth-form">
                    <div className="auth-form__container">
                        <div className="auth-form__header">
                            <h3 className="auth-form__heading">Đăng nhập</h3>

                            <span className="auth-form__switch-btn">
                                <Link to={"/register"} className="auth-form__switch-btn">Đăng ký</Link>
                            </span>

                        </div>
                        <div className="auth-form__form">
                            <div className="auth-form__group">
                                <input
                                    type="email"
                                    className="auth-form__input"
                                    placeholder="Nhập email của bạn"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div className="auth-form__group">
                                <input
                                    type="password"
                                    className="auth-form__input"
                                    placeholder="Nhập mật khẩu của bạn"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                        </div>
                        <div className="auth-form__aside">
                            <div className="auth-form__help">
                                <Link to={"/forgotPassword"} className="link auth-form__help-link auth-form__help-forgot">

                                    Quên mật khẩu

                                </Link>
                                <span className="auth-form__help-separate" />
                                <Link to={"#"} className="auth-form__help-link">
                                    Cần trợ giúp?
                                </Link>
                            </div>
                        </div>
                        <div className="auth-form__controls">
                            <Link to={"/"} className="link">
                                <button className="btn btn--normal auth-form__controls-back">
                                    TRỞ LẠI
                                </button>
                            </Link>
                            <button
                                className="btn btn--primary"
                                onClick={handleLoginClick}
                            // disabled={!isValidForm()}

                            >ĐĂNG NHẬP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Login);