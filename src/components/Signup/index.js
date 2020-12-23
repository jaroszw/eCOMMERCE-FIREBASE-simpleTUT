import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../redux/user/user.actions";

import { withRouter } from "react-router-dom";
import "./styles.scss";

import FormInput from "../../components/Form/FormInput";
import Button from "../../components/Form/Button";
import AuthWrapper from "../../components/AuthWrapper";

const mapState = ({ user }) => ({
  SignUpSccess: user.signUpSuccess,
  signUpError: user.signUpError,
});

const Signup = (props) => {
  const { signUpError, SignUpSccess } = useSelector(mapState);
  const dispatch = useDispatch();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (SignUpSccess) {
      resetState();
      props.history.push("/");
    }
  }, [SignUpSccess]);
  useEffect(() => {
    if (Array.isArray(signUpError) && signUpError.length > 0) {
      setErrors(signUpError);
    }
  }, [signUpError]);

  const resetState = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser(displayName, email, password, confirmPassword));
  };

  const configAuthWrapper = { headline: "Sign Up" };

  return (
    <AuthWrapper {...configAuthWrapper}>
      {errors.length > 0 && (
        <ul>
          {errors.map((err, index) => {
            return <li key={index}>{err}</li>;
          })}
        </ul>
      )}

      <div className="formWrap">
        <form onSubmit={handleFormSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full Name"
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">Register</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(Signup);
