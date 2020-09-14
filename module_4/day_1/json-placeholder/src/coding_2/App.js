//Job Listing Assignment
import React from "react";
import PageContextProvider from "./Context";
import AddNewJobForm from "./AddNewJobForm";
import styled from "styled-components";
import FilterSortComponent from "./FilterSortComponent";
import Card from "./Card";

const FormWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

function App() {
  return (
    <PageContextProvider>
      <div style={{ display: "flex" }}>
        <FormWrapper>
          <AddNewJobForm />
        </FormWrapper>
        <div style={{ flexDirection: "column", width: "100%" }}>
          <FilterSortComponent />
          <Card />
        </div>
      </div>
    </PageContextProvider>
  );
}
export default App;
