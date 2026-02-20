import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const destinationLabels: Record<string, string> = {
  borovoe: "🇰🇿 Боровое, Казахстан",
  vietnam: "🇻🇳 Фукуок, Вьетнам",
  any: "Не определился",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { parentName, phone, email, childName, childAge, destination } =
      await req.json();

    const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const chatId = Deno.env.get("TELEGRAM_CHAT_ID");

    if (!botToken || !chatId) {
      throw new Error("Telegram credentials not configured");
    }

    const lines = [
      "📩 *Новая заявка с сайта\\!*",
      "",
      `👤 *Родитель:* ${escapeMarkdown(parentName)}`,
      `📞 *Телефон:* ${escapeMarkdown(phone)}`,
    ];

    if (email) lines.push(`📧 *Email:* ${escapeMarkdown(email)}`);
    if (childName || childAge) {
      const childParts: string[] = [];
      if (childName) childParts.push(escapeMarkdown(childName));
      if (childAge) childParts.push(`${escapeMarkdown(childAge)} лет`);
      lines.push(`👦 *Ребёнок:* ${childParts.join(", ")}`);
    }
    if (destination) {
      lines.push(
        `🌍 *Направление:* ${escapeMarkdown(destinationLabels[destination] || destination)}`
      );
    }

    const text = lines.join("\n");

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "MarkdownV2",
        }),
      }
    );

    const telegramData = await telegramRes.json();

    if (!telegramRes.ok) {
      console.error("Telegram API error:", telegramData);
      throw new Error(telegramData.description || "Telegram API error");
    }

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabaseClient = createClient(supabaseUrl, supabaseKey);

    await supabaseClient.from("applications").insert({
      parent_name: parentName,
      phone,
      email: email || null,
      child_name: childName || null,
      child_age: childAge || null,
      destination: destination || null,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

function escapeMarkdown(text: string): string {
  return text.replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, "\\$1");
}
