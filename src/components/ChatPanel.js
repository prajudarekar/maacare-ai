import React, { useState } from 'react';
import { sendMessage } from '../services/maacareApi';

export default function ChatPanel() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;

    const userMsg = { role: 'user', text };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await sendMessage(text);
      const botText = typeof res === 'string' ? res : res?.reply || res?.message || JSON.stringify(res);
      const botMsg = { role: 'bot', text: botText };
      setMessages((m) => [...m, botMsg]);
    } catch (err) {
      console.error('Maacare API error:', err);
      const botMsg = { role: 'bot', text: err?.message || 'Sorry, something went wrong.' };
      setMessages((m) => [...m, botMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-panel">
      <h6>Ask MaaCare AI</h6>

      <div className="chat-body">
        {messages.length === 0 && (
          <>
            <div className="chat user">What foods should I avoid?</div>
            <div className="chat bot">Avoid raw fish, unpasteurized milk, and street food.</div>
          </>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`chat ${m.role}`}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}
