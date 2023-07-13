import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import user from "../../assets/images/user.png";
export default function Header() {
  return (
    <div className="header">
      <Link to="/">
      <div className="logo">MovieApp</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}
