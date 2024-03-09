import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setFilter } from 'redux/contacts/slice';
import { getFilter } from 'redux/contacts/selectors';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <>
      <h2 className={css.headline}>Search</h2>
      <div className={css.container}>
        <label className={css.label}>
          Search by name
          <input
            className={css.input}
            type="text"
            name="filter"
            value={filter}
            placeholder="Enter the Name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={evt => dispatch(setFilter(evt.target.value))}
            required
          />
        </label>
      </div>
    </>
  );
}
