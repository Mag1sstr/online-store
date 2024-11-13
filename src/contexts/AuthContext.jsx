import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [curt, setCurt] = useState([]);
  console.log(curt);

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }
  useEffect(() => {
    if (token) {
      //   console.log(parseJwt(token).sub);

      axios
        .get(`https://fakestoreapi.com/users/${parseJwt(token).sub}`)
        .then((resp) => {
          console.log(resp.data);
          setUser(resp.data);
        });
    }
  }, [token]);

  function signIn(username, password) {
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: username,
        password: password,
      })
      .then((resp) => {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        setToken(resp.data.token);
        localStorage.setItem("token", resp.data.token);
      });
  }
  return (
    <AuthContext.Provider
      value={{
        user: user,
        signIn: signIn,
        setUser: setUser,
        setCurt: setCurt,
        curt: curt,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
