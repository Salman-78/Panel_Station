import { useEffect, useRef } from "react";
import { useAuth } from "../store/auth";
import { Navigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

export const Logout = () => {
  const { LogoutUser } = useAuth();
  const hasLoggedOut = useRef(false);

  useEffect(() => {
    if (hasLoggedOut.current) return;
    hasLoggedOut.current = true;
    
    LogoutUser();
    toast.success("Logout successful", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }, [LogoutUser]);
  return <Navigate to="/login" />;
};
