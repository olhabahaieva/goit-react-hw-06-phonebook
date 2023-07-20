import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { addFilter } from 'redux/filter/filter-reducer';
import { useDispatch, useSelector } from 'react-redux';

function Filter () {
  const filter = useSelector(state=> state.filter);
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
          value={filter}
        />
      </div>
    );
  }

Filter.propTypes = {
  onChange: PropTypes.func
}
export default Filter;


// const Filter = ({ onChange }) => {

//   return (
//     <div className={css.filter}>
//       <label className={css.label} htmlFor="search">
//         Find contacts by name
//       </label>
//       <input
//         onChange={onChange}
//         className={css.filterInput}
//         type="search"
//       />
//     </div>
//   );
// }

// Filter.propTypes = {
// onChange: PropTypes.func
// }
// export default Filter;
