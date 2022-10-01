import Jwt from "jsonwebtoken";
import dotenv from "dotenv";

/**generateToken
 *This is a method that generates a token.
 */

const generateToken = (id) => {
  return Jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });
};

export default generateToken;
