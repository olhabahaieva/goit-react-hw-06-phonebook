import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/phonebook-reducer';

function Filter() {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const onChange = (event) => {
    const filterValue = event.target.value;
    dispatch(addFilter(filterValue));
  };

  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        onChange={onChange}
        className={css.filterInput}
        type="search"
        value={filter || ''}
      />
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;