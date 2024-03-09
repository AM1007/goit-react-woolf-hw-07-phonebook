import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const contactsFiltered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (contactsFiltered) {
    return (
      <div>
        {contactsFiltered.length > 0 ? (
          <div>
            <h2 className={css.headline}>Contacts</h2>
            <div className={css.container}>
              <ul className={css.ul}>
                {contactsFiltered.map(({ id, name, number }) => (
                  <li className={css.li} key={id}>
                    <ContactItem id={id} name={name} number={number} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className={css.p}>No contacts yet</p>
        )}
      </div>
    );
  }
}
