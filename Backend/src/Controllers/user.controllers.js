import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";



const registerUser = asyncHandler(async (req, res) => {

   
  const { FullName, email, password, mobile, username } = req.body;
  console.log("Request Body:", req.body);


  if (
    [FullName, email, username, password, mobile].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }]
})

if (existedUser) {
  throw new ApiError(409, "User with email or username already exists")
}

const lowercasedUsername = username ? username.toLowerCase() : '';

const user = await User.create({
  FullName,
  email, 
  password,
  mobile,
  username: lowercasedUsername,
})

const createdUser = await User.findById(user._id).select(
  "-password -refreshToken"
)


if (!createdUser) {
  throw new ApiError(500, "Something went wrong while registering the user")
}

return res.status(201).json(
  new ApiResponse(200, createdUser, "User registered Successfully")
)
});

export { registerUser };
