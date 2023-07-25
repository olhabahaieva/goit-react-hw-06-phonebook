import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

function Filter({ onChange }) {
  const handleInputChange = (e) => {
    const filterValue = e.target.value;
    onChange(filterValue); // Pass the input value back to the onChange prop
  };

  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        onChange={handleInputChange} // Use the handleInputChange function
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
