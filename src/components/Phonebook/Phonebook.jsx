import React from 'react';
import css from './Phonebook.module.css';
import Section from 'components/Section';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebook-reducer';

function Phonebook () {
  // const [inputValue, setInputValue] = useState('');
  // const [inputNumber, setInputNumber] = useState('');

  const contact = useSelector(state=> state.contact.contact)
  const dispatch = useDispatch()

  const onChange = (e) => {
    dispatch(e.target.value);
  };

  const onNumberChange = (e) => {
    dispatch(addContact(e.target.value));
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    dispatch(addContact(e.target.value));
    // createContact(inputValue, inputNumber);
    // setInputValue('');
    // setInputNumber('');
  };

  // if (contacts && contacts.length > 0) {
  //   localStorage.setItem('PhonebookContacts', JSON.stringify(contacts));
  // }

  // useEffect(() => {
  //   if (contacts && contacts.length > 0) {
  //     localStorage.setItem('PhonebookContacts', JSON.stringify(contacts));
  //   }
  // }, [contacts]);

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
              value={contact}
              onChange={onChange}
            />
            <label className={css.label} htmlFor="number">
              Number
            </label>
            <input
              type="tel"
              name="number"
              value={contact}
              onChange={onNumberChange}
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
};

Phonebook.propTypes = {
  contacts: PropTypes.array,
  createContact: PropTypes.func.isRequired,
};

export default Phonebook;

// const Phonebook = ({ contacts, createContact }) => {
//   const [inputValue, setInputValue] = useState('');
//   const [inputNumber, setInputNumber] = useState('');

//   const onChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const onNumberChange = (e) => {
//     setInputNumber(e.target.value);
//   };

//   const handleButtonClick = (e) => {
//     e.preventDefault();

//     createContact(inputValue, inputNumber);
//     setInputValue('');
//     setInputNumber('');
//   };

//   useEffect(() => {
//     if (contacts && contacts.length > 0) {
//       localStorage.setItem('PhonebookContacts', JSON.stringify(contacts));
//     }
//   }, [contacts]);

//   return (
//     <>
//       <Section title="Phonebook">
//         <div className={css.phonebook}>
//           <form className={css.form} action="">
//             <label className={css.label} htmlFor="name">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={inputValue}
//               onChange={onChange}
//             />
//             <label className={css.label} htmlFor="number">
//               Number
//             </label>
//             <input
//               type="tel"
//               name="number"
//               value={inputNumber}
//               onChange={onNumberChange}
//             />

//             <button
//               onClick={handleButtonClick}
//               className={css.button}
//               name="submit"
//               type="submit"
//             >
//               Add contact
//             </button>
//           </form>
//         </div>
//       </Section>
//     </>
//   );
// };

// Phonebook.propTypes = {
//   contacts: PropTypes.array,
//   createContact: PropTypes.func.isRequired,
// };

// export default Phonebook;
