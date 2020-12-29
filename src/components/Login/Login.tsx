import React from "react";
import "./Login.scss";
import { ReactComponent as LoginIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as LoginText } from "../../assets/icons/facebook-text.svg";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";

const Login = () => {
  const signIn = async () => {
    const data = await auth.signInWithPopup(provider);
    console.log(data);
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
