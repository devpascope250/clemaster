import dotenv from "dotenv";
import { sendMail } from "../../../lib/mail";
import { NextResponse } from "next/server";
dotenv.config();

export async function GET (res: NextResponse) {
  await run();
  return NextResponse.json({ message: "Emails sent successfully" });
}

const run = async () => {
  try {
    const name = "Test Customer";
    const email = "pascope2500@gmail.com";
    const message = "This is a test message from Clemaster website.";

    // Send to company
    await sendMail(
      process.env.EMAIL_USER as string,
      `New Contact Message from ${name}`,
      `
        <h3>New Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    );

    // Auto reply to customer
    await sendMail(
      email,
      "We Received Your Message - Clemaster Industries",
      `
        <h2>Dear ${name},</h2>
        <p>Thank you for contacting Clemaster Industries.</p>
        <p>Our team will respond shortly.</p>
      `
    );

    console.log("✅ Emails sent successfully");
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};
