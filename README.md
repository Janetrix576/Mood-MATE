 # MoodMate – Emotional Wellness Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Frontend: Netlify](https://img.shields.io/badge/Frontend-Netlify-brightgreen)](https://www.netlify.com/)
[![Backend: Render](https://img.shields.io/badge/Backend-Render-blueviolet)](https://render.com/)

MoodMate is a simple and friendly web app to help you track your moods, journal your thoughts, and set personal growth goals. Built as a beginner React project, MoodMate is designed for anyone seeking a better understanding of their emotions and mental well-being.

---

## 📝 About the Project

As a beginner developer, I created MoodMate to be a useful tool for emotional tracking while also learning React. It’s a personal and meaningful app that combines self-care with skill-building.

With **MoodMate**, you can:

- Log how you're feeling each day
- Write journal entries to reflect on your thoughts
- Set and track personal goals
- See patterns in your mood over time

---

## ✨ Features

- ✅ **Mood Tracking:** Choose from various moods and add personal notes  
- 📝 **Journaling:** Write daily entries to process your thoughts  
- 🎯 **Goal Setting:** Track your personal growth and accomplishments  
- 📱 **Responsive Design:** Works on mobile, tablet, and desktop  
- 🌟 **User-Friendly UI:** Clean, modern interface built for ease-of-use  

---

## ⚙️ Tech Stack

| Frontend       | Backend        | Deployment                |
|----------------|----------------|---------------------------|
| React.js       | JSON Server    | Netlify (Frontend)        |
| Tailwind CSS   | REST API       | Render (Backend)          |
| React Router   |                |                           |
| React Icons    |                |                           |

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- Basic understanding of React (optional)

---

### 🔧 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/moodmate.git
cd moodmate
Install dependencies:

bash
Copy
Edit
npm install
Start the frontend development server:

bash
Copy
Edit
npm start
🔌 Backend Setup (Mock API with JSON Server)
Install JSON Server globally:

bash
Copy
Edit
npm install -g json-server
Run the mock backend:

bash
Copy
Edit
json-server --watch db.json --port 3001
Make sure your frontend fetches data from http://localhost:3001.

🌐 Deployment
Frontend: Deployed via Netlify

Backend: Deployed using Render with a hosted version of db.json

Update your API base URL in the app to match your Render backend URL (e.g. https://your-render-api.onrender.com).

📂 Project Structure
pgsql
Copy
Edit
moodmate/
├── src/
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── MoodEntry.jsx
│   │   └── JournalEntry.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── MoodLog.jsx
│   │   ├── Journal.jsx
│   │   └── Goals.jsx
│   ├── App.js
│   └── index.js
├── db.json
├── package.json
└── README.md
🧠 ESLint & Plugins
MoodMate uses Vite with the following React plugins:

@vitejs/plugin-react – Uses Babel for Fast Refresh

@vitejs/plugin-react-swc – Uses SWC for faster development

Want to use TypeScript? Check out the Vite TS template to get started with type-safe development.

🤝 Contributing
Contributions are welcome! Here’s how to help:

Fork the project

Create your feature branch:

bash
Copy
Edit
git checkout -b feature/AmazingFeature
Commit your changes:

bash
Copy
Edit
git commit -m 'Add some AmazingFeature'
Push to the branch:

bash
Copy
Edit
git push origin feature/AmazingFeature
Open a Pull Request

📜 License
This project is licensed under the MIT License.
See the LICENSE file for more details.
[License](./LIicense)


BLOG
 Blog: Building MoodMate – A Journey of Code and Self-Care
 Introduction

In today’s fast-paced world, mental health and emotional well-being are more important than ever. As a beginner developer, I wanted to create something meaningful that could help people while also allowing me to grow my skills. That’s how MoodMate was born—a simple yet powerful web app designed to track moods, journal thoughts, and set personal goals.


Challenges and Lessons Learned

Building MoodMate wasn’t without its challenges. As a beginner, I had to learn React, Tailwind CSS, and JSON Server from scratch. Debugging issues, designing a responsive UI, and managing state in React taught me valuable lessons about problem-solving and perseverance.


Key Features of MoodMate

- Mood Tracking: Users can log their daily emotions and add personal notes to reflect on their feelings.
- Journaling: A space to write and process thoughts, helping users gain clarity and mindfulness.
- Goal Setting: Tools to set and track personal growth goals, encouraging positive habits.
- Data Visualization: Patterns in mood over time help users identify trends and triggers.

The Tech Behind the App

MoodMate is built with a beginner-friendly tech stack:

Frontend: React.js with Tailwind CSS for a responsive and modern design.
Backend:JSON Server for a lightweight mock API.
Deployment: Netlify for the frontend and Render for hosting the backend.

This stack allowed me to focus on learning core concepts without being overwhelmed by complexity.


 Final Thoughts

Creating MoodMate has been an incredible journey of growth, both as a developer and as an individual. It’s a reminder that technology can be a force for good, helping us connect with ourselves and improve our lives. I hope MoodMate inspires others to prioritize their mental health and explore the endless possibilities of coding.

If you’re a beginner developer, I encourage you to start your own project—something that resonates with you. The process of building, learning, and sharing is truly rewarding.

Happy coding and self-care! 


