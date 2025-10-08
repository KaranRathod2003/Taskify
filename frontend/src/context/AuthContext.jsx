import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export default function useAuth(){
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) =>{
    const[user, setUser] = useState(null);
    const[token,  setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (userData, jwtToken) =>{
        setUser(userData);
        setToken(jwtToken);
        setIsLoggedIn(true);

        //
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("user", JSON.stringify(userData));
    }
    const logout = () =>{
        setUser(null);
        setToken(null);
        setIsLoggedIn(false);
        //
        localStorage.removeItem("token");
        localStorage.removeItem("user");

    }
    useEffect(() => {
      const savedUser = localStorage.getItem("user");
      const savedToken = localStorage.getItem("token");
      if(savedToken && savedUser){
        setToken(savedToken);
        setUser(JSON.parse(savedUser));
        setIsLoggedIn(true);
      }
    
      
    }, []);

    return (
        <AuthContext.Provider value={{isLoggedIn, user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}