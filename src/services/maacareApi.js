export async function sendMessage(message) {
  const baseUrl = process.env.REACT_APP_MAACARE_API_URL || 'https://api.maacare.ai/v1/chat';
  const apiKey = process.env.REACT_APP_MAACARE_API_KEY;

  let res;
  try {
    res = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
      body: JSON.stringify({ message }),
    });
  } catch (networkErr) {
    throw new Error(`Network error: ${networkErr.message}`);
  }

  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch (e) {
    // response is plain text
  }

  if (!res.ok) {
    const errMsg =
      (data && (data.error?.message || data.message || JSON.stringify(data))) || text || `${res.status} ${res.statusText}`;
    throw new Error(errMsg);
  }

  // Normalize common reply shapes
  if (data) {
    return data.reply || data.message || data.result || (data.choices?.[0]?.text) || data;
  }

  return text;
}
