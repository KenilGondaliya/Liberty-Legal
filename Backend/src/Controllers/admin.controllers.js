import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const adminPassword = asyncHandler(async (req, res) => {
  const adminPassword = "admin";

  const { password } = req.body;
  console.log(password);
  

  if (!password) {
    throw new ApiError(401, "Password is not valid");
  }

  if (password === adminPassword) {
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Password is correct"));
  } else {
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Password is correct"));
  }
});
