import React from "react";
import "./MediaOption.css"

export default function SearchOption({ Icon, text, colour }) {
  return (
    <div className="icon">
      <Icon sx={{ color: colour }}/>
      <h4>{text}</h4>
    </div>
  );
}
