import { ResendEmail } from "@/lib/resend";
import { ApiResponse } from "@/types/apiresponse";
import VerificationEmail from "../../emails/verifucationemail";

export async function ForGetPassword(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await ResendEmail.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Mystery Message Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return {
      success: true,
      message: "Reset Password email sent successfully.",
    };
  } catch (emailError) {
    console.error("Error sending verification email:", emailError);
    return { success: false, message: "Failed to send verification email." };
  }
}
