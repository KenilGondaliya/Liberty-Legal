import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import{  ApiResponse } from "../utils/ApiResponse.js";


const registerUser = asyncHandler(async (req, res) => {

  // console.log(req.body);
  
  const { FullName, email, username, password, mobile } = req.body;
  // console.log(email);
  // console.log(username);
  // console.log(password);
  console.log(FullName);
  
  
  
  
  
  // if (!username || !email || !fullName || !mobileNo || !password) {
  //   throw new ApiError(400, "All fields are required");
  // }

  if (
    [FullName, username, email, password, mobile].some(
      (field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  console.log(existedUser);

  if (existedUser) {
    throw new ApiError(409, "User is already exists");
  }

  const user = await User.create({
    FullName,
    email,
    password,
    mobile,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "user registered Successfully"));
});

export { registerUser };
