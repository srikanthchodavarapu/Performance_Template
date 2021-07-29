import React from "react";
import DashboardContainer from "./Components/DashboardContainer"
import SiteHeader from './Components/SiteHeader'
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <SiteHeader />
        <DashboardContainer />
      </header>
    </div>
  );
}

export default App;
