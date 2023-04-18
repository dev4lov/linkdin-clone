import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

export default function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="recentItem">
      <span className="hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_Top">
        <img src="https://wallpapercave.com/dwp1x/wp2766031.jpg" alt="" />
        <Avatar className="dp" src={user.photoUrl}>
          {user.displayName[0]}
        </Avatar>

        <div className="about">
          <h3>{user.displayName}</h3>
          <h4>{user.email}</h4>
        </div>

        <div className="stats">
          <div className="stat">
            <p>Who viewed you</p>
            <p className="statNum">132</p>
          </div>
          <div className="stat">
            <p>Views om post</p>
            <p className="statNum">83</p>
          </div>
        </div>
      </div>

      <div className="sidebar_Bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}
