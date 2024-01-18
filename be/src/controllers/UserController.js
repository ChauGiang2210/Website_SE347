const UserService = require('../services/UserService.js');
const User = require("../models/User.js");
const Jwt = require("../services/JwtService.js");

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAll(req, req.query);

            return res.json({
                success: true,
                users,
            });
        }
        catch {
            return res.json({
                success: false,
                error: "User not found",
            });
        }
    }

    async addUser(req, res) {
        const errors = UserService.validate(req);
        console.log(errors);

        if (errors.length > 0) {
            return res.json({
                success: false,
                errors,
            });
        }

        const user = await UserService.create(req.body);

        return res.json({
            success: true,
            user,
        });
    }

    async updateUser(req, res) {
        console.log(req.body, req.params.id);
        const errors = UserService.validate(req);

        if (errors.length > 0) {
            return res.json({
                success: false,
                errors,
            });
        }

        try {
            if (!UserService.isExist(req.params.id)) {
                return res.json({
                    success: false,
                    error: "User not found",
                });
            }

            const user = await UserService.update(req.params.id, req.body);

            return res.json({
                success: true,
                user,
            });
        }
        catch {
            return res.json({
                success: false,
                error: "User not found",
            });
        }
    }

    async deleteUser(req, res) {
        try {
            if (!UserService.isExist(req.params.id)) {
                return res.json({
                    success: false,
                    error: "User not found",
                });
            }

            await UserService.deleteById(req.params.id);

            return res.json({
                success: true,
            });
        }
        catch {
            return res.json({
                success: false,
                error: "User not found",
            });
        }
    }

    async getUserById(req, res) {
        console.log(req.headers.authorization);
        try {
            const user = await UserService.getById(req.params.id);

            return res.json({
                success: true,
                user,
            });
        }
        catch {
            return res.json({
                success: false,
                error: "User not found",
            });
        }
    }

    async login(req, res) {
        // console.log(req.body);
        try {
            const { email, password } = req.body;
            
            const errors = await UserService.validateLogin(req);
            
            if (errors.length > 0) {
                return res.json({
                    success: false,
                    errors,
                });
            }
            
            const checkUser = await User.findOne({ email });
            
            const access_token = Jwt.generalAccessToken(checkUser);
            const refresh_token = Jwt.generalRefreshToken(checkUser);

            const finalData = {
                access_token,
                // refresh_token,
                user: {
                    email: checkUser.email,
                    name: checkUser.name,
                    _id: checkUser._id,
                    role: checkUser.role,
                },
            };

            // const { refresh_token, ...newFinalData } = finalData;
            res.cookie("refresh_token", refresh_token, {
                HttpOnly: true,
                Secure: false,
                // SameSite: "strict",
            })

            res.cookie("access_token", access_token, {
                HttpOnly: true,
                Secure: false,
                // SameSite: "strict",
            })

            // console.log(res.json({
            //     success: true,
            //     message: "Login successfull!",
            //     finalData,
            // }));
            return res.json({
                success: true,
                message: "Login successfull!",
                finalData,
            });

        }
        catch {
            return res.json({
                success: false,
                error: "Error while logging In. Please try again",
            });
        }
    }

    async logout(req, res) {
        try {
            res.clearCookie("refresh_token");
            res.clearCookie("access_token");

            return res.json({
                success: true,
                message: "Logout successfull!",
            });

        }
        catch {
            return res.json({
                success: false,
                error: "Error while logging out. Please try again",
            });
        }
    }
}

module.exports = new UserController();