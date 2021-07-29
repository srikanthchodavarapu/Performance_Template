import React from "react";
import moment from "moment";

const DashboardHeader = () => {
  const currentDate = moment().format("l LT");
  return (
    <div className='dashboard-header'>
      <h2>Performance Leaderboard</h2>
      <p>Last updated {currentDate}</p>
    </div>
  );
};

export default DashboardHeader;
