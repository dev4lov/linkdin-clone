import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import CircleIcon from "@mui/icons-material/Circle";

export default function Widgets() {
  function Widget({ heading, report }) {
    return (
      <div className="news_head">
        <div className="widget_point">
          <CircleIcon />
        </div>
        <div className="news_report">
          <h4>{heading}</h4>
          <p>{report} </p>
        </div>
      </div>
    );
  }
  return (
    <div className="widgets">
      <div className="news">
        <p>Linkedin News</p>
        <InfoIcon />
      </div>
      <Widget
        heading={"React JS"}
        report={"React is 2022 most popular JS framework"}
      />
      <Widget
        heading={"BMW iX1 vs Volvo C40: 2023 twin test review"}
        report={"Small electric SUVs offer a fine mix of efficiency and desirable looks. Is the BMW iX1 a better option than the Volvo C40?"}
      />
      <Widget
        heading={"Officials sound alarm on carmakers dropping AM radio in new vehicles: 'Meant for emergencies"}
        report={"Lawmakers and law enforcement have challenged the move from several carmakers to drop AM radio in new vehicles, citing its vital role during times of emergency."}
      />
      <Widget
        heading={"Is Twitter finally dying?"}
        report={"After an extraordinarily chaotic past few weeks, the slow death of Twitter seems to be speeding up."}
      />
    </div>
  );
}
