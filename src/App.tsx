import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./app.css";
import { Main } from "./pages/Main";

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ backgroundColor: "#E9E9E9" }}>
        <header className="App-header"></header>
        <nav className="navbar navbar-light">
          <div className="container">
            <img src="assets/modyo.png" alt="" height="100" />
          </div>
        </nav>
        <Main />
      </div>
    </Provider>
  );
}

export default App;
