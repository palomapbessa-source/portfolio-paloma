import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {

    const {
      name,
      email,
      message,
      turnstileToken,
    } = await request.json();

    const verification = await fetch(
  "https://challenges.cloudflare.com/turnstile/v0/siteverify",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
    }),
  }
);

const result = await verification.json();

if (!result.success) {
  return Response.json(
    {
      success: false,
      error: "Turnstile validation failed",
    },
    {
      status: 400,
    }
  );
}

    await resend.emails.send({
      from: "PBessa <contato@pbessa.com.br>",
      to: "paloma.pbessa@gmail.com",
      subject: `Novo contato de ${name}`,
      html: `
        <h2>Novo contato do site</h2>

        <p><strong>Nome:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Mensagem:</strong></p>

        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}