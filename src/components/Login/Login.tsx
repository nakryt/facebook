import React from "react";
import "./Login.scss";
import { Button } from "@material-ui/core";

import { ReactComponent as LoginIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as LoginText } from "../../assets/icons/facebook-text.svg";

import { auth, provider } from "../../firebase";
import { useStateValue } from "../../context/StateProvider";
import { setUser } from "../../context/reducer";

const Login = () => {
  const { dispatch } = useStateValue();
  const signIn = async () => {
    const data = await auth.signInWithPopup(provider);
    dispatch(setUser(data.user));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <LoginIcon className="logo__img" />
        <LoginText className="logo__text" />
      </div>
      <Button onClick={signIn} variant="contained" color="primary">
        Sign In
      </Button>
    </div>
  );
};

export default Login;
