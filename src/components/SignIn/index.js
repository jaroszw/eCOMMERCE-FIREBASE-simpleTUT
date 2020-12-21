import React, { useState } from "react";
import "./styles.scss";

import { auth, SignInWithGoogle } from "../../firebase/utils";
import { Link, withRouter } from "react-router-dom";

import Button from "../Form/Button";
import FromInput from "../Form/FormInput";
import AuthWrapper from "../../components/AuthWrapper";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
      props.history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const configAuthWrapper = { headline: "Log in" };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form action="" onSubmit={handleSubmit}>
          <FromInput
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FromInput
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">Sign In</Button>

          <div className="socialSignin">
            <div className="row">
              <Button isGoogle onClick={SignInWithGoogle}>
                Sign In wit Google
              </Button>
            </div>
          </div>

          <div className="links">
            <Link to="/recovery">Reset password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(SignIn);
