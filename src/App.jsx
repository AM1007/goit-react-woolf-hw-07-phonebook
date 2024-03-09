import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import css from '../src/App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
