import React from "react";
import UserContextProvider from "./UserContext";
import HomePage from "./HomePage";

function App() {
  return (
    <UserContextProvider>
      <HomePage />
    </UserContextProvider>
  );
}

export default App;
