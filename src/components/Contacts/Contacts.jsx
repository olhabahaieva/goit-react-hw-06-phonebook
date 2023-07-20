import React from 'react';
import css from './Contacts.module.css';
import Section from 'components/Section';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts-reducer';

const Contacts = () => {
 const contacts = useSelector(state=> state.contacts.contacts);
 const dispatch = useDispatch();

  const handleDeleteClick = id => {
   dispatch(deleteContact(id))
  };

  if (contacts.length === 0) {
    return null;
  }

  // const handleDeleteContactFromLocalStorage = id => {
  //   const savedContacts = localStorage.getItem('PhonebookContacts');
  //   if (savedContacts) {
  //     const parsedContacts = JSON.parse(savedContacts);
  //     const updatedContacts = parsedContacts.filter(
  //       contact => contact.id !== id
  //     );
  //     setContacts(
  //       localStorage.setItem(
  //         'PhonebookContacts',
  //         JSON.stringify(updatedContacts)
  //       )
  //     );
  //   }
  // };



  return (
    <Section title="Contacts">
      <ul className={css.contacts}>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.number}
            <button
              onClick={() => {
                handleDeleteClick(contact.id);
              }}
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
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func
};

export default Contacts;
