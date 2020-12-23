import userTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  signInSuccess: false,
  signUpSuccess: false,
  singUpError: [],
  resetPasswordSucces: false,
  resetPasswordError: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInSuccess: action.payload,
      };

    case userTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: true,
      };

    case userTypes.SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: action.payload,
      };

    case userTypes.RESSET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSucces: action.payload,
      };

    case userTypes.RESSET_PASSWORD_ERROR:
      return {
        ...state,
        resetPasswordError: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
