export const ROUTERS =
{
    USER:{
        HOME: "",
        PROFILE: "profile",
        ORDER: "order/:id",
        CART: "cart",
        LOGIN: "login",
        REGISTER: "register",
        USER: "user",
       FORGOTPASSWORD: "forgotpassword",
    },
    ADMIN:{
        HOME: "admin",
        CARTMANAGE: "admin/cartmanage",
        USERMANAGE: "admin/usermanage",
        ADDUSER: "admin/usermanage/adduser",
        ADDPRODUCT: "admin/productmanage/addproduct",
        ADDORDER: "admin/cartmanage/addorder",
        FIXUSER: "admin/usermanage/fixuser",
        FIXPRODUCT: "admin/productmanage/fixproduct",
        FIXORDER: "admin/cartmanage/fixorder",
    }
}