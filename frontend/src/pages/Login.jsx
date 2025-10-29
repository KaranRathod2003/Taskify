import { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import Button from '../components/Button'
import useAuth from '../context/AuthContext'
import API from '../api/axios';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("user"); // default user



// form me
{/* <div>
  <label className="block mb-2">Role</label>
  <select value={role} onChange={(e) => setRole(e.target.value)} className="bg-gray-50 border rounded p-2 w-full">
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>
</div> */}

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("please enter both...")
      return;
    }
    setLoading(true);
    try {
      const res = await API.post("/users/login", {email, password, role});

      const {user, accessToken} = res.data.data;
      login(user, accessToken);
      navigate("/dashboard")
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }finally{
      setLoading(false);
    }

  }








  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Taskify
        </h1>
        <div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0 dark:bg-gray-800">
          <div className="p-6 space-y-6">
            <h1 className="text-xl font-bold leading-tight text-gray-900 dark:text-white">
              Login to your account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="bg-gray-50 border rounded p-2 w-full"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <Button
                title={loading ? "Logging in..." : "Login"}
                type="submit"
                disabled={loading}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login