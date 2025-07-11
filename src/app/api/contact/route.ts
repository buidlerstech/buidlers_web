import { NextResponse } from "next/server";
import { z } from "zod";
import { contactSubmissionSchema } from "@/types/contact";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  throw new Error(
    "Missing Telegram configuration! Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in your environment variables."
  );
}

async function sendTelegramMessage(message: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending Telegram message:", error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the incoming data
    const validatedData = contactSubmissionSchema.parse(body);

    // Format the message for Telegram
    const message = `
<b>🆕 Nuevo mensaje de contacto</b>

👤 <b>Nombre:</b> ${validatedData.nombre}
🏢 <b>Empresa:</b> ${validatedData.empresa}
📧 <b>Email:</b> ${validatedData.email}

💬 <b>Mensaje:</b>
${validatedData.mensaje}

📊 <b>Datos del sistema:</b>
🕒 Fecha: ${validatedData.systemData.timestamp.toLocaleString()}
🌐 Idioma: ${validatedData.systemData.language || "No disponible"}
🖥️ Resolución: ${validatedData.systemData.screenResolution
        ? `${validatedData.systemData.screenResolution.width}x${validatedData.systemData.screenResolution.height}`
        : "No disponible"
      }
🔗 Referrer: ${validatedData.systemData.referrer || "Directo"}
    `.trim();

    // Send the message to Telegram
    await sendTelegramMessage(message);

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado exitosamente",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Datos de formulario inválidos",
          details: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Error interno del servidor",
      },
      { status: 500 }
    );
  }
}
