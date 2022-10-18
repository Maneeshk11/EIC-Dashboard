import React from "react";
// import calendar from "E:\dashboard\React-Admin-Dashboard-public\src";
import Updates from "../Updates/Updates";
import Calendar from "react-calendar";
import "./RightSide.css";
import { useState } from "react";

const RightSide = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="RightSide">
      <div>
        <h3>Past Events</h3>
        <Updates />
      </div>
      <div>
        <h3>Calendar</h3>
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default RightSide;
