import React from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((response) => this.setState({ data: [...response.data] }))
      .catch((error) => console.log(error));
  };

  render() {
    let { emailAddress, token } = this.context;
    return (
      <div>
        <div>
          <h1>{emailAddress}</h1>
          <h3>{token}</h3>
        </div>
        {this.state.data.length > 0 &&
          this.state.data.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <div>{item.body}</div>
              </div>
            );
          })}
      </div>
    );
  }
}

Dashboard.contextType = UserContext;
