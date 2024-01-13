const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 6},
    favorites: { 
      type: [
        {
          _id: { type: String, required: true },
          name: { type: String, required: true },
          price: { type: Number, required: true },
          imageUrl: {
            type: String, 
          },
        },
      ],
      default: [],
    },
    role: { type: String, enum: ["user", "admin"], default: "user"},
},
    { timestamps: true }
)

UserSchema.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ["asc", "desc"].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidType ? req.query.type : "desc",
    });
  }
  return this;
}

module.exports = mongoose.model("User", UserSchema)
