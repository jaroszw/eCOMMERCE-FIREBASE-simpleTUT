import React, { Component } from 'react';
import './styles.scss';

import { auth, SignInWithGoogle } from '../../firebase/utils';
import { Link } from 'react-router-dom';

import Button from '../Form/Button';
import FromInput from '../Form/FormInput';
import AuthWrapper from '../../components/AuthWrapper';

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
    const configAuthWrapper = { headline: 'Log in' };
    return (
      <AuthWrapper {...configAuthWrapper}>
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

            <div className="links">
              <Link to="/recovery">Reset password</Link>
            </div>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default SignIn;
