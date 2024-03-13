import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FilterInput, FilterLabel } from './Filter.styled';
import { hendleChangeContact } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const hendelInput = event => {
    dispatch(hendleChangeContact(event.target.value));
  };
  return (
    <FilterLabel>
      Search contacts by name
      <FilterInput
        value={value}
        type="text"
        name="filter"
        placeholder="Enter the Name"
        onChange={hendelInput}
      />
    </FilterLabel>
  );
};
