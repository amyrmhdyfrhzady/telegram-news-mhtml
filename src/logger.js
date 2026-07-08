function now() {
  return new Date().toLocaleString("fa-IR");
}

export function info(message) {
  console.log(`[${now()}] ✅ ${message}`);
}

export function warn(message) {
  console.warn(`[${now()}] ⚠️ ${message}`);
}

export function error(message) {
  console.error(`[${now()}] ❌ ${message}`);
}
