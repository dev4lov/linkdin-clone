import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("Enter a Full Name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <div className="login">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
          alt=""
        />
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name (required if registering)"
          />
          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            type="text"
            placeholder="Profile pic URL (optional)"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button type="submit" onClick={loginToApp}>
            Sign in
          </button>
        </form>
        <p>
          Not a member? <span onClick={register}>Register now</span>{" "}
        </p>
      </div>
    </>
  );
}
