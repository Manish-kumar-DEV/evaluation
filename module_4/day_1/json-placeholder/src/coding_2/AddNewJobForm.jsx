import React, { Component } from "react";
import { PageContext } from "./Context";
import styled from "styled-components";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

const FormWrapper = styled.div`
  * {
    background-color: white;
  }
  background-color: white;
  border-right: 1px solid white;
  width: 345px;
  padding: 0px 10px;
  position: relative;
  label {
    display: inline-block;
    margin: 8px auto;
    width: 150px;
  }
  input {
    border: 0px;
    outline: none;
    border-bottom: 2px solid rgb(112, 59, 218);
  }
`;

const CreatedDate = styled.div`
  margin: 10px 0px;
  color: grey;
  font-size: 14px;
`;

const AddButton = styled.button`
  border: 1px solid blue;
  border-radius: 4px;
  outline: none;
  background-color: blue;
  color: white;
  margin-top: 5px;
  padding: 4px 10px;
  position: absolute;
  right: 30px;

  :hover {
    transition: 0.3s;
    box-shadow: 0px 2px 5px #0000d9;
  }
`;

export default class AddNewJobForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      salary: "",
      companyName: "",
      location: "Bangalore",
      remote: false,
      logo: "",
      dateCreated: this.getDate(),
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let {
      title,
      salary,
      companyName,
      location,
      remote,
      logo,
      dateCreated,
    } = this.state;
    let { addToGlobalData } = this.context;
    let payload = {
      id: uuidv4(),
      title,
      salary,
      companyName,
      location,
      remote,
      logo,
      dateCreated,
    };
    addToGlobalData(payload);
  };

  handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    this.setState({
      [name]: val,
    });
  };

  getDate = () => {
    let date = new Date();
    return date;
  };

  render() {
    let {
      title,
      salary,
      companyName,
      location,
      remote,
      logo,
      dateCreated,
    } = this.state;
    return (
      <FormWrapper>
        <h2 style={{ fontFamily: "Poppins", backgroundColor: "white" }}>
          Add New Job
        </h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input
              name="title"
              type="text"
              onChange={this.handleChange}
              value={title}
              required
            />
          </div>
          <div>
            <label>Salary</label>
            <input
              name="salary"
              type="text"
              onChange={this.handleChange}
              value={salary}
              required
            />
          </div>
          <div>
            <label>Company Name</label>
            <input
              name="companyName"
              type="text"
              onChange={this.handleChange}
              value={companyName}
              required
            />
          </div>
          <div>
            <label>Location</label>
            <select
              name="location"
              value={location}
              onChange={this.handleChange}
            >
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>
          <div>
            <label>Remote</label>
            <input
              name="remote"
              type="checkbox"
              onChange={this.handleChange}
              checked={remote}
            />
          </div>
          <div>
            <label>Company Logo</label>
            <input
              name="logo"
              type="text"
              placeholder="Specify Image URL"
              onChange={this.handleChange}
              value={logo}
              required
            />
          </div>
          <CreatedDate>
            <label>Created Date</label>
            <input
              name="dateCreated"
              type="text"
              onChange={this.handleChange}
              value={dateCreated}
            />
          </CreatedDate>
          <AddButton onClick={this.handleSubmit}>ADD JOB</AddButton>
        </form>
      </FormWrapper>
    );
  }
}

AddNewJobForm.contextType = PageContext;
