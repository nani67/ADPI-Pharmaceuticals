import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: "Name, email and message are required",
        },
        { status: 400 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_GMAIL_USER,
        pass: process.env.SENDER_GMAIL_APP_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${"ADPI Pharmaceuticals"}" <${process.env.SENDER_GMAIL_USER}>`,
      to: process.env.RECEIVER_GMAIL_USER,
      replyTo: email, // User's email for easy reply
      subject: subject || `Contact Form: Message from ${name}`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #14b8a6;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            ${subject ? `<p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>` : ""}
            <p style="margin: 10px 0;"><strong>Message:</strong> ${message}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        error: "Form submitted successfully",
        success: true,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email send error:", error);

    return NextResponse.json(
      {
        error: "Failed to send email",
        details:
          error instanceof Error ? error.message : "Please try again later.",
        success: false,
      },
      { status: 500 },
    );
  }
}
