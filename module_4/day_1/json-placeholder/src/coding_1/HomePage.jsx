import React from "react";
import { UserContext } from "./UserContext";
import styled from "styled-components";
import LoginComponent from "./LoginComponent";
import Dashboard from "./Dashboard";

const HomepageWrapper = styled.div`
  border: 1px solid black;
  margin: 20px;
  padding: 40px 0px;
  text-align: center;
`;

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      register: false,
    };
  }

  loginPage = () => {
    this.setState({
      login: true,
      register: false,
    });
  };

  registerPage = () => {
    this.setState({
      login: false,
      register: true,
    });
  };

  render() {
    let { authStatus } = this.context;
    if (authStatus === false) {
      return (
        <HomepageWrapper>
          <button onClick={() => this.loginPage()}>LOGIN</button>
          <button onClick={() => this.registerPage()}>REGISTER</button>
          <LoginComponent />
        </HomepageWrapper>
      );
    } else {
      return <Dashboard />;
    }
  }
}

HomePage.contextType = UserContext;
