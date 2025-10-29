

## 🧾 **README.md – Taskify (Role-Based Task Management App)**

### 🚀 **Overview**

**Taskify** is a full-stack role-based task management application built using the **MERN stack**.
It allows **Admins** to create, assign, and manage tasks for **Users**, while users can view and update their assigned tasks.
The project features authentication, authorization, protected routes, and clean role-based UI.

---

### 🧩 **Features**

#### 👨‍💼 **Admin Features**

* Create new tasks and assign them to users.
* View all created tasks with status tracking.
* Update or delete any task.
* View a list of all registered users.

#### 👤 **User Features**

* View all tasks assigned to them.
* Update their task status (`pending`, `in-progress`, `completed`).
* View submission and completion dates.

#### 🔐 **Authentication & Authorization**

* JWT-based authentication (with tokens stored safely).
* Role-based protected routes (`admin`, `user`).
* Automatic redirection based on user role after login.

#### 🖥️ **Frontend**

* Built with **React + Vite**
* Dynamic routing using **React Router DOM v6**
* Role-based redirection using custom `ProtectedRoutes` and `RolesRoute`
* Modern UI built with **Tailwind CSS**

#### ⚙️ **Backend**

* Node.js with **Express.js**
* MongoDB with **Mongoose ORM**
* Modular folder structure (models, controllers, routes, middleware, utils)
* Custom error handling with `ApiError` & `ApiResponse` classes
* JWT middleware to verify tokens

---

### 🧱 **Tech Stack**

| Layer           | Technologies Used                           |
| --------------- | ------------------------------------------- |
| **Frontend**    | React, Vite, React Router DOM, Tailwind CSS |
| **Backend**     | Node.js, Express.js                         |
| **Database**    | MongoDB, Mongoose                           |
| **Auth**        | JWT (JSON Web Token)                        |
| **API Testing** | Postman                                     |

---

### 📂 **Folder Structure**

```
Taskify/
│
├── backend/
│   ├── controllers/
│   │   ├── user.controller.js
│   │   ├── task.controller.js
│   ├── models/
│   │   ├── user.models.js
│   │   ├── task.models.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   ├── routes/
│   │   ├── user.routes.js
│   │   ├── task.routes.js
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   ├── layout/
│   │   │   ├── RootLayout.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── Unauthorized.jsx
│   │   ├── routes/
│   │   │   ├── ProtectedRoutes.jsx
│   │   │   ├── RolesRoute.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│
└── README.md
```

---

### 🕒 **Development Timeline**

| Day       | Task                                                          | Progress |
| --------- | ------------------------------------------------------------- | -------- |
| **Day 1** | Setup backend structure (server, routes, models, controllers) | ✅        |
| **Day 2** | Added JWT authentication & user role system                   | ✅        |
| **Day 3** | Built Task APIs (CRUD + status updates)                       | ✅        |
| **Day 4** | Created React frontend structure with routing                 | ✅        |
| **Day 5** | Added AuthContext, Login, Register, ProtectedRoutes           | ✅        |
| **Day 6** | Integrated backend APIs with frontend                         | ✅        |
| **Day 7** | Fixed role-based navigation & polished UI                     | ✅        |
| **Day 8** | Completed final testing and debugging                         | ✅        |

---

### ⚡ **Setup Instructions**

#### 🧠 Prerequisites

* Node.js (v16+)
* MongoDB installed or MongoDB Atlas URI

#### 🪄 Clone the repository

```bash
git clone https://github.com/yourusername/taskify.git
cd taskify
```

#### 🧩 Setup Backend

```bash
cd backend
npm install
# Add .env file with:
# MONGO_URI=your_mongo_connection_string
# JWT_SECRET=your_secret_key
npm run start
```

#### 💻 Setup Frontend

```bash
cd frontend
npm install
npm run start
```

#### 🌐 Access App

```
Frontend: http://localhost:5173
Backend: http://localhost:5000
```

---

### 🔮 **Future Improvements**

* Add email notifications for assigned/completed tasks
* Add task priority & filtering options
* Admin analytics dashboard
* Dark mode toggle

---

### 👨‍💻 **Developer**

**Propane Legends**
💼 Full Stack Developer | MERN | JAVA | AI Integration
📧 [[kr04391@gmail.com]]
🌐 [https://karan-rathod-space.netlify.app/ / https://github.com/KaranRathod2003]


