import { UserModel } from "@/models/user-model";
import jwt from "jsonwebtoken";
import { LoginUserInput } from "@/generated/client";

export const loginUser = async (
  _: LoginUserInput,
  { input }: { input: LoginUserInput }
) => {
  const { password, email } = input;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      const token = jwt.sign({ id: email }, "SomeSecretKey", {
        expiresIn: "2d",
      });
      return token;
    } else {
      return "user with that email is not found";
    }
  } catch (err) {
    console.log(err);
  }
};
