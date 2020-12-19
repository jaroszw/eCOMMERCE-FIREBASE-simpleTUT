import React, { Component } from 'react';
import './styles.scss';

import {
  auth,
  SignInWithGoogle,
  handleUserProfile,
} from '../../firebase/utils';

import Button from '../Form/Button';
import FromInput from '../Form/FormInput';

const initialState = {
  email: '',
  password: '',
};

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      ...initialState,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="signin">
        <div className="wrap">
          <h2>LogIn</h2>
          <div className="formWrap">
            <form action="" onSubmit={this.handleSubmit}>
              <FromInput
                type="email"
                name="email"
                value={email}
                placeholder="email"
                onChange={this.handleChange}
              />
              <FromInput
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={this.handleChange}
              />

              <Button type="submit">Sign In</Button>

              <div className="socialSignin">
                <div className="row">
                  <Button isGoogle onClick={SignInWithGoogle}>
                    Sign In wit Google
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
