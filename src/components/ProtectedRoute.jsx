import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../models/firebase";
import { useEffect, useState } from "react";

const ProtectedRoute = () => {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const update = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      update();
    };
  }, []);

  return user === null ? <Navigate to="/auth" /> : <Outlet />;
};

export default ProtectedRoute;
