import React from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import styled from "styled-components";

const LoginComponentWrapper = styled.div`
  border: 1px solid red;
`;

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { successfulLogin } = this.context;
    let userDetails = {
      email: this.state.email,
      password: this.state.password,
    };
    axios({
      method: "post",
      url: "https://reqres.in/api/login",
      data: userDetails,
    })
      .then((response) =>
        successfulLogin(this.state.email, response.data.token)
      )
      .catch((error) => console.log(error));
  };

  render() {
    let { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>EMAIL:</label>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
        </div>
        <div>
          <label>PASSWORD:</label>
          <input
            type="text"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </form>
    );
  }
}

LoginComponent.contextType = UserContext;
