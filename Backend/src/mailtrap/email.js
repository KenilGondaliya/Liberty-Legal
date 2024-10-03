import { ApiError } from "../utils/ApiError.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const DeclineSuccssfullEmail = async (email, name, formattedAppointmentDate) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "4886e41c-e770-4c37-9d95-72e9e4fe82df",
      template_variables: {
        company_info_name: "Liberty Law Firm",
        name: name,
        formattedAppointmentDate: formattedAppointmentDate,
      },
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(`Error sending verification email: ${error.message}`);

    if (error.response) {
      console.log("Response data:", error.response.data);
    }

    throw new ApiError(
      401,
      `Error sending verification email: ${error.message}`
    );
  }
};

export const ApprovedSuccssfullEmail = async (email,name,consultantTime,consultantInterest ,formattedAppointmentDate,consultantphoneNo,) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "3cec7cf4-cccb-44e9-818d-5ff1ba175e00",
      template_variables: {
        company_info_name: "Liberty Law Firm",
        formattedAppointmentDate: formattedAppointmentDate,
        consultantInterest:consultantInterest,
        consultantTime:consultantTime,
        consultantphoneNo:consultantphoneNo,
        name:name,
      },
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(`Error sending verification email: ${error.message}`);

    if (error.response) {
      console.log("Response data:", error.response.data);
    }

    throw new ApiError(
      401,
      `Error sending verification email: ${error.message}`
    );
  }
};
