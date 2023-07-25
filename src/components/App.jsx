import React, { useState } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';

export const App = () => {
  const [contactsState, setContacts] = useState([]);
  const [filterState, setFilter] = useState('');

  const handleFilterClick = e => {
    setFilter(e.target.value);
  };

  const handlePhonebookClick = (inputName, inputNumber) => {
    const existingContact = contactsState.find(
      contacts => contacts.name.toLowerCase() === inputName.toLowerCase()
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
      // localStorage.setItem('PhonebookContacts', JSON.stringify([...contactsState, newContact]));
    }
  };

  const handleContactDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contacts => contacts.id !== id)
    );
  };

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
      <Phonebook
        createContact={handlePhonebookClick}
        contacts={contactsState}
      />
      <Filter filter={filterState} onChange={handleFilterClick} />
      <Contacts contacts={filterState} onDeleteContact={handleContactDelete} />
    </div>
  );
};
