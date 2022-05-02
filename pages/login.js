import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";
import Router from "next/router";
const server = "https://www.matchchemical.tk:4009/v1";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = async () => {
    await axios
      .post(`${server}/login`, { email: email, password: pass })
      .then(async (res) => {
        console.log(res.data);
        await Cookies.set("_t_", res.data.user.token);
        await Cookies.set("_id_", res.data.user.user_id);
        await Router.push("/boards");
      });
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "20px" }}>
      <form>
        <div style={{ paddingTop: "10px" }}>
          <label>EMAIL:</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>

        <div style={{ paddingTop: "10px" }}>
          <label>PASSWORD:</label>
          <input
            onChange={(e) => {
              setPass(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <button
            type="submit"
            onClick={(e) => {
              login(e.preventDefault());
            }}
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
