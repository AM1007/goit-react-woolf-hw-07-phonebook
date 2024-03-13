import { Form } from './Form';
import { Contacts } from './Contacts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { Wrapper } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Wrapper>
      <Form title="Phonebook" />
      {isLoading && !error && <b>Request in progress!...</b>}

      <Contacts title="Contacts" />
    </Wrapper>
  );
};
