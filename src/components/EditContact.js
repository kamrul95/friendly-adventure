import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditContact = (props) => {
    const contact = useLocation().state.contact
  const navigate = useNavigate()
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [id, setId] = useState(contact.id);

  const update = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "") {
      alert("All the fields doesn't have data");
      return;
    }
    props.updateHandler({ id, name, email });
    setName("");
    setEmail("");
    setId("");
    navigate('/')
  };

  return (
    <div className="ui main">
      <h2>Update Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="ui button blue">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditContact;
