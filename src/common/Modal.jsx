export default function Modal() {
  return (
    <>
      {/* Loader & Cursor (สามารถดึงมารวมในกลุ่ม Common ได้) */}
      <div className="load">
        <div className="lm"><i></i>GLOBAL ASSETS</div>
      </div>
      <div className="cursor" id="cur"></div>
      <div className="ring" id="ring"></div>

      {/* Floating Chat */}
      <button className="chatBtn" onClick={() => toggleChat()}>✦</button>
      <div className="chat" id="chat">
        <div className="chatHead">
          <b>Global Assets Chat</b>
          <button style={{ background: 'none', border: 0, color: '#fff', fontSize: '20px' }} onClick={() => toggleChat()}>×</button>
        </div>
        <div className="msgs" id="msgs">
          <div className="msg">Welcome. What are you exploring today?</div>
        </div>
        <div className="chatInput">
          <input id="ci" placeholder="Ask the concierge…" onKeyDown={(e) => e.key === 'Enter' && sendChat()} />
          <button onClick={() => sendChat()}>↗</button>
        </div>
      </div>

      {/* Dynamic Modal */}
      <div className="modal" id="modal">
        <div className="modalCard">
          <button className="close" onClick={() => closeModal()}>×</button>
          <div id="mb"></div>
        </div>
      </div>

      {/* Google Translate Hidden Div */}
      <div id="google_translate_element" className="gt-hidden"></div>
    </>
  );
}