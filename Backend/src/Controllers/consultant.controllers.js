import { Consultant } from "../models/consultant.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const consultantation = asyncHandler(async (req, res) => {
  const {
    fullName,
    phoneNo,
    email,
    companyName,
    consultantInterest,
    appointmentDate,
    appointmentTime,
  } = req.body;

  console.log(email);
  

  
  if (
    [
      fullName,
      phoneNo,
      email,
      consultantInterest,
      appointmentDate,
      appointmentTime,
    ].some((field) => field === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const [day, month, year] = appointmentDate.split('-');
  const formattedAppointmentDate = new Date(`${day}-${month}-${year}`);

  if (isNaN(formattedAppointmentDate.getTime())) {
    throw new ApiError(400, "Invalid appointment date format");
  }

  const consultant = await Consultant.create({
    fullName,
    phoneNo,
    email,
    companyName,
    consultantInterest,
    appointmentDate: formattedAppointmentDate,
    appointmentTime,
  });

  const createConsultant = await Consultant.findById(consultant._id);

  if (!createConsultant) {
    throw new ApiError(500, "Something went wrong");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createConsultant, "Consultant Sent Successfully"));

});
