/*import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Load old messages
    axios.get("http://localhost:5000/messages").then((res) => {
      setMessages(res.data);
    });

    // Listen for new messages
    socket.on("chatMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("chatMessage");
  }, []);

  const sendMessage = () => {
    if (input.trim() !== "") {
      socket.emit("chatMessage", input);
      setInput("");
    }
  };

  return (
    <div>
      <div style={{ border: "1px solid #ccc", height: "300px", overflowY: "scroll", padding: "10px" }}>
        {messages.map((msg, i) => (
          <div key={i}>{msg.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        placeholder="Type a message..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;

*/
/*
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);

  useEffect(() => {
    if (isNameSet) {
      // Load old messages
      axios.get("http://localhost:5000/messages").then((res) => {
        setMessages(res.data);
      });

      // Listen for new messages
      socket.on("chatMessage", (message) => {
        setMessages((prev) => [...prev, message]);
      });

      return () => socket.off("chatMessage");
    }
  }, [isNameSet]);

  const sendMessage = () => {
    if (input.trim() !== "") {
      const newMsg = { text: input, username };
      socket.emit("chatMessage", newMsg);
      setInput("");
    }
  };

  if (!isNameSet) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Enter your name to join chat</h2>
        <input
          type="text"
          placeholder="Your name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && username.trim() && setIsNameSet(true)}
          style={{ padding: "10px", borderRadius: "5px", marginRight: "10px" }}
        />
        <button
          onClick={() => username.trim() && setIsNameSet(true)}
          style={{ padding: "10px 20px", borderRadius: "5px" }}
        >
          Join
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Welcome, {username} 👋</h2>
      <div
        style={{
          border: "1px solid #ccc",
          height: "400px",
          overflowY: "scroll",
          padding: "10px",
          background: "#f9f9f9",
        }}
      >
        {messages.map((msg, i) => (
          <div key={i} style={{ margin: "5px 0" }}>
            <strong>{msg.username || "Anonymous"}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: "10px", display: "flex" }}>
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          style={{ flex: 1, padding: "10px", borderRadius: "5px" }}
        />
        <button
          onClick={sendMessage}
          style={{ marginLeft: "10px", padding: "10px 20px", borderRadius: "5px" }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
*/
/*
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import Message from "./Message"; // 

const socket = io("http://localhost:5000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);

  useEffect(() => {
    if (isNameSet) {
      // Load old messages
      /*axios.get("http://localhost:5000/messages").then((res) => {
        setMessages(res.data);
      });*/

      // Listen for new messages
     /* socket.on("chatMessage", (message) => {
        setMessages((prev) => [...prev, message]);
      });

      return () => socket.off("chatMessage");
    }
  }, [isNameSet]);

  const sendMessage = () => {
    if (input.trim() !== "") {
      const newMsg = { text: input, username };
      socket.emit("chatMessage", newMsg);
      setInput("");
    }
  };

  if (!isNameSet) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Enter your name to join chat</h2>
        <input
          type="text"
          placeholder="Your name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && username.trim() && setIsNameSet(true)}
          style={{ padding: "10px", borderRadius: "5px", marginRight: "10px" }}
        />
        <button
          onClick={() => username.trim() && setIsNameSet(true)}
          style={{ padding: "10px 20px", borderRadius: "5px" }}
        >
          Join
        </button>
      </div>
    );
  }

/*


return (
  <div
    style={{
      maxWidth: "600px",
      margin: "auto",
      padding: "20px",
      minHeight: "100vh",
      backgroundImage: "url('https://www.transparenttextures.com/patterns/white-wall-3.png')", // ✅ Pleasant subtle background
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <h2 style={{ textAlign: "center", color: "#2c3e50" }}>
      Welcome, {username} 👋
    </h2>

    {/* ✅ Live Chat Box */
    /*<div
      style={{
        flex: 1,
        border: "1px solid #ccc",
        height: "400px",
        overflowY: "scroll",
        padding: "10px",
        background: "rgba(255, 255, 255, 0.8)", // semi-transparent white for readability
        borderRadius: "10px",
        marginBottom: "10px",
      }}
    >
      {messages.map((msg, i) => (
        <div
          key={i}
          style={{
            margin: "5px 0",
            textAlign: msg.username === username ? "right" : "left",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "8px 12px",
              borderRadius: "20px",
              backgroundColor:
                msg.username === username ? "#dcf8c6" : "#ffffff",
              boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            }}
          >
            <strong>{msg.username || "Anonymous"}:</strong> {msg.text}
          </span>
        </div>
      ))}
    </div>

    {/* ✅ Input box */
   /* <div style={{ display: "flex" }}>
      <input
        type="text"
        value={input}
        placeholder="Type a message..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "20px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={sendMessage}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          borderRadius: "20px",
          backgroundColor: "#25D366", // WhatsApp green
          color: "white",
          border: "none",
        }}
      >
        Send
      </button>
    </div>

    {/* ⬇️ Old Messages Box */
   /* <div
      style={{
        border: "1px solid #ccc",
        height: "200px",
        overflowY: "scroll",
        padding: "10px",
        marginTop: "20px",
        background: "rgba(255, 255, 255, 0.7)",
        borderRadius: "10px",
      }}
    >
      <h4>📜 Stored History</h4>
      {messages.map((msg, i) => (
        <div key={i} style={{ margin: "5px 0" }}>
          <strong>{msg.username || "Anonymous"}:</strong> {msg.text}
        </div>
      ))}
    </div>
  </div>
);*/
/*
return (
  <div
    style={{
      maxWidth: "800px",       // ✅ wider chat container
      margin: "auto",
      padding: "30px",
      minHeight: "100vh",      // ✅ full screen height
      
      
      backgroundColor: "#ddd7d7ff", // ✅ light grey
      display: "flex",
      flexDirection: "column",
    }}
  >
    <h2 style={{ textAlign: "center", color: "#2c3e50", marginBottom: "20px" }}>
      Welcome, {username} 👋
    </h2>

    {/* ✅ Live Chat Box - bigger height */
    /*<div
      style={{
        flex: 1,
        border: "1px solid #ccc",
        height: "500px",        // ✅ increased from 400px
        overflowY: "scroll",
        padding: "15px",
        background: "white",
        borderRadius: "12px",
        marginBottom: "15px",
      }}
    >
      {messages.map((msg, i) => (
        <div
          key={i}
          style={{
            margin: "8px 0",
            textAlign: msg.username === username ? "right" : "left",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "10px 15px",
              borderRadius: "20px",
              backgroundColor:
                msg.username === username ? "#dcf8c6" : "#ffffff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              maxWidth: "70%",   // ✅ prevent bubble from stretching full width
              wordWrap: "break-word",
            }}
          >
            <strong>{msg.username || "Anonymous"}:</strong> {msg.text}
          </span>
        </div>
      ))}
    </div>

    {/* ✅ Input box */
    /*<div style={{ display: "flex" }}>
      <input
        type="text"
        value={input}
        placeholder="Type a message..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        style={{
          flex: 1,
          padding: "12px",
          borderRadius: "25px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={sendMessage}
        style={{
          marginLeft: "10px",
          padding: "12px 24px",
          borderRadius: "25px",
          backgroundColor: "#25D366", // WhatsApp green
          color: "white",
          border: "none",
          fontWeight: "bold",
        }}
      >
        Send
      </button>
    </div>

    {/* ⬇️ Old Messages Box (optional history) */
   /* <div
      style={{
        border: "1px solid #ccc",
        height: "250px",        // ✅ bigger than before
        overflowY: "scroll",
        padding: "12px",
        marginTop: "20px",
        background: "white",
        borderRadius: "12px",
      }}
    >
      <h4 style={{ marginBottom: "10px" }}>📜 Stored History</h4>
      {messages.map((msg, i) => (
        <div key={i} style={{ margin: "6px 0" }}>
          <strong>{msg.username || "Anonymous"}:</strong> {msg.text}
        </div>
      ))}
    </div>
  </div>
);



}

export default Chat;*/

/*
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);

  useEffect(() => {
    if (isNameSet) {
      // Listen for new messages
      socket.on("chatMessage", (message) => {
        setMessages((prev) => [...prev, message]);
      });

      return () => socket.off("chatMessage");
    }
  }, [isNameSet]);

  const sendMessage = () => {
    if (input.trim() !== "") {
      const newMsg = { text: input, username };
      socket.emit("chatMessage", newMsg);
      setInput("");
    }
  };

  // 🔹 Username input screen
  if (!isNameSet) {
    return (
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h2>Enter your name to join chat</h2>
        <input
          type="text"
          placeholder="Your name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && username.trim() && setIsNameSet(true)
          }
          style={{
            padding: "12px",
            borderRadius: "6px",
            marginRight: "10px",
            border: "1px solid #aaa",
          }}
        />
        <button
          onClick={() => username.trim() && setIsNameSet(true)}
          style={{
            padding: "12px 22px",
            borderRadius: "6px",
            background: "#25D366",
            color: "white",
            fontWeight: "bold",
            border: "none",
          }}
        >
          Join
        </button>
      </div>
    );
  }

  // 🔹 Main Chat UI
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "30px",
        minHeight: "100vh",
        backgroundColor: "#f2f2f2",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#2c3e50",
          marginBottom: "20px",
        }}
      >
        Welcome, {username} 👋
      </h2>

      {/* ✅ Live Chat Box *//*
     <div
        style={{
          flex: 1,
          border: "1px solid #ccc",
          height: "500px",
          overflowY: "scroll",
          padding: "15px",
          background: "white",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              margin: "8px 0",
              textAlign: msg.username === username ? "right" : "left",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "10px 15px",
                borderRadius: "20px",
                backgroundColor:
                  msg.username === username ? "#dcf8c6" : "#ffffff",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                maxWidth: "70%",
                wordWrap: "break-word",
              }}
            >
              <strong>{msg.username || "Anonymous"}:</strong> {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* ✅ Input box *//*
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "25px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            marginLeft: "10px",
            padding: "12px 24px",
            borderRadius: "25px",
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Send
        </button>
      </div>

      {/* ✅ Stored History *//*
      <div
        style={{
          border: "1px solid #ccc",
          height: "250px",
          overflowY: "scroll",
          padding: "12px",
          marginTop: "20px",
          background: "white",
          borderRadius: "12px",
        }}
      >
        <h4 style={{ marginBottom: "10px" }}>📜 Stored History</h4>
        {messages.map((msg, i) => (
          <div key={i} style={{ margin: "6px 0" }}>
            <strong>{msg.username || "Anonymous"}:</strong> {msg.text}
          </div>
        ))}
      </div>
      


    </div>
  );
}

export default Chat;
*/
/*
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);

  useEffect(() => {
    if (isNameSet) {
      // Listen for new messages
      socket.on("chatMessage", (message) => {
        setMessages((prev) => [...prev, message]);
      });

      return () => socket.off("chatMessage");
    }
  }, [isNameSet]);

  /*const sendMessage = () => {
    if (input.trim() !== "") {
      const newMsg = { text: input, username, avatar: `/uploads/default.png` };
      socket.emit("chatMessage", newMsg);
      setInput("");
    }
  };*/
  /*const sendMessage = () => {
  if (input.trim() !== "") {
    // Generate avatar from username (unique for each name)
    const avatar = `https://robohash.org/${username}.png`;

    const newMsg = { text: input, username, avatar };
    socket.emit("chatMessage", newMsg);
    setInput("");
  }
};


  // Username input screen
  if (!isNameSet) {
    return (
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h2>Enter your name to join chat</h2>
        <input
          type="text"
          placeholder="Your name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && username.trim() && setIsNameSet(true)
          }
          style={{
            padding: "12px",
            borderRadius: "6px",
            marginRight: "10px",
            border: "1px solid #aaa",
          }}
        />
        <button
          onClick={() => username.trim() && setIsNameSet(true)}
          style={{
            padding: "12px 22px",
            borderRadius: "6px",
            background: "#25D366",
            color: "white",
            fontWeight: "bold",
            border: "none",
          }}
        >
          Join
        </button>
      </div>
    );
  }

  // Main Chat UI
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "30px",
        minHeight: "100vh",
        backgroundColor: "#f2f2f2",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#2c3e50",
          marginBottom: "20px",
        }}
      >
        Welcome, {username} 👋
      </h2>

      {/* Live Chat Box */
     /* <div
        style={{
          flex: 1,
          border: "1px solid #ccc",
          height: "500px",
          overflowY: "scroll",
          padding: "15px",
          background: "white",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              margin: "8px 0",
              display: "flex",
              justifyContent: msg.username === username ? "flex-end" : "flex-start",
              alignItems: "center",
            }}
          >
            {msg.username !== username && (
              <img
                /*src={msg.avatar ? `http://localhost:5000${msg.avatar}` : "http://localhost:5000/uploads/default.png"}*/
               /* src={msg.avatar}
                alt="avatar"
                width="40"
                height="40"
                style={{ borderRadius: "50%", marginRight: "10px" }}
              />
            )}
            <span
              style={{
                display: "inline-block",
                padding: "10px 15px",
                borderRadius: "20px",
                backgroundColor: msg.username === username ? "#dcf8c6" : "#ffffff",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                maxWidth: "70%",
                wordWrap: "break-word",
              }}
            >
              <strong>{msg.username || "Anonymous"}:</strong> {msg.text}
            </span>
            {msg.username === username && (
              <img
                src={msg.avatar ? `http://localhost:5000${msg.avatar}` : "http://localhost:5000/uploads/avatar.jpg"}
                alt="avatar"
                width="40"
                height="40"
                style={{ borderRadius: "50%", marginLeft: "10px" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Input box *//*
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "25px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            marginLeft: "10px",
            padding: "12px 24px",
            borderRadius: "25px",
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Send
        </button>
      </div>

      {/* Stored History *//*
      <div
        style={{
          border: "1px solid #ccc",
          height: "250px",
          overflowY: "scroll",
          padding: "12px",
          marginTop: "20px",
          background: "white",
          borderRadius: "12px",
        }}
      >
        <h4 style={{ marginBottom: "10px" }}>📜 Stored History</h4>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "6px 0",
            }}
          >
            <img
              src={msg.avatar ? `http://localhost:5000/${msg.avatar.replace(/^\/+/, '')}` : "http://localhost:5000/uploads/avatar.jpg"}
              alt="avatar"
              width="40"
              height="40"
              style={{ borderRadius: "50%", marginRight: "10px" }}
            />
            <strong>{msg.username || "Anonymous"}:</strong> {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;*/


/////////////////////////////////////main//////////////////////////
/*import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import jsPDF from "jspdf";

const socket = io("http://localhost:5000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);

  useEffect(() => {
    if (isNameSet) {
      // Listen for new messages
      socket.on("chatMessage", (message) => {
        setMessages((prev) => [...prev, message]);
      });

      // Load stored history from server if available
      socket.on("chatHistory", (history) => {
        setMessages(history);
      });

      return () => {
        socket.off("chatMessage");
        socket.off("chatHistory");
      };
    }
  }, [isNameSet]);

  /*const sendMessage = () => {
    if (input.trim() !== "") {
      const newMsg = {
        text: input,
        username,
        avatar: `http://localhost:5000/uploads/avatar.jpg`, // ✅ attach avatar
      };
      socket.emit("chatMessage", newMsg);
      setInput("");
    }
  };*/

/*
  const sendMessage = () => {
  if (input.trim() !== "") {
    const newMsg = {
      text: input,
      username,
      avatar: `http://localhost:5000/uploads/avatar.jpg`, // ✅ attach avatar
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    socket.emit("chatMessage", newMsg);
    setInput("");
  }
};

const generatePDF = () => {
  const doc = new jsPDF();
  doc.setFontSize(12);
  doc.text("📜 Chat History", 10, 10);

  let y = 20; // starting y-position
  messages.forEach((msg, i) => {
    const line = `${msg.username || "Anonymous"}: ${msg.text}`;
    doc.text(line, 10, y);
    y += 10; // move down for next line
  });

  doc.save("chat-history.pdf");
};
  // 🔹 Username input screen
  if (!isNameSet) {
    return (
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h2>Enter your name to join chat</h2>
        <input
          type="text"
          placeholder="Your name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && username.trim() && setIsNameSet(true)
          }
          style={{
            padding: "12px",
            borderRadius: "6px",
            marginRight: "10px",
            border: "1px solid #aaa",
          }}
        />
        <button
          onClick={() => username.trim() && setIsNameSet(true)}
          style={{
            padding: "12px 22px",
            borderRadius: "6px",
            background: "#25D366",
            color: "white",
            fontWeight: "bold",
            border: "none",
          }}
        >
          Join
        </button>
      </div>
    );
  }

  // 🔹 Main Chat UI
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "30px",
        minHeight: "100vh",
        backgroundColor: "#f2f2f2",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#2c3e50",
          marginBottom: "20px",
        }}
      >
        Welcome, {username} 👋
      </h2>

      {/* ✅ Live Chat Box *//*
      <div
        style={{
          flex: 1,
          border: "1px solid #ccc",
          height: "500px",
          overflowY: "scroll",
          padding: "15px",
          background: "white",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent:
                msg.username === username ? "flex-end" : "flex-start",
              marginBottom: "10px",
            }}
          >
            {/* Incoming msg avatar (left side) *//*
            {msg.username !== username && (
              <img
                src={msg.avatar || "http://localhost:5000/uploads/avatar.jpg"}
                alt="avatar"
                width="40"
                height="40"
                style={{ borderRadius: "50%", marginRight: "10px" }}
              />
            )}

            {/* Message bubble *//*
            <div
              style={{
                display: "inline-block",
                padding: "10px 15px",
                borderRadius: "20px",
                backgroundColor:
                  msg.username === username ? "#dcf8c6" : "#ffffff",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                maxWidth: "70%",
                wordWrap: "break-word",
              }}
            >
              <strong>{msg.username || "Anonymous"}:</strong> {msg.text}

              <div style={{ fontSize: "10px", color: "#888", marginTop: "4px", textAlign: "right" }}>
    {msg.timestamp}
  </div>
            </div>

            {/* Own msg avatar (right side) *//*
            {msg.username === username && (
              <img
                src={msg.avatar || "http://localhost:5000/uploads/avatar.jpg"}
                alt="avatar"
                width="40"
                height="40"
                style={{ borderRadius: "50%", marginLeft: "10px" }}
              />
            )}
          </div>
        ))}
     

 </div>
  

      {/* ✅ Input box *//*
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "25px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            marginLeft: "10px",
            padding: "12px 24px",
            borderRadius: "25px",
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Send
        </button>
      </div>

      {/* ✅ Stored History *//*
      <div
        style={{
          border: "1px solid #ccc",
          height: "250px",
          overflowY: "scroll",
          padding: "12px",
          marginTop: "20px",
          background: "white",
          borderRadius: "12px",
        }}
      >
        <h4 style={{ marginBottom: "10px" }}>📜 Stored History</h4>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", margin: "6px 0" }}
          >
            <img
              src={msg.avatar || "http://localhost:5000/uploads/avatar.jpg"}
              alt="avatar"
              width="30"
              height="30"
              style={{ borderRadius: "50%", marginRight: "8px" }}
            />
            <div>
              <strong>{msg.username || "Anonymous"}:</strong> {msg.text}
              <span style={{ fontSize: "10px", color: "#888", marginLeft: "6px" }}>
    {msg.timestamp}
  </span>
            </div>
          </div>
        ))}
        {/* Download PDF Button *//*
  <button
    onClick={generatePDF}
    style={{
      marginTop: "10px",
      padding: "10px 20px",
      borderRadius: "8px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      cursor: "pointer",
    }}
  >
    ⬇️ Download Chat as PDF
  </button>
      </div>
    </div>
  );
}

export default Chat;
*/

/*

import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import jsPDF from "jspdf";

const socket = io("http://localhost:5000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);
  const [file, setFile] = useState(null); // ✅ file state

  useEffect(() => {
    if (isNameSet) {
      socket.on("chatMessage", (message) => {
        setMessages((prev) => [...prev, message]);
      });

      socket.on("chatHistory", (history) => {
        setMessages(history);
      });

      return () => {
        socket.off("chatMessage");
        socket.off("chatHistory");
      };
    }
  }, [isNameSet]);

  // ✅ Text message
  const sendMessage = () => {
    if (input.trim() !== "") {
      const newMsg = {
        text: input,
        username,
        avatar: `http://localhost:5000/uploads/avatar.jpg`,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      socket.emit("chatMessage", newMsg);
      setInput("");
    }
  };

  // ✅ File upload
  const sendFile = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: { Authorization: token },
      body: formData,
    });
    // ✅ File upload



    const data = await res.json();

    socket.emit("chatMessage", {
      username,
      fileUrl: data.fileUrl,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });

    setFile(null); // reset
    document.getElementById("fileInput").value = "";
  };

  // ✅ PDF export
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("📜 Chat History", 10, 10);

    let y = 20;
    messages.forEach((msg) => {
      const line = `${msg.username || "Anonymous"}: ${msg.text || msg.fileUrl}`;
      doc.text(line, 10, y);
      y += 10;
    });

    doc.save("chat-history.pdf");
  };

  // 🔹 Username input
  if (!isNameSet) {
    return (
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h2>Enter your name to join chat</h2>
        <input
          type="text"
          placeholder="Your name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && username.trim() && setIsNameSet(true)
          }
          style={{
            padding: "12px",
            borderRadius: "6px",
            marginRight: "10px",
            border: "1px solid #aaa",
          }}
        />
        <button
          onClick={() => username.trim() && setIsNameSet(true)}
          style={{
            padding: "12px 22px",
            borderRadius: "6px",
            background: "#25D366",
            color: "white",
            fontWeight: "bold",
            border: "none",
          }}
        >
          Join
        </button>
      </div>
    );
  }

  // 🔹 Main Chat UI
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "30px",
        minHeight: "100vh",
        backgroundColor: "#f2f2f2",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#2c3e50", marginBottom: "20px" }}>
        Welcome, {username} 👋
      </h2>

      {/* ✅ Chat box *//*
      <div
        style={{
          flex: 1,
          border: "1px solid #ccc",
          height: "500px",
          overflowY: "scroll",
          padding: "15px",
          background: "white",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent:
                msg.username === username ? "flex-end" : "flex-start",
              marginBottom: "10px",
            }}
          >
            {/* Avatar *//*
            {msg.username !== username && (
              <img
                src={msg.avatar || "http://localhost:5000/uploads/avatar.jpg"}
                alt="avatar"
                width="40"
                height="40"
                style={{ borderRadius: "50%", marginRight: "10px" }}
              />
            )}

            {/* Message bubble *//*
            <div
              style={{
                display: "inline-block",
                padding: "10px 15px",
                borderRadius: "20px",
                backgroundColor:
                  msg.username === username ? "#dcf8c6" : "#ffffff",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                maxWidth: "70%",
                wordWrap: "break-word",
              }}
            >
              <strong>{msg.username || "Anonymous"}:</strong>{" "}
              {msg.text && <span>{msg.text}</span>}
              {msg.fileUrl && (
                <>
                  {msg.fileUrl.match(/\.(jpg|jpeg|png|gif)$/i) ? (
                    <img
                      src={msg.fileUrl}
                      alt="uploaded"
                      style={{ maxWidth: "200px", marginTop: "8px" }}
                    />
                  ) : (
                    <a href={msg.fileUrl} target="_blank" rel="noreferrer">
                      📎 Download File
                    </a>
                  )}
                </>
              )}

              <div
                style={{
                  fontSize: "10px",
                  color: "#888",
                  marginTop: "4px",
                  textAlign: "right",
                }}
              >
                {msg.timestamp}
              </div>
            </div>

            {/* Own avatar *//*
            {msg.username === username && (
              <img
                src={msg.avatar || "http://localhost:5000/uploads/avatar.jpg"}
                alt="avatar"
                width="40"
                height="40"
                style={{ borderRadius: "50%", marginLeft: "10px" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* ✅ Input + file upload *//*
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "25px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="file"
          id="fileInput"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ marginLeft: "10px" }}
        />

        <button
          onClick={sendMessage}
          style={{
            marginLeft: "10px",
            padding: "12px 20px",
            borderRadius: "25px",
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Send
        </button>

        <button
          onClick={sendFile}
          style={{
            marginLeft: "10px",
            padding: "12px 20px",
            borderRadius: "25px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            fontWeight: "bold",
          }}
        >
          📎 Send File
        </button>
      </div>

      {/* ✅ History + PDF *//*
      <div
        style={{
          border: "1px solid #ccc",
          height: "250px",
          overflowY: "scroll",
          padding: "12px",
          marginTop: "20px",
          background: "white",
          borderRadius: "12px",
        }}
      >
        <h4 style={{ marginBottom: "10px" }}>📜 Stored History</h4>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", margin: "6px 0" }}>
            <img
              src={msg.avatar || "http://localhost:5000/uploads/avatar.jpg"}
              alt="avatar"
              width="30"
              height="30"
              style={{ borderRadius: "50%", marginRight: "8px" }}
            />
            <div>
              <strong>{msg.username || "Anonymous"}:</strong>{" "}
              {msg.text && msg.text}
              {msg.fileUrl && (
                <a href={msg.fileUrl} target="_blank" rel="noreferrer" style={{ marginLeft: "6px" }}>
                  📎 {msg.fileUrl.split("/").pop()}
                </a>
              )}
              <span style={{ fontSize: "10px", color: "#888", marginLeft: "6px" }}>
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}

        <button
          onClick={generatePDF}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            borderRadius: "8px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          ⬇️ Download Chat as PDF
        </button>
      </div>
    </div>
  );
}

export default Chat;*/

import React, { useEffect, useState ,useRef} from "react";


import io from "socket.io-client";
import jsPDF from "jspdf";

const socket = io("http://localhost:5000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (isNameSet) {
      socket.on("chatMessage", (message) => {
        setMessages((prev) => [...prev, message]);
      });

      socket.on("chatHistory", (history) => {
        setMessages(history);
      });

      return () => {
        socket.off("chatMessage");
        socket.off("chatHistory");
      };
    }
  }, [isNameSet]);
  const messagesEndRef = useRef(null);

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);

  //  Text message
  const sendMessage = () => {
    if (input.trim() !== "") {
      const newMsg = {
        text: input,
        username,
        avatar: `http://localhost:5000/uploads/avatar.jpg`,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      socket.emit("chatMessage", newMsg);
      setInput("");
    }
  };

  //  File upload
  const sendFile = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        headers: { Authorization: token }, // no Content-Type
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      socket.emit("chatMessage", {
        username,
        fileUrl: data.fileUrl,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      setFile(null);
      document.getElementById("fileInput").value = "";
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  //  PDF export
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("📜 Chat History", 10, 10);

    let y = 20;
    messages.forEach((msg) => {
      const line = `${msg.username || "Anonymous"}: ${msg.text || msg.fileUrl}`;
      doc.text(line, 10, y);
      y += 10;
    });

    doc.save("chat-history.pdf");
  };

  //  Username input
  if (!isNameSet) {
    return (
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h2>Enter your name to join chat</h2>
        <input
          type="text"
          placeholder="Your name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && username.trim() && setIsNameSet(true)
          }
          style={{
            padding: "12px",
            borderRadius: "6px",
            marginRight: "10px",
            border: "1px solid #aaa",
          }}
        />
        <button
          onClick={() => username.trim() && setIsNameSet(true)}
          style={{
            padding: "12px 22px",
            borderRadius: "6px",
            background: "#25D366",
            color: "white",
            fontWeight: "bold",
            border: "none",
          }}
        >
          Join
        </button>
      </div>
    );
  }

  //  Main Chat UI
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "30px",
        minHeight: "100vh",
        backgroundColor: "#f2f2f2",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#2c3e50", marginBottom: "20px" }}>
        Welcome, {username} 👋
      </h2>

      {/*  Chat box */}
      <div
        /*style={{
          flex: 1,
          border: "1px solid #ccc",
          height: "500px",
          overflowY: "scroll",
          padding: "15px",
          background: "white",
          borderRadius: "12px",
          marginBottom: "15px",
        }}*/
       style={{
    flex: 1,
    border: "1px solid #ccc",
    height: "500px",
    overflowY: "auto",
    padding: "15px",
    backgroundImage: "url('/wtbg3.jpg')",   
    backgroundSize: "cover",               
    backgroundPosition: "center",          
    backgroundRepeat: "no-repeat",         
    borderRadius: "12px",
    marginBottom: "15px",}}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent:
                msg.username === username ? "flex-end" : "flex-start",
              marginBottom: "10px",
            }}
          >
            {/* Avatar */}
            {msg.username !== username && (
              <img
                src={msg.avatar || "http://localhost:5000/uploads/avatar.jpg"}
                alt="avatar"
                width="40"
                height="40"
                style={{ borderRadius: "50%", marginRight: "10px" }}
              />
            )}

            {/* Message bubble */}
            <div
              style={{
                display: "inline-block",
                padding: "10px 15px",
                borderRadius: "20px",
                backgroundColor:
                  msg.username === username ? "#dcf8c6" : "#ffffff",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                maxWidth: "70%",
                wordWrap: "break-word",
              }}
            >
              <strong>{msg.username || "Anonymous"}:</strong>{" "}
              {msg.text && <span>{msg.text}</span>}
              {msg.fileUrl && (
                <>
                  {msg.fileUrl.match(/\.(jpg|jpeg|png|gif)$/i) ? (
                    <img
                      src={msg.fileUrl}
                      alt="uploaded"
                      style={{ maxWidth: "200px", marginTop: "8px" }}
                    />
                  ) : (
                    <a href={msg.fileUrl} target="_blank" rel="noreferrer">
                      📎 Download File
                    </a>
                  )}
                </>
              )}

              <div
                style={{
                  fontSize: "10px",
                  color: "#888",
                  marginTop: "4px",
                  textAlign: "right",
                }}
              >
                {msg.timestamp}
              </div>
            </div>

            {/* Own avatar */}
            {msg.username === username && (
              <img
                src={msg.avatar || "http://localhost:5000/uploads/avatar.jpg"}
                alt="avatar"
                width="40"
                height="40"
                style={{ borderRadius: "50%", marginLeft: "10px" }}
              />
            )}
          </div>
        ))}
      </div>

      {/*  Input + file upload */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "25px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="file"
          id="fileInput"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ marginLeft: "10px" }}
        />

        <button
          onClick={sendMessage}
          style={{
            marginLeft: "10px",
            padding: "12px 20px",
            borderRadius: "25px",
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Send
        </button>

        <button
          onClick={sendFile}
          style={{
            marginLeft: "10px",
            padding: "12px 20px",
            borderRadius: "25px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            fontWeight: "bold",
          }}
        >
          📎 Send File
        </button>
      </div>

      {/* History + PDF */}
      <div
        style={{
          border: "1px solid #ccc",
          height: "250px",
          overflowY: "scroll",
          padding: "12px",
          marginTop: "20px",
          background: "white",
          borderRadius: "12px",
        }}
      >
        <h4 style={{ marginBottom: "10px" }}>📜 Stored History</h4>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", margin: "6px 0" }}
          >
            <img
              src={msg.avatar || "http://localhost:5000/uploads/avatar.jpg"}
              alt="avatar"
              width="30"
              height="30"
              style={{ borderRadius: "50%", marginRight: "8px" }}
            />
            <div>
              <strong>{msg.username || "Anonymous"}:</strong>{" "}
              {msg.text && msg.text}
              {msg.fileUrl && (
                <a
                  href={msg.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginLeft: "6px" }}
                >
                  📎 {msg.fileUrl.split("/").pop()}
                </a>
              )}
              <span
                style={{ fontSize: "10px", color: "#888", marginLeft: "6px" }}
              >
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />

        <button
          onClick={generatePDF}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            borderRadius: "8px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          ⬇️ Download Chat as PDF
        </button>
      </div>
    </div>
  );
}

export default Chat;

