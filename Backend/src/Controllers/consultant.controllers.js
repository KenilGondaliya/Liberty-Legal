import {
  ApprovedSuccssfullEmail,
  DeclineSuccssfullEmail,
} from "../mailtrap/email.js";
import { Consultant } from "../models/consultant.model.js";
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

  //   console.log(email);

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

  const consultantAppointmentDate = new Date(appointmentDate);
  const formattedAppointmentDate = consultantAppointmentDate.toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

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
    .json(
      new ApiResponse(200, createConsultant, "Consultant Sent Successfully")
    );
});

export const getAllConsultant = asyncHandler(async (req, res) => {
  try {
    const consultants = await Consultant.find();

    return res
      .status(200)
      .json(new ApiResponse(200, consultants, "get successfully"));
  } catch (error) {
    throw new ApiError(401, "consultants not get");
  }
});

export const deleteConsultant = asyncHandler(async (req, res) => {
  const consultantId = req.params.id;
  try {
    const consultant = await Consultant.findById(consultantId);

    if (!consultant) {
      throw new ApiError(404, "Consultant not found");
    }

    const consultantEmail = consultant.email;
    const consultantName = consultant.fullName;

    const consultantAppointmentDate = new Date(consultant.appointmentDate);
    const formattedAppointmentDate =
      consultantAppointmentDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

    const deletedConsultant = await Consultant.findByIdAndDelete(consultantId);

    if (!deletedConsultant) {
      throw new ApiError(404, "Consultant not found");
    }

    if (consultantEmail && consultantName && consultantAppointmentDate) {
      await DeclineSuccssfullEmail(
        consultantEmail,
        consultantName,
        formattedAppointmentDate
      );
    } else {
      console.error("Consultant email or name is missing.");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Consultant deleted Successfully!!!"));
  } catch (error) {
    console.error("Error during consultant deletion:", error);
    throw new ApiError(401, `Consultant not deleted: ${error.message}`);
  }
});

export const ApproveConsultant = asyncHandler(async (req, res) => {
  const consultantId = req.params.id;
  try {
    const consultant = await Consultant.findById(consultantId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!consultant) {
      throw new ApiError(404, "Consultant not found");
    }

    const consultantEmail = consultant.email;
    const consultantName = consultant.fullName;
    const consultantTime = consultant.appointmentTime;
    const consultantAppointmentDate = new Date(consultant.appointmentDate);
    const consultantInterest = consultant.consultantInterest;
    const consultantphoneNo = consultant.phoneNo;
    const formattedAppointmentDate =
      consultantAppointmentDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

    const approveConsultant = await Consultant.findByIdAndUpdate(
      consultantId,
      { status: "approved" }, // Updating the status to approved
      { new: true, runValidators: true }
    );

    if (!approveConsultant) {
      throw new ApiError(404, "Consultant not found");
    }

    if (
      consultantEmail &&
      consultantName &&
      consultantTime &&
      consultantAppointmentDate &&
      consultantInterest &&
      consultantphoneNo
    ) {
      await ApprovedSuccssfullEmail(
        consultantEmail,
        consultantName,
        consultantTime,
        consultantInterest,
        formattedAppointmentDate,
        consultantphoneNo,
      );
    } else {
      console.error("Consultant email or name is missing.");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Consultant Approved Successfully!!!"));
  } catch (error) {
    console.error("Error during consultant approve:", error);
    throw new ApiError(401, `Consultant not approved: ${error.message}`);
  }
});
