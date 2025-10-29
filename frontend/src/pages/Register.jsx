import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';
import Button from '../components/Button';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleRegister = async (e) =>{
    e.preventDefault();
    if(!username || !password || !email){
      alert("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      await API.post("/users/register", {username, email, password, role});
      alert("Registration successfull. Please login")
      navigate("/login")
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed")
    }finally{
      setLoading(false);
    }
  }



  return (
        <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Taskify
        </h1>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Create Account
        </h1>
        <div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0 dark:bg-gray-800">
          <div className="p-6 space-y-6">
            <form onSubmit={handleRegister} className="space-y-4">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
              />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-gray-50 border rounded p-2 w-full"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>

              <Button title={loading ? "Registering..." : "Register"} type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register