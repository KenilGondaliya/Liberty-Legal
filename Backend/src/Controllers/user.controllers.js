import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import{  ApiResponse } from "../utils/ApiResponse.js";


const registerUser = asyncHandler(async (req, res) => {
  // get user detail from frontend
  //validation no empty
  // cheack user already exists: username, email
  //create user object - create entry in db
  //remove password and refreshToken and accessToken
  //cheack for user creation
  //return res

  console.log(req.body);
  
  const { username, fullName, email, password, mobileNo } = req.body;
  console.log(email);
  console.log(username);
  console.log(fullName);
  console.log(password);
  console.log(mobileNo);
  
//   console.log("email:", email);
//   console.log(username);

  if (
    [fullName, username, email, password, mobileNo].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

//   console.log(existedUser);

  if (existedUser) {
    throw new ApiError(409, "User is already exists");
  }

  const user = await User.create({
    fullName,
    email,
    password,
    mobileNo,
    username,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

 
  
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "user registered Successfully"));
});

export { registerUser };
