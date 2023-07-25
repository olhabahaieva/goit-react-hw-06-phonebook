import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/phonebook-reducer';

function Filter() {
  const contacts = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();


  const handleInputChange = () => {
    dispatch(addFilter(contacts));
  };
  

// const filterContacts = ()=> {
//  if(filter){
// contacts.filter(contact=> contact.name.toLowerCase().includes(filter.toLowerCase()))
//  };

//  return contacts;
// }

  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        onChange={handleInputChange}
        className={css.filterInput}
        type="search"
      />
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
