import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

function Filter({ onChange }) {
  const handleInputChange = (e) => {
    const filterValue = e.target.value;
    onChange(filterValue); 
  };

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
