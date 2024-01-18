import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import Masterlayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";
import Order from "./pages/users/order";
import Cart from "./pages/users/cart";
import Login from "./pages/users/login/login.js";
import Register from "./pages/users/register/register";
import ProductManage from "./pages/admin/productManage";
import AdminLayout from "./pages/admin/masterLayout";
import CartManage from "./pages/admin/cartManage";
import UserManage from "pages/admin/userManage";
import AddUser from "pages/admin/addUser";
import UserInfo from "pages/users/userInfo";
import AddProduct from "pages/admin/addProduct";
import AddOrder from "pages/admin/addOrder";
import ForgotPassword from "pages/users/forgotPassword/forgotPassword"
import { useEffect } from "react";
import FixOrder from "pages/admin/fixOrder";
import FixUser from "pages/admin/fixUser";
import FixProduct from "pages/admin/fixProduct";
import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import { isJsonString } from "utils/isJsonString";
import { jwtDecode } from "jwt-decode";
import { getDetailUser } from "./services/user";
import { useDispatch } from "react-redux";
import { updateUser, resetUser } from "./redux/slides/userSlide";
// import dotenv from 'dotenv';
// dotenv.config();

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />
    },
    {
      path: ROUTERS.USER.ORDER,
      component: <Order />
    },
    {
      path: ROUTERS.USER.CART,
      component: <Cart />
    },
    {
      path: ROUTERS.USER.LOGIN,
      component: <Login />
    },
    {
      path: ROUTERS.USER.REGISTER,
      component: <Register />
    },
    {
      path: ROUTERS.USER.USER,
      component: <UserInfo />
    },
    {
      path: ROUTERS.USER.FORGOTPASSWORD,
      component: <ForgotPassword />
    },
  ];

  return (
    <Masterlayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </Masterlayout>
  );
};

const renderAdminRouter = () => {
  const adminRouters = [
    {
      path: ROUTERS.ADMIN.HOME,
      component: <ProductManage />
    },
    {
      path: ROUTERS.ADMIN.CARTMANAGE,
      component: <CartManage />
    },
    {
      path: ROUTERS.ADMIN.USERMANAGE,
      component: <UserManage />
    },
    {
      path: ROUTERS.ADMIN.ADDUSER,
      component: <AddUser />
    },
    {
        path: ROUTERS.ADMIN.USERMANAGE,
        component: <UserManage />
      },
      {
        path: ROUTERS.ADMIN.ADDUSER,
        component: <AddUser />
      },
      {
        path: ROUTERS.ADMIN.ADDPRODUCT,
        component: <AddProduct />
      },
      {
        path: ROUTERS.ADMIN.ADDORDER,
        component: <AddOrder />
      },
      {
        path: ROUTERS.ADMIN.FIXUSER,
        component: <FixUser />
      },
      {
        path: ROUTERS.ADMIN.FIXPRODUCT,
        component: <FixProduct />
      },
      {
        path: ROUTERS.ADMIN.FIXORDER,
        component: <FixOrder />
      },
  ];

  return (
    <AdminLayout>
      <Routes>
        {adminRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </AdminLayout>
  );
};

function App() {
  const isAdminRoute = window.location.pathname.startsWith("/admin");
  const dispatch = useDispatch();

  const handleGetDetailUser = async (id, token) => {
    const data = await getDetailUser(id)
    dispatch(updateUser({ ...data.user, access_token: token }))
  }

  useEffect(() => {
    let storedData = localStorage.getItem("token");
    if (storedData && isJsonString(storedData)) {
      storedData = JSON.parse(storedData);
    }
    // console.log('storedData', storedData);
    let decoded = null
    if (storedData) {
      decoded = jwtDecode(storedData);
    }
    if (decoded?.id) {
      handleGetDetailUser(decoded?.id, storedData);
    }
    else {
      dispatch(resetUser({}));
    }
  }, []);

  return (
    <>
      {isAdminRoute ? renderAdminRouter() : renderUserRouter()}
      {/* Hoặc nếu bạn muốn điều hướng nếu không phải là route admin
        {!isAdminRoute && <Navigate to={ROUTERS.USER.HOME} />} */}
    </>
  );
};

export default App;
