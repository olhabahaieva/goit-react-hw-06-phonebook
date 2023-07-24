import React, { useState } from 'react';
import css from './Phonebook.module.css';
import Section from 'components/Section';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/phonebook-reducer';

function Phonebook() {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const { name, number } = state;
  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === "checkbox" ? checked : value;
    setState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setState({
      name: '',
      number: '',
    });
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
              value={name}
              onChange={onChange}
            />
            <label className={css.label} htmlFor="number">
              Number
            </label>
            <input
              type="tel"
              name="number"
              value={number}
              onChange={onChange}
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
