import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";
import Option from "./MediaOption.js";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import _default from "react-redux/es/components/connect";

const Post = forwardRef(({ name, discription, message, picUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="postContainer">
        <div className="profile">
          <Avatar src={picUrl}>{name[0]} </Avatar>
          <div className="aboutUser">
            <h4>{name}</h4>
            <p>{discription}</p>
          </div>
        </div>
        <p className="message">{message}</p>
        <div className="postOption">
          <Option Icon={ThumbUpOutlinedIcon} text={"Like"} colour={"gray"} />
          <Option Icon={ChatOutlinedIcon} text={"Connect"} colour={"gray"} />
          <Option Icon={ShareOutlinedIcon} text={"Share"} colour={"gray"} />
          <Option Icon={SendOutlinedIcon} text={"Send"} colour={"gray"} />
        </div>
      </div>
    </div>
  );
});

export default Post;
