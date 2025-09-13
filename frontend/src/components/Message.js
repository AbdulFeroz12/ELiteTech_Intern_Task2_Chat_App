import React from "react";
import "./Message.css";

const Message = ({ text, sender, username, currentUser }) => {
  const isMe = sender === "me";

  return (
    <div className={`message ${isMe ? "me" : "other"}`}>
      {!isMe && <div className="username">{username}</div>}
      <p>{text}</p>
    </div>
  );
};

export default Message;
