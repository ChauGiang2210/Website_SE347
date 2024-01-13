const mongoose = require("mongoose")

const NewAddressSchema = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        fullName: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Address", NewAddressSchema);
