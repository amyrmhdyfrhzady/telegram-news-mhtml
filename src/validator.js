export function isValidUrl(text) {
  try {
    const url = new URL(text);

    return (
      url.protocol === "http:" ||
      url.protocol === "https:"
    );
  } catch {
    return false;
  }
      }
