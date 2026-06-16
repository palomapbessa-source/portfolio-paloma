import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

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