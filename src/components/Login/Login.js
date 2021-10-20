import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleloginForm = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="details-wrapper">
      <div className="container">
        <Form onSubmit={handleloginForm} className="w-75 mx-auto bg-dark p-5">
          <h2 className="text-center text-light mb-5">Login</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-light">Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailChange}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-light">Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordChange}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <Button
            onClick={signInWithGoogle}
            className="d-block mt-3"
            variant="warning"
          >
            Signin With Google
          </Button>
          <NavLink to="/register">
            <span>New User?</span>
          </NavLink>
        </Form>
      </div>
    </div>
  );
};

export default Login;
