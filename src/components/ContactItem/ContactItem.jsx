import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contacts/slice';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={css.div}>
      <div className={css.contacts}>
        <span className={css.span}>{name}:</span>
        <span className={css.span}>{number}</span>
      </div>

      <button
        className={css.button}
        type="submit"
        name={name}
        onClick={() => dispatch(removeContacts(id))}
      >
        Delete
      </button>
    </div>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
