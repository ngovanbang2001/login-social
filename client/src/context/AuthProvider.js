import { useEffect, createContext, useState, useContext } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();
  useEffect(() => {
    signInWithSocial();
  }, []);
  const signIn = async (data) => {
    try {
      const res = await Axios({
        method: "POST",
        data: data,
        url: "http://localhost:5000/auth/login",
      });
      setCurrentUser(res.data);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  function signInWithSocial() {
    fetch("http://localhost:5000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((resObject) => {
        setCurrentUser(resObject.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function signUp() {}
  function signOut() {}
  const value = {
    currentUser,
    signIn,
    signUp,
    signOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
