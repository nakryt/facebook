import React from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import Login from "./components/Login/Login";

function App() {
  const user = null;

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
}

export default App;
