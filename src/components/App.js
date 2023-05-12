import "./App.css";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import api from "../api/contacts";
import EditContact from "./EditContact";
import ContactDetail from "./ContactDetail";

function App() {
  const [contacts, setContacts] = useState([]);

  const addHandler = async (contact) => {
    const response = await api.post("/contacts", contact);

    setContacts([...contacts, response.data]);
  };

  const updateHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    setContacts(
      contacts.map((uContact) => {
        return uContact.id !== response.data.id ? uContact : contact;
      })
    );
  };

  const fetchContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const removeHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(filteredContacts);
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const contacts = await fetchContacts();
      if (contacts) setContacts(contacts);
    };

    getAllContacts();
  }, []);

  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList contacts={contacts} removeHandler={removeHandler} />
            }
          />
          <Route path="/add" element={<AddContact addHandler={addHandler} />} />
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route
            path="/contact/:id/edit"
            element={<EditContact updateHandler={updateHandler} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
