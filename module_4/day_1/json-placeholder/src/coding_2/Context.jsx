import React, { Component, createContext } from "react";

export const PageContext = createContext();

export default class PageContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterByRemote: false,
      sortBy: "descSalary",
      data: [],
    };
  }

  //payload is an object containing the details of all the job listed
  addToGlobalData = (payload) => {
    let { data } = this.state;
    this.setState({
      data: [...data, payload],
    });
  };

  updateFilterSortData = ({ sort, filter }) => {
    this.setState({
      filterByRemote: filter,
      sortBy: sort,
    });
  };

  render() {
    let { data, filterByRemote, sortBy } = this.state;
    let { addToGlobalData, updateFilterSortData } = this;
    return (
      <PageContext.Provider
        value={{
          addToGlobalData,
          updateFilterSortData,
          data,
          filterByRemote,
          sortBy,
        }}
      >
        {this.props.children}
      </PageContext.Provider>
    );
  }
}
