import mongoose, { Schema } from "mongoose";

const consultantSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNo: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true, 
      unique: true, 
      trim: true,     
      lowercase: true 
    },

    companyName: {
      type: String,
      trim: true,
    },
    consultantInterest: {
      type: String,
      required: true,
      trim: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    appointmentTime: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "disapproved"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const Consultant = mongoose.model("Consultant", consultantSchema);
