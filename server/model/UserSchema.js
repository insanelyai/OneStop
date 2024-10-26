import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    fullName: { type: String },
    phoneNumber: { type: String}
});

export default mongoose.model("User", userSchema);
