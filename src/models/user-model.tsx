import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, require: true, unique: true },
  password: String,
  profileImageUrl: String,
  phoneNumber: String,
  emergencyPhone: String,
  role: String,
  appliedJobs: [String],
  verificationCode: Number,
});
export const UserModel =
  mongoose.models.user || mongoose.model("user", UserSchema);
