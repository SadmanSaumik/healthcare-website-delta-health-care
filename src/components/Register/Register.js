import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useFirebase from "../../Hook/useFirebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";

const Register = () => {
  const { signInWithGoogle } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlepasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRegisterForm = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      <div className="details-wrapper">
        <div className="container">
          <Form
            onSubmit={handleRegisterForm}
            className="w-75 mx-auto bg-dark p-5"
          >
            <h2 className="text-center text-light mb-5">Register</h2>
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
                onBlur={handlepasswordChange}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
            <Button
              onClick={signInWithGoogle}
              className="d-block mt-3"
              variant="warning"
            >
              Signin With Google
            </Button>
            <NavLink to="/login">
              <span>Already Have An Account?</span>
            </NavLink>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
