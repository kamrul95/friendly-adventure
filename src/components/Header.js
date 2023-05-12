import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui  center container">
        <Link to="/"><h1>Contact Manager</h1></Link>
      </div>
    </div>
  );
};

export default Header;
