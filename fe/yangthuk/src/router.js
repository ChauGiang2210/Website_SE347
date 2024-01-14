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
            component: <ForgotPassword/>
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
        path: ROUTERS.ADMIN.ADDPRODUCT,
        component: <AddProduct />
      },
      {
        path: ROUTERS.ADMIN.ADDORDER,
        component: <AddOrder />
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

function App()  {
    const isAdminRoute = window.location.pathname.startsWith("/admin");
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const result = await fetch('https://api.example.com/data');
    //     // Xử lý kết quả
    //   };
    //   fetchData();
    // }, []); 
    return (
      <>
        {isAdminRoute ? renderAdminRouter() : renderUserRouter()}
        {/* Hoặc nếu bạn muốn điều hướng nếu không phải là route admin
        {!isAdminRoute && <Navigate to={ROUTERS.USER.HOME} />} */}
      </>
    );
};

export default App;
