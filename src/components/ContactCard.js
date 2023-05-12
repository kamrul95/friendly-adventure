import React from "react";
import user from "../images/user.avif";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, removeHandler }) => {
  const { name, email, id } = contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <Link to={`/contact/${id}`} state={{ contact }}>
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
      </Link>
      <i
        className="trash alternate outline icon"
        style={{ color: "red" }}
        onClick={() => removeHandler(id)}
      ></i>
      <Link to={`/contact/${id}/edit`} state={{contact}}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginRight: "10px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
