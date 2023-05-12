import React, { useRef, useState } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef("");

  const handleSearchTerm = () => {
    const search = searchRef.current.value;
    setSearchTerm(search);
  };

  const renderContactList = props.contacts
    .filter((c) => {
      return Object.values(c)
        .join(" ")
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
    })
    .map((contact) => {
      return (
        <ContactCard
          removeHandler={props.removeHandler}
          contact={contact}
          key={contact.id}
        />
      );
    });
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input serach-input">
          <input
            ref={searchRef}
            type="text"
            className="prompt"
            placeholder="Search contact"
            value={searchTerm}
            onChange={handleSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length ? (
          renderContactList
        ) : (
          <h4 className="ui warning message">
            <div className="header">No contacts available.</div>
          </h4>
        )}
      </div>
    </div>
  );
};

export default ContactList;
