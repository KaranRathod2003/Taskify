## 🧩 **Taskify — Feature & Flow Documentation**

### 🎯 **Goal of the Project**

Taskify is a **task management web app** where users can **register, log in, and manage tasks** (create, edit, mark complete, delete).
Each user has their **own task dashboard**, secured by authentication.

---

## ⚙️ **Core Features (MVP Phase)**

### 🧠 1. **Authentication System**

* ✅ **Login / Logout / Register pages**
* ✅ **AuthContext** (handles user, token, isLoggedIn)
* ⏳ **Protected Routes** (dashboard access only after login)
* ⏳ **Redirects** using `useNavigate` (login → dashboard, logout → login)
* ⏳ **Navbar dynamic behavior** — shows Login/Logout based on auth state

---

### 🧾 2. **Task Management**

* ⏳ **Add Task** → Title, Description, Deadline
* ⏳ **View Tasks** → List of all tasks (filtered by logged-in user)
* ⏳ **Edit Task** → Update title/description/deadline
* ⏳ **Mark Complete** → Toggle status
* ⏳ **Delete Task** → Remove task
* ⏳ **Persist tasks** (localStorage in frontend-only version, database later)

---

### 📊 3. **Dashboard**

* ⏳ Shows all user’s tasks
* ⏳ Task filters (e.g., *All / Completed / Pending*)
* ⏳ Statistics summary:

  * Total Tasks
  * Completed Tasks
  * Pending Tasks

---

### 🗃️ 4. **Backend Integration (Next Phase)**

*(when you connect Node.js / Django backend later)*

* ⏳ Real login/signup with JWT token
* ⏳ Store users & tasks in MongoDB
* ⏳ API Endpoints for CRUD operations on tasks
* ⏳ Authentication middleware (token validation)
* ⏳ Deployment-ready flow

---

### 🌐 5. **UI/UX Features**

* ✅ Tailwind-based clean design
* ⏳ Toasts / Alerts for actions (task added, deleted, etc.)
* ⏳ Loader or spinner for async operations
* ⏳ Dark / Light theme toggle (optional)

---

## 🔁 **Flow of Operation**

### **1️⃣ App Initialization**

* `main.jsx` → wraps `<App />` inside `<AuthProvider />`
* Routes defined (Home, Login, Register, Dashboard)

### **2️⃣ Authentication Flow**

```
User opens Login Page →
fills form →
handleSubmit() triggers login() →
AuthContext updates user/token →
user redirected to /dashboard →
ProtectedRoute verifies isLoggedIn →
Dashboard rendered
```

### **3️⃣ Task Management Flow**

```
Dashboard →
User adds a new task (form input) →
Task saved in state/localStorage →
Displayed in task list →
User can edit / mark complete / delete →
UI updates instantly
```

### **4️⃣ Logout Flow**

```
User clicks Logout →
AuthContext clears data & localStorage →
Redirects to /login
```

---

## 🧱 **Current Progress (as of today)**

✅ AuthContext setup
✅ Login UI + dummy login working
✅ Context state persisting in localStorage
⏳ Protected Route
⏳ Dashboard
⏳ Task CRUD
⏳ Navbar dynamic

---

## 🎯 **Next Steps**

1. Implement Protected Routes and navigation
2. Add a Dashboard page
3. Build CRUD (add/edit/delete) for tasks
4. Connect backend (optional later)

---

