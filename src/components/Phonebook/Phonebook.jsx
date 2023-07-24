import React from 'react';
import css from './Phonebook.module.css';
import Section from 'components/Section';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebook-reducer';

function Phonebook() {
  const contact = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch({ type: 'SET_NAME', payload: e.target.value });
  };

  const handleNumberChange = (e) => {
    dispatch({ type: 'SET_NUMBER', payload: e.target.value });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    dispatch(addContact(contact));
  };

  return (
    <>
      <Section title="Phonebook">
        <div className={css.phonebook}>
          <form className={css.form} action="">
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={handleNameChange}
            />
            <label className={css.label} htmlFor="number">
              Number
            </label>
            <input
              type="tel"
              name="number"
              value={contact.number}
              onChange={handleNumberChange}
            />

            <button
              onClick={handleButtonClick}
              className={css.button}
              name="submit"
              type="submit"
            >
              Add contact
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}

Phonebook.propTypes = {
  contacts: PropTypes.array,
  createContact: PropTypes.func.isRequired,
};

export default Phonebook;
