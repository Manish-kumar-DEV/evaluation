import React, { createContext, Component } from "react";

export const UserContext = createContext();

export default class UserContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      token: "",
      authStatus: false,
    };
  }

  successfulLogin = (email, token) => {
    this.setState({
      emailAddress: email,
      token: token,
      authStatus: true,
    });
  };

  render() {
    let { authStatus, emailAddress, token } = this.state;
    let { successfulLogin } = this;
    return (
      <UserContext.Provider
        value={{ successfulLogin, emailAddress, token, authStatus }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
