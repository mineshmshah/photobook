import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Block } from '../Block';
import { filterData } from '../../store/actions/actions';
import { Input, Label, InputContainer, Button } from './Filter.Styles';

export const Filter = () => {
  const dispatch = useDispatch();
  const [firstNameFilter, setFirstNameFilter] = useState('');
  const [lastNameFilter, setLastNameFilter] = useState('');

  return (
    <Block header='Filter'>
      <InputContainer>
        <Label>First Name</Label>
        <Input
          value={firstNameFilter}
          onChange={(e) => setFirstNameFilter(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Label>Last Name</Label>
        <Input
          value={lastNameFilter}
          onChange={(e) => setLastNameFilter(e.target.value)}
        />
      </InputContainer>
      <Button
        onClick={() => dispatch(filterData(firstNameFilter, lastNameFilter))}
      >
        Filter Results
      </Button>
    </Block>
  );
};
