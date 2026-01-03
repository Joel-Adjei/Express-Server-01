import passport from "passport";
import { Strategy } from "passport-local";
import { usersData } from "../utils/utils.js";

export default passport.use(
  new Strategy((username, password, done) => {
    try {
      console.log("username: ", username);
      console.log("password: ", password);
      const finduser = usersData.find((values) => values.username === username);
      if (!finduser) throw new Error("User not found");
      if (finduser.password !== password) throw new Error("Invalid Credential");

      done(null, finduser);
    } catch (error) {
      done(error, null);
    }
  })
);
