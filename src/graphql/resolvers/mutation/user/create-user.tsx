import { UserModel } from "@/models/user-model";
import { SignUpUserInput } from "@/generated/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUpUser = async (
  _: SignUpUserInput,
  { input }: { input: SignUpUserInput }
) => {
  const { email, userName, password } = input;

  try {
    const isExistEmail = await UserModel.findOne({ email: email });
    if (isExistEmail) {
      return "An account with this email already exists";
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("hash", hashedPassword);
      await UserModel.create({
        email: email,
        name: userName,
        password: hashedPassword,
      });
      const token = jwt.sign({ id: email }, "SomeSecretKey", {
        expiresIn: "2d",
      });
      return token;
    }
  } catch (err) {
    console.log(err);
  }
};
