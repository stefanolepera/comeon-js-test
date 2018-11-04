import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Main from "./components/Main";
import Logo from "./components/Logo";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Logo />
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
