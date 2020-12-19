import React, { Component } from 'react';
import './styles.scss';

import { auth, handleUserProfile } from '../../firebase/utils';

import FormInput from '../../components/Form/FormInput';
import Button from '../../components/Form/Button';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: [],
};

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      ...initialState,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(e);

    const {
      displayName,
      email,
      password,
      confirmPassword,
      errors,
    } = this.state;

    if (password !== confirmPassword) {
      const err = ["Password don't Match"];
      this.setState({
        errors: err,
      });
      return;
    }

    try {
      const { userAuth } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await handleUserProfile(userAuth, { displayName });

      this.setState({
        ...initialState,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      errors,
    } = this.state;

    return (
      <div className="signup">
        <div className="wrap">
          <h2>SignUp</h2>
          {errors.length > 0 && (
            <ul>
              {errors.map((err, index) => {
                return <li key={index}>{err}</li>;
              })}
            </ul>
          )}
        </div>

        <div className="formWrap">
          <form onSubmit={this.handleFormSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Full Name"
              onChange={this.handleChange}
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
            <Button type="submit">Register</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
