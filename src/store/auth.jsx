import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null); // Initialize as null
  const [isLoading, setIsLoading] = useState("")
  const [loading, setLoading] = useState(true); // Add loading state
  const [ services, setServices ] = useState([]);
  const authorizationToken = `Bearer ${token}`

  const storetokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken("");
    setUser(null); // Clear user on logout
    localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        setLoading(false);
        return localStorage.removeItem("token");
      }

      const response = await fetch("http://localhost:3000/api/backend/user", {
        method: "GET",
        headers: {
          "Authorization": authorizationToken
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Authenticated User Data:", data);
        
        setUser(data.msg);  // Ensure user is properly set
        setIsLoading(false);
      } else {
        console.log("Failed to fetch user:", response.status);
        setUser(null);
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.log("Error in userAuthentication:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
};


// get services from the backend

const getServices = async () => {
    try {
         const response = await fetch("http://localhost:3000/api/data/service", {
            method: "GET",
         })
         if(response.ok ){
            const data = await response.json();
            console.log("data", data.msg)
            setServices(data.msg);
         }
    } catch (error) {
        console.log("frontend error in getServices:", error);
    }
}

  useEffect(() => {
    getServices() 
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ storetokenInLS, token, isLoggedIn, LogoutUser, user, loading, services, authorizationToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth must be used within AuthProvider. Wrap a parent component in <AuthProvider> to fix this error.");
  }
  return AuthContextValue;
};