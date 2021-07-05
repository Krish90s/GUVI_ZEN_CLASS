import React from "react";
import TopBar from "./components/navbar";
import CustomerPage from "./pages/customerspage";

function App() {
  return (
    <React.Fragment>
      <TopBar />
      <main className="container-fluid bg-light">
        <CustomerPage />
      </main>
    </React.Fragment>
  );
}

export default App;
