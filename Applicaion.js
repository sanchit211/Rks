import React, { useState } from "react";
import { Link } from "react-router-dom";

const Applicaion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (regEx.test(email)) {
      setMessage("** Email Id is valid.");

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        email: "info@optium.com",
        password: "Optium@112233",
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch(
        "https://5e432170-74e0-4b27-b868-e7f3adcc4e5f.mock.pstmn.io/login",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          alert("Success");
        })
        .catch((error) => alert("fail", error));
  

    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email Id is not valid.");
    } else {
      setMessage("");
    }

    e.preventDefault();

  };
  return (
    <>
      <div className="split left">
        <div className="centered">
          <img
            src="https://source.unsplash.com/random/768*768"
            alt="Avatar woman"
          />
        </div>
      </div>

      <div className="split right">
        <div className="Dash_link">
          <Link to="/Dashboard" style={{ textDecoration: "none" }}>
            Dashboard
          </Link>
        </div>

        <div className="centered">
          <h2>Login Page </h2>
          <br />

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              label="Email Address"
              className="email_input"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="Password"
              value={password}
              id="password"
              name="password"
              label="Password"
              className="pass_input"
              required
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
            <button type="submit" value="Login">
              Check
            </button>
            <br />
            {message}
          </form>
        </div>
      </div>
    </>
  );
};

export default Applicaion;
