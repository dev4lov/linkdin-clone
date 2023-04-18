import React, { useEffect, useState } from "react";
import "./Feed.css";
import Option from "./MediaOption.js";
import Post from "./Post";
import CreateIcon from "@mui/icons-material/Create";
import PhotoIcon from "@mui/icons-material/Photo";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      discription: user.email,
      message: input,
      picUrl: user.photoUrl || "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className="feed">
      <div className="findArea">
        <div className="searchContainer">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit"></button>
          </form>
        </div>

        <div className="searchOption">
          <Option Icon={PhotoIcon} text={"Photo"} colour={"#70B5F9"} />
          <Option Icon={SubscriptionsIcon} text={"Video"} colour={"#E7A33E"} />
          <Option Icon={EventNoteIcon} text={"Event"} colour={"#C0CBCD"} />
          <Option
            Icon={CalendarViewDayIcon}
            text={"Write Article"}
            color={"#7FC15E"}
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, discription, message, picUrl } }) => (
          <Post
            key={id}
            name={name}
            discription={discription}
            message={message}
            picUrl={picUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}
