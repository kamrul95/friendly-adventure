import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4} from "uuid";

const AddContact = ({ addHandler }) => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "") {
      alert("All the fields doesn't have data");
      return;
    }
    addHandler({ id: uuidv4(), name, email });
    setName("");
    setEmail("");
    navigate('/')
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
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
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
