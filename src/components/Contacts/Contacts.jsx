import React from 'react';
import css from './Contacts.module.css';
import Section from 'components/Section';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, deleteContact } from 'redux/phonebook-reducer';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleDeleteClick = id => {
    dispatch(deleteContact(id));
  };

  const handleInputChange = () => {
    dispatch(addFilter(contacts));
  };

  if (!Array.isArray(contacts) || contacts.length === 0) {
    return (
      <Section title="Contacts">
        <p>No contacts to display.</p>
      </Section>
    );
  }

  return (
    <Section title="Contacts">

<div className={css.filter}>
      <label className={css.label} htmlFor="search">
      </label>
      <input
        onChange={handleInputChange}
        className={css.filterInput}
        type="search"
      />
    </div>


      <ul className={css.contacts}>
        {contacts.map(contact => (
          <li key={contact.id || ''}>
            {contact.name} : {contact.number}
            <button
              onClick={() => handleDeleteClick(contact.id)}
              className={css.delete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
};

export default Contacts;
