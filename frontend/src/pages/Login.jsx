import Button from '../components/Button'
import useAuth from '../context/AuthContext'

const Login = () => {
  const {login, logout} = useAuth();
  return (
    <>
    <div className='min-h-screen pt-5 pl-3 border-[1px] border-t-black  border-b-black '>
      <div className="flex gap-2">
        <Button title = {"LogIn"} onClick ={login} />
      <Button title = {"LogOut"} onClick ={logout} />
      </div>
      
    </div>
    
    
    </>
  )
}

export default Login