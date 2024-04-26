import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res && res.data && res.data.token) {
          const token = res.data.token;
          localStorage.setItem("token", token);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("Found an error");
      });
  };

  return (
    <>
      <h1>Log In Page</h1>
      <p>Log In to get Access</p>
      <p>Notes: Login With Email:eve.holt@reqres.in & Password: cityslicka To get Access</p>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Log In</button>
    </>
  );
}

export default Login;
