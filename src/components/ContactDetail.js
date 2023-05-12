import React from "react";
import warrior from "../images/usr.jpg";
import { Link, useLocation } from "react-router-dom";
const ContactDetail = (props) => {
  const location = useLocation();
  const { name, email } = location.state.contact;
  console.log(location);
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={warrior} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <Link to={'/'}>
        <div className="ui center aligned container">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ContactDetail;
