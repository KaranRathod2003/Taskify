## 🧩 **Taskify – Task Management Web App**

### 📝 Overview

**Taskify** is a simple and intuitive task management web application built with **React** and **Context API** for authentication.
It allows users to log in, manage their tasks efficiently, and stay organized with a clean and modern UI.

---

### 🚀 **Tech Stack**

| Category                         | Technologies                         |
| -------------------------------- | ------------------------------------ |
| **Frontend**                     | React.js, TailwindCSS                |
| **State Management**             | Context API                          |
| **Routing**                      | React Router DOM                     |
| **Authentication (Client-side)** | Custom AuthContext with LocalStorage |
| **Backend (Future Integration)** | Node.js, Express.js, MongoDB         |

---

### ⚙️ **Current Features (Completed)**

✅ Basic project setup with React + Vite
✅ TailwindCSS configuration
✅ Navbar with navigation links
✅ AuthContext (Context API for global auth state)
✅ Login UI built with Tailwind
✅ Dummy login/logout functionality
✅ LocalStorage persistence (user stays logged in on refresh)

---

### 🧠 **Upcoming Features (Planned)**

#### 🧩 Phase 1: Authentication System

* [ ] Connect frontend login/register to backend API
* [ ] JWT-based authentication
* [ ] Role-based access (User/Admin)
* [ ] Protected routes (Dashboard access only after login)

#### ✅ Phase 2: Task Management

* [ ] Dashboard UI with task list
* [ ] Add / Edit / Delete tasks
* [ ] Mark tasks as completed or pending
* [ ] Filter tasks by status (All / Completed / Pending)

#### 📅 Phase 3: User Personalization

* [ ] Show logged-in user’s name & profile in Navbar
* [ ] Remember last viewed page
* [ ] Dark/Light mode toggle

#### ☁️ Phase 4: Backend & API Integration

* [ ] Create Express.js + MongoDB backend
* [ ] REST APIs for user & task management
* [ ] Secure API calls with JWT
* [ ] Connect frontend with live backend

---

### 📂 **Project Structure**

```
Taskify/
│
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   └── Navbar.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx (planned)
│   │   └── Dashboard.jsx (planned)
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
│
├── package.json
└── README.md
```

---

### 🔑 **Flow of Operations**

1. User opens the app → Navbar visible
2. Clicks on **Login** → fills credentials
3. `handleSubmit()` in `Login.jsx` triggers `login()` from `AuthContext`
4. `AuthContext` stores `user` and `token` in both **state** and **localStorage**
5. On reload, data is restored using `useEffect()`
6. Clicking **Logout** → clears all data from state + localStorage

---

### 💡 **Future Enhancements**

* Add task due dates and reminders
* Integrate email notifications
* Add animations (Framer Motion)
* Deploy on **Vercel** or **Netlify**

---

### 👨‍💻 **Author**

**Karan [Propane]**
Software Developer | Full Stack Enthusiast 💻

