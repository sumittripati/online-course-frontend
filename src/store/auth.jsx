// import { createContext } from "react";

// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {

//    const storetokenInLS = (serverToken) => {
//        return localStorage.setItem("token", serverToken);
//    }

//     return (
//         <AuthContext.Provider value={{ storetokenInLS }}>
//         {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const AuthContextValue = useContext(AuthContext);
//     if(!AuthContextValue){
//         throw new Error("useAuth must be used within AuthProvider. Wrap a parent component in <AuthProvider> to fix this error.");
//     }
//     return AuthContextValue;
// }






// import { createContext, useContext } from "react";

// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {

//    const storetokenInLS = (serverToken) => {
//        return localStorage.setItem("token", serverToken);
//    }

//     return (
//         <AuthContext.Provider value={{ storetokenInLS }}>
//         {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const AuthContextValue = useContext(AuthContext);
//     if(!AuthContextValue){
//         throw new Error("useAuth must be used within AuthProvider. Wrap a parent component in <AuthProvider> to fix this error.");
//     }
//     return AuthContextValue;
// }





// import { createContext, useContext } from "react";
// import { useState } from "react";

// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {

//     const [ token, setToken ] = useState(localStorage.getItem("token"));

//    const storetokenInLS = (serverToken) => {
//        return localStorage.setItem("token", serverToken);
//    }

//    let isLoggedIn = !!token;

//    // tackling the logout functionality

//     const LogoutUser = () => {
//       setToken("");
//       return localStorage.removeItem("token");
//     }

//     return (
//         <AuthContext.Provider value={{ storetokenInLS  , token, isLoggedIn, LogoutUser }}>
//         {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const AuthContextValue = useContext(AuthContext);
//     if(!AuthContextValue){
//         throw new Error("useAuth must be used within AuthProvider. Wrap a parent component in <AuthProvider> to fix this error.");
//     }
//     return AuthContextValue;
// }







// lec 32 

// import { createContext, useContext } from "react";
// import { useState, useEffect } from "react";

// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {

//     const [ token, setToken ] = useState(localStorage.getItem("token"));
//     const [ user, setUser ] = useState("");

//    const storetokenInLS = (serverToken) => {
//        return localStorage.setItem("token", serverToken);
//    }

//    let isLoggedIn = !!token;

//    // tackling the logout functionality

//     const LogoutUser = () => {
//       setToken("");
//       return localStorage.removeItem("token");
//     }


// // jwt authentication to get the currently logged in user data

// const userAuthentication = async () => {
//     try {
//         const token = localStorage.getItem("token");
//         if(!token){
//             return localStorage.removeItem("token");
//         }

//         const response = await fetch("http://localhost:3000/api/backend/user", {
//             method: "GET",
//             headers: {
//                 "Authorization": `Bearer ${token}`
//             }
//         });

//         const data = await response.json();
//         console.log("data", data.msg);
//         if(data.msg){
//             return localStorage.removeItem("token");
//         }
//         if(response.ok){
//             const data = await response.json();
//             console.log("data", data);
//             setUser(data);
//         }
//     } catch (error) {
//         console.log("Error", error);
//     }
// }

// useEffect(() => {
//     userAuthentication()
// }, []);

//     return (
//         <AuthContext.Provider value={{ storetokenInLS  , token, isLoggedIn, LogoutUser, user }}>
//         {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const AuthContextValue = useContext(AuthContext);
//     if(!AuthContextValue){
//         throw new Error("useAuth must be used within AuthProvider. Wrap a parent component in <AuthProvider> to fix this error.");
//     }
//     return AuthContextValue;
// }





// import { createContext, useContext } from "react";
// import { useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [user, setUser] = useState(null); // Initialize as null
//   const [loading, setLoading] = useState(true); // Add loading state

//   const storetokenInLS = (serverToken) => {
//     localStorage.setItem("token", serverToken);
//   };

//   let isLoggedIn = !!token;

//   const LogoutUser = () => {
//     setToken("");
//     setUser(null); // Clear user on logout
//     localStorage.removeItem("token");
//   };

//   const userAuthentication = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setUser(null);
//         setLoading(false);
//         return localStorage.removeItem("token");
//       }

//       const response = await fetch("http://localhost:3000/api/backend/user", {
//         method: "GET",
//         headers: {
//           "Authorization": `Bearer ${token}`
//         }
//       });

//       const data = await response.json(); // Call response.json() once
//       console.log("API Response in userAuthentication:", data);

//       if (!response.ok) {
//         if (data.msg) {
//           console.log("Error message from API:", data.msg);
//         }
//         setUser(null);
//         return localStorage.removeItem("token");
//       }

//       // Extract the user data from the 'msg' property
//       setUser(data.msg); // Now user will be { username: "kashish", email: "kashish@gmail.com", ... }
//     } catch (error) {
//       console.log("Error in userAuthentication:", error);
//       setUser(null);
//     } finally {
//       setLoading(false); // Set loading to false when done (success or error)
//     }
//   };

//   useEffect(() => {
//     userAuthentication();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ storetokenInLS, token, isLoggedIn, LogoutUser, user, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const AuthContextValue = useContext(AuthContext);
//   if (!AuthContextValue) {
//     throw new Error("useAuth must be used within AuthProvider. Wrap a parent component in <AuthProvider> to fix this error.");
//   }
//   return AuthContextValue;
// };




// lec 36

import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true); // Add loading state
  const [ services, setServices ] = useState([]);

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
          "Authorization": `Bearer ${token}`
        }
      });

      const data = await response.json(); // Call response.json() once
      console.log("API Response in userAuthentication:", data);

      if (!response.ok) {
        if (data.msg) {
          console.log("Error message from API:", data.msg);
        }
        setUser(null);
        return localStorage.removeItem("token");
      }

      // Extract the user data from the 'msg' property
      setUser(data.msg); // Now user will be { username: "kashish", email: "kashish@gmail.com", ... }
    } catch (error) {
      console.log("Error in userAuthentication:", error);
      setUser(null);
    } finally {
      setLoading(false); // Set loading to false when done (success or error)
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
    <AuthContext.Provider value={{ storetokenInLS, token, isLoggedIn, LogoutUser, user, loading, services }}>
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