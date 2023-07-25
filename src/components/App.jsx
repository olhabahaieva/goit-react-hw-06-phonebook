import React, { useEffect, useState } from 'react';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';

export const App = () => {
  const [contactsState, setContacts] = useState([]);
  const [filterState, setFilter] = useState('');

  const handleFilterClick = (e) => {
    setFilter(e.target.value);
  };

  const handlePhonebookClick = (inputName, inputNumber) => {
    const existingContact = contactsState.find(
      (contacts) => contacts.name.toLowerCase() === inputName.toLowerCase()
    );

    if (existingContact) {
      alert(`${inputName} is already in contacts`);
    } else {
      const newContact = {
        id: inputName + inputNumber,
        name: inputName,
        number: inputNumber,
      };
      setContacts([...contactsState, newContact]);
      localStorage.setItem('PhonebookContacts', JSON.stringify([...contactsState, newContact]));
    }
  };

  const handleContactDelete = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contacts) => contacts.id !== id));
    localStorage.setItem('PhonebookContacts', JSON.stringify(contactsState.filter((contacts) => contacts.id !== id)));
  };

  useEffect(() => {
    const savedContacts = localStorage.getItem('PhonebookContacts');

    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  const filteredContacts = contactsState.filter((contacts) =>
    contacts.name.toLowerCase().includes(filterState.toLowerCase())
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Phonebook createContact={handlePhonebookClick} contacts={contactsState} />
      <Filter onChange={handleFilterClick} />
      <Contacts contacts={filteredContacts} onDeleteContact={handleContactDelete} />
    </div>
  );
};
