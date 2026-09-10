import React, { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome. What are you exploring today?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const lineOaUrl = 'https://lin.ee/YcqOqt1';

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // เพิ่มข้อความของผู้ใช้
    const userMsg = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // ตอบกลับอัตโนมัติพร้อมส่งลิงก์ LINE OA สำหรับ Private Consultation
    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        text: 'Thank you for reaching out. For immediate private advisor access, connect directly with our team on LINE Official.',
        sender: 'bot',
        isAction: true
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* ปุ่มเปิด-ปิด Floating Chat พร้อม SVG Chat Icon */}
      <button 
        className="chatBtn" 
        onClick={toggleChat} 
        aria-label="Toggle Chat"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0
        }}
      >
        {isOpen ? (
          /* ไอคอนปิด (×) เมื่อเปิดกล่องแชท */
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          /* ไอคอนรูปแชท (Message Bubble Icon) */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* กล่อง Chat Drawer */}
      <div className={`chat ${isOpen ? 'active' : ''}`} id="chat">
        <div className="chatHead">
          <b>Global Assets Concierge</b>
          <button
            style={{ background: 'none', border: 0, color: '#fff', fontSize: '20px', cursor: 'pointer' }}
            onClick={toggleChat}
          >
            ×
          </button>
        </div>

        <div className="msgs" id="msgs">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`msg ${msg.sender === 'user' ? 'user-msg' : ''}`}
              style={{
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                background: msg.sender === 'user' ? 'rgba(255,255,255,0.15)' : undefined
              }}
            >
              {msg.text}
              {msg.isAction && (
                <button 
                  onClick={() => window.open(lineOaUrl, '_blank')}
                  style={{
                    display: 'block',
                    marginTop: '10px',
                    padding: '8px 14px',
                    background: '#FE6E46',
                    color: '#0F0F2E',
                    border: 'none',
                    borderRadius: '100px',
                    fontSize: '11px',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  Connect LINE Advisory ↗
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="chatInput">
          <input
            id="ci"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask the concierge…"
          />
          <button onClick={handleSend}>↗</button>
        </div>
      </div>
    </>
  );
}