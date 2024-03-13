import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

import PropTypes from 'prop-types';

import {
  ContactName,
  ContactTitle,
  CotactList,
  ContactButton,
  ContactItem,
  ContactNumber,
  EmptyField,
  ContactsWrapper,
} from './Contacts.styled';

export const Contacts = ({ title }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(selectFilter);

  const getFilterdContact = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const filteredContacts = getFilterdContact();

  return (
    <ContactsWrapper>
      {contacts.length > 0 ? (
        <>
          <ContactTitle>{title}</ContactTitle>
          <CotactList>
            {filteredContacts.length > 0 ? (
              filteredContacts.map(({ id, name, phone }) => {
                return (
                  <ContactItem key={id}>
                    <ContactName>{name}:</ContactName>
                    <ContactNumber>{phone}</ContactNumber>
                    <ContactButton
                      type="button"
                      onClick={() => dispatch(deleteContact(id))}
                    >
                      Delete
                    </ContactButton>
                  </ContactItem>
                );
              })
            ) : (
              <EmptyField>No contacts yet...</EmptyField>
            )}
          </CotactList>
        </>
      ) : (
        <EmptyField>No contacts yet...</EmptyField>
      )}
    </ContactsWrapper>
  );
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
};
