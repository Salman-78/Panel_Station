/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(); //1st step context

const AuthProvider = ({ children }) => { //2nd step provider
  // const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [token, setToken]=useState(localStorage.getItem("token"));
  const [user, setUser]=useState("");
  const [isLoading, setIsLoading]=useState(true)
  const [services,setServices]=useState("");
  const authorizationToken=`Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  const isLoggedIn= !!token; //token hai to true token nhi hai to false
  // console.log("isLoggedIn :", isLoggedIn);
  

  const LogoutUser=()=>{
    setToken("");
    return localStorage.removeItem("token");
  }

  //jwt authentication to get current user data

  const URL ="http://localhost:5000/user";

  const userAuthentication= async()=>{
    try {
      setIsLoading(true);
      const response=await fetch(URL, {
        method:"GET",
        headers:{
          Authorization: authorizationToken,
        },
      })
      if(response.ok){
        const data= await response.json();
        // console.log(data.userData);
        setUser(data.userData);
        setIsLoading(false)
      }
      else{
        setIsLoading(false)
        console.error("Error while fetching user data")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getServices= async ()=>{
    try {
      const response = await fetch("http://localhost:5000/service", {
        method:"GET",
      })
      if(response.ok){
        const data=await response.json();
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`services frontend error: ${error}`);
      
    }
  }

  useEffect(()=>{
    getServices();
    userAuthentication();
  }, [])

  return (
    <AuthContext.Provider value={{isLoggedIn, LogoutUser, storeTokenInLS, user, services, authorizationToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () =>{ //3rd step consumer
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
}

export { AuthProvider, useAuth };