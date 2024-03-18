import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
  userName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  creditBalance: { type: String, default: 10 },
  photo: { type: String, required: true },
  clerkId: { type: String, required: true, unique: true },
  planId: { type: String, default: 1 },
});

const User = models?.User || model("User", UserSchema);

export default User;
