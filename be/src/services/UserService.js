const userModel = require("../models/User");
const validator = require("validator");
const bcrypt = require("bcrypt");

function isFavoritesValid(favorites) {
    if (!favorites || favorites.length === 0) {
        return true;
    }

    // Kiểm tra xem mỗi sản phẩm trong `favorites` đều hợp lệ
    for (const favorite of favorites) {
        if (!favorite._id || favorite._id.trim() === "") {
            return false;
        }
        if (!favorite.name || favorite.name.trim() === "") {
            return false;
        }
        if (!favorite.price || favorite.price < 0) {
            return false;
        }
        if (!favorite.imageUrl || favorite.imageUrl.trim() === "") {
            return false;
        }
    }

    return true;
}

class UserService {
    constructor() {
        this.model = userModel
    }

    async getAll(req, query) {
        const conditions = {};
        if (query) {
            for (const key in query) {
                if (key === "column" || key === "_sort" || key === "type") continue;
                conditions[key] = query[key];
            }
        }

        return await this.model.find(conditions).sortable(req);
    }

    async getById(id) {
        return await this.model.findById(id);
    }

    async create(data) {
        data.password = bcrypt.hashSync(data.password, 10);
        return await this.model.create(data);
    }

    async update(id, data) {
        data.password = bcrypt.hashSync(data.password, 10);
        await this.model.findByIdAndUpdate(id, data);
        return await this.model.findById(id);
    }

    async deleteById(id) {
        return await this.model.findByIdAndDelete(id);
    }

    validate(req) {
        const user = req.body;
        const errors = [];

        // Validate data:

        // Kiểm tra username
        if (!user.username || user.username.trim() === "") {
            errors.push("Username is required");
        }

        // Kiểm tra email
        if (!user.email || user.email.trim() === "") {
            errors.push("Email is required");
        } else if (!validator.isEmail(user.email)) {
            errors.push("Invalid email format");
        }

        // Kiểm tra password
        if (!user.password || user.password.trim() === "") {
            errors.push("Password is required");
        } else if (user.password.length < 6) {
            errors.push("Password must be at least 6 characters long");
        }

        // Kiểm tra favorites (nếu cần)
        if (!isFavoritesValid(user.favorites)) {
            errors.push("Invalid favorites");
        }

        // Kiểm tra role
        if (!user.role || !["user", "admin"].includes(user.role)) {
            errors.push("Invalid role");
        }

        return errors;
    }

    isExist(id) {
        try {
            const model = this.model.findById(id);
            return model ? true : false;
        }
        catch {
            return false;
        }
    }

    async validateLogin(req) {
        const { email, password } = req.body;
        const errors = [];

        // Kiểm tra email
        if (!email || email.trim() === "") {
            errors.push("Email is required");
        } else if (!validator.isEmail(email)) {
            errors.push("Invalid email format");
        }

        // Kiểm tra password
        if (!password || password.trim() === "") {
            errors.push("Password is required");
        } else if (password.length < 6) {
            errors.push("Password must be at least 6 characters long");
        }

        // Kiểm tra xem có user nào tồn tại với email này không
        const user = await this.model.findOne({ email });
        if (!user) {
            errors.push("User not found");
        }

        console.log(bcrypt.compareSync(password, user.password))

        // Kiểm tra xem password có đúng không
        if (user && bcrypt.compareSync(password, user.password) === false) {
            errors.push("Wrong password");
        }

        return errors;
    }
}

module.exports = new UserService();