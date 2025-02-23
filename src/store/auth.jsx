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





import { createContext, useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [ token, setToken ] = useState(localStorage.getItem("token"));

   const storetokenInLS = (serverToken) => {
       return localStorage.setItem("token", serverToken);
   }

   let isLoggedIn = !!token;

   // tackling the logout functionality

    const LogoutUser = () => {
      setToken("");
      return localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ storetokenInLS  , token, isLoggedIn, LogoutUser }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const AuthContextValue = useContext(AuthContext);
    if(!AuthContextValue){
        throw new Error("useAuth must be used within AuthProvider. Wrap a parent component in <AuthProvider> to fix this error.");
    }
    return AuthContextValue;
}
