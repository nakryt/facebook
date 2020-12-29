import React from "react";
import "./App.scss";

import { StateProvider, useStateValue } from "./context/StateProvider";
import reducer, { initialState } from "./context/reducer";

import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import Login from "./components/Login/Login";

const App = () => {
  const {
    state: { user },
  } = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <Body />
        </>
      )}
    </div>
  );
};

const AppContainer = () => (
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>
);

export default AppContainer;
