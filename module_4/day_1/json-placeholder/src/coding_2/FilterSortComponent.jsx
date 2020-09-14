import React from "react";
import { PageContext } from "./Context";
import styled from "styled-components";

const FilterSortWrapper = styled.div`
  border: 3px solid rgb(100, 40, 213);
  background-color: white;
  * {
    background-color: white;
  }
  margin: 5px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  height: fit-content;
  position: relative;

  form {
    display: flex;
  }

  > form .individualDiv {
    margin: 0px 25px;
  }
`;

const Heading = styled.h3`
  font-family: "Poppins";
`;

const ApplyButton = styled.button`
  border: 1px solid blue;
  border-radius: 4px;
  background-color: blue;
  color: white;
  padding: 4px 10px;
  position: absolute;
  right: 30px;
  outline: none;

  :hover {
    transition: 0.3s;
    box-shadow: 0px 2px 5px #0000d9;
  }
`;

export default class FilterSortComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "descSalary",
      filterByRemote: "default",
    };
  }

  handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    this.setState({
      [name]: val,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { updateFilterSortData } = this.context;
    updateFilterSortData({
      sort: this.state.sortBy,
      filter: this.state.filterByRemote,
    });
  };

  render() {
    let { sortBy, filterByRemote } = this.state;
    return (
      <FilterSortWrapper>
        <Heading>Filter and Sort</Heading>
        <form onSubmit={this.handleSubmit}>
          <div className="individualDiv">
            <label>Sort By </label>
            <select name="sortBy" value={sortBy} onChange={this.handleChange}>
              <option value="descSalary">Descending Salary</option>
              <option value="ascDate">Ascending Created Date</option>
              <option value="descDate">Descending Created Date</option>
            </select>
          </div>
          <div className="individualDiv">
            <label>Filter By Remote Jobs </label>
            <select
              name="filterByRemote"
              value={filterByRemote}
              onChange={this.handleChange}
            >
              <option value="default">--</option>
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </select>
          </div>
          <ApplyButton onClick={this.handleSubmit}>APPLY</ApplyButton>
        </form>
      </FilterSortWrapper>
    );
  }
}

FilterSortComponent.contextType = PageContext;
