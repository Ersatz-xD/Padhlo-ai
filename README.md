
# 📚 Padhlo AI

An AI-powered study assistant that helps you generate structured notes and quizzes using the Gemini API.  
Built with the **MERN stack** (MongoDB, Express, React, Node.js) and deployed for real-world use! 🚀

🚀 **Check it out here:** [Padhlo AI Live Demo](https://padhlo-ai.vercel.app/)


---

## ✨ Features

- 📖 **Notes Helper**:  
  Turn rough notes into clean, structured study material.

- 🧠 **Quiz Generator** (Coming soon after semester):  
  Instantly create MCQs from any topic for quick practice.

- 🔐 **Authentication**:  
  Simple Login/Signup system (without password encryption for faster setup).

- 🛢️ **MongoDB Integration**:  
  Optionally save notes for users (expandable for future features).

- 🎨 **Beautiful UI**:  
  Minimalistic and student-friendly design with custom color themes.

---

## ⚙️ Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **AI Integration**: Gemini API
- **Authentication**: JWT (with `JWT_PRIVATE_KEY`)

---

## 📂 Project Structure

```
Padhlo-ai/
├── client/        # Frontend (React)
├── server/        # Backend (Express + MongoDB + Gemini API)
├── .env           # Environment variables (PORT, MONGO_URI, JWT_PRIVATE_KEY, SALT)
└── README.md
```

---

## 🛠️ Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/Padhlo-ai.git
   cd Padhlo-ai
   ```

2. **Set up the Backend**  
   ```bash
   cd server
   npm install
   npm run dev
   ```

3. **Set up the Frontend**  
   ```bash
   cd ../client
   npm install
   npm run dev
   ```

4. **Create a `.env` file inside `server/` folder**  
   Example:

   ```
   PORT=5000
   MONGO_URI=your-mongodb-uri
   JWT_PRIVATE_KEY=your-jwt-private-key
   SALT=your-bcrypt-salt
   GEMINI_API_KEY=your-gemini-api-key
   ```

---

## 🚀 Deployment

- **Frontend** deployed on: [Vercel](https://vercel.com/)
- **Backend** deployed on: [Render](https://render.com/)

---

## 🎯 Future Updates

- [x] Notes Helper Completed ✅
- [ ] Quiz Generator (after semester) 🛠️
- [ ] Save multiple notes under chapters 📝
- [ ] Export notes as PDF 📄

---

## 🤝 Connect with Me

- [GitHub](https://github.com/Ersatz-xD)
- [LinkedIn](https://www.linkedin.com/in/ayaan-ahmed-khan-448600351)

---

## 🖼️ Project Preview

- 🚀 **Click on it to watch full preview:**
  
  [![Neural Networks Explained](https://img.youtube.com/vi/cF5wYIU_dk0/0.jpg)](https://www.youtube.com/watch?v=cF5wYIU_dk0)
---
