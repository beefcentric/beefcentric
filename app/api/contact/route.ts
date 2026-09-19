import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    // Check required fields
    if (!name || !email || !message) {
      return Response.json(
        {
          error: "Name, email, and message are required.",
        },
        {
          status: 400,
        }
      );
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: "Beef Centric <onboarding@resend.dev>",
      to: ["beef.centric@gmail.com"],
      subject: subject || `New Contact Message from ${name}`,
      replyTo: email,

      text: `
New message from Beef Centric website

Name: ${name}
Email: ${email}
Subject: ${subject || "-"}

Message:
${message}
      `,
    });

    // Resend returned an error
    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          error: "Failed to send email.",
        },
        {
          status: 500,
        }
      );
    }

    // Success
    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}