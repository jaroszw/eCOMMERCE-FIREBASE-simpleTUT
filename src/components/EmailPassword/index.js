import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetPassword } from "../../redux/user/user.actions";

import "./styles.scss";

import AuthWrapper from "../../components/AuthWrapper";
import FormInput from "../../components/Form/FormInput";
import Button from "../../components/Form/Button";

import { withRouter } from "react-router-dom";

const mapState = ({ user }) => ({
  resetPasswordSucces: user.resetPasswordSucces,
  resetPasswordError: user.resetPasswordError,
});

const EmailPassword = (props) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  const { resetPasswordSucces, resetPasswordError } = useSelector(mapState);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(resetPasswordSucces);
    if (resetPasswordSucces) {
      props.history.push("/login");
    }
  }, [resetPasswordSucces]);

  useEffect(() => {
    if (Array.isArray(resetPassword) && resetPasswordError.length > 0) {
      setErrors(resetPasswordError);
    }
  }, [resetPasswordError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(resetPassword({ email }));
  };

  const configAuthWrapper = {
    headline: "Email Password",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return <li key={index}>{err}</li>;
            })}
          </ul>
        )}
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Reset Password</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(EmailPassword);
