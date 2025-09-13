# 💬 Real-time Chat Application

A real-time chat application built with **React (frontend)** and **Node.js + Express + Socket.IO (backend)**.  
Supports **real-time messaging, timestamps, file & image sharing, stored chat history, and PDF export**.  
Each user is assigned a default avatar for chat display.

---

## 🚀 Features
- 🔗 Real-time messaging with **Socket.IO**
- 🖼️ File and image sharing (sent files are displayed in chat)
- 👤 Default avatars for all users (no upload option)
- ⏰ Message timestamps (aligned like WhatsApp)
- 📜 Stored chat history section
- ⬇️ Export chat history as a **PDF**
- 🎨 Clean UI with chat bubbles and responsive layout

---

## 🛠️ Tech Stack
- **Frontend**: React (Create React App), jsPDF  
- **Backend**: Node.js, Express, Socket.IO  
- **Storage**: Shared files/images stored on the backend (`/uploads` folder)

---

## 📂 Project Structure
frontend # React app (chat UI)
/backend # Node.js + Express + Socket.IO server
├── server.js
├── /uploads # stores shared files & images


## Start the backend
cd backend
npm install
node server.js

Server runs at http://localhost:5000

## Start the frontend
cd frontend
npm install
npm start

Frontend runs at http://localhost:3000


🔮 Future Scope

User Authentication (login/signup system)

Private & Group Chats for better communication

Custom Avatars (upload profile pictures)

Typing Indicators & Read Receipts for real-time feedback


## ✍️ Author
**Abdul Feroz**  
https://www.linkedin.com/in/abdul-feroz-778b8b251 
https://github.com/AbdulFeroz12
