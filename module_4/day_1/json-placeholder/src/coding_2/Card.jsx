import React from "react";
import { PageContext } from "./Context";
import styled from "styled-components";

const Heading = styled.div`
  display: flex;
  padding: 9px 18px;
  justify-content: space-between;
  div {
    width: 180px;
    font-family: "Poppins";
    font-weight: 600;
  }
`;

const CardWrapper = styled.div`
  border-radius: 6px;
  background-color: white;
  * {
    background-color: white;
  }
  font-size: 18px;
  padding: 9px;
  margin: 16px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    transition: 0.2s;
    box-shadow: 5px 10px 18px #edebeb;
  }

  > div {
    width: 180px;
  }

  .logoDiv {
    height: 100px;
    border: ;
  }

  .logo {
    max-width: 100%;
    max-height: 100%;
    border-radius: 80px;
  }

  .logo:hover {
    transition: 0.2s;
    box-shadow: 6px 6px 12px #9e9e9e, -6px -6px 12px #ffffff;
  }

  .remoteDiv {
    display: flex;
    flex-direction: row;
    position: relative;
  }
`;

const RemoteColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.value === "isTrue" ? "green" : "red")};
  border-radius: 50%;
  position: absolute;
  right: 10px;
`;

export default function Card() {
  return (
    <div className="mainBody">
      <Heading>
        <div>Company Logo</div>
        <div>Company Name</div>
        <div>Job Title</div>
        <div>Salary</div>
        <div>Location</div>
        <div>Remote</div>
      </Heading>
      <PageContext.Consumer>
        {({ data, filterByRemote, sortBy }) => {
          return data
            .filter((item) => {
              if (filterByRemote === "default" || filterByRemote === "no") {
                return item;
              } else if (filterByRemote === "yes") {
                return item.remote === true;
              }
              return item;
            })
            .sort((a, b) => {
              if (sortBy === "descSalary") {
                return b.salary - a.salary;
              } else if (sortBy === "ascDate") {
                let compare1 = Date.parse(a.dateCreated);
                let compare2 = Date.parse(b.dateCreated);
                if (compare1 > compare2) {
                  return 1;
                }
              } else if (sortBy === "descDate") {
                let compare1 = Date.parse(a.dateCreated);
                let compare2 = Date.parse(b.dateCreated);
                if (compare1 > compare2) {
                  return -1;
                }
              }
            })
            .map((items) => (
              <CardWrapper key={items.id}>
                <div className="logoDiv">
                  <img className="logo" src={items.logo} alt="company logo" />
                </div>
                <div>{items.companyName}</div>
                <div>{items.title}</div>
                <div>{items.salary}</div>
                <div>{items.location}</div>
                {items.remote ? (
                  <div className="remoteDiv">
                    <div>Available</div>
                    <RemoteColor value="isTrue"></RemoteColor>
                  </div>
                ) : (
                  <div className="remoteDiv">
                    <div>Not Available</div>
                    <RemoteColor value="isFalse"></RemoteColor>
                  </div>
                )}
              </CardWrapper>
            ));
        }}
      </PageContext.Consumer>
    </div>
  );
}
