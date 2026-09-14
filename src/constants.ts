export const BRAND_NAME = "Code Smart Academy";

function publicWebUrl(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : undefined;
  } catch {
    return undefined;
  }
}

export const LOGIN_URL = publicWebUrl(import.meta.env.PUBLIC_LOGIN_URL);
export const SIGNUP_URL = publicWebUrl(import.meta.env.PUBLIC_SIGNUP_URL);
