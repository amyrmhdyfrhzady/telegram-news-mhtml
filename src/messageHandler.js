import { isValidUrl } from "./validator.js";

export async function handleMessage(message) {
  if (!message?.text) {
    return {
      text: "❌ فقط لینک‌های متنی پشتیبانی می‌شوند."
    };
  }

  const text = message.text.trim();

  if (!isValidUrl(text)) {
    return {
      text:
`👋 سلام!

لینک موردنظر خود را ارسال کنید.

اگر لینک مربوط به یک صفحه وب باشد، نسخه MHTML آن ساخته می‌شود.

اگر لینک فایل باشد، همان فایل دانلود و برایتان ارسال می‌شود.`
    };
  }

  return {
    text:
`🔍 لینک دریافت شد.

در حال بررسی نوع محتوا...`
  };
}
