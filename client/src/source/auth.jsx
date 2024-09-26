import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [services,setServices] = useState("");

  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  //   this is the get the value in either true or false in the original state of token
  let isLoggedIn = !!token;
  console.log("token", token);
  console.log("isLoggedin ", isLoggedIn);

  //   to check whether is loggedIn or not
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

const getServices = async() =>{
  try {
    const response = await fetch("http://localhost:5000/api/data/service",{
      method:"GET",
    });
    if(response.ok)
    {
      const data = await response.json();
      console.log(data.msg);
      setServices(data.msg);
    }

  } catch (error) {
    console.log(`error from services `);
  }
}


useEffect(()=>
{
  getServices();
},[]);

  

  return (
    <AuthContext.Provider value={{ isLoggedIn , storeTokenInLS, LogoutUser, services }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};