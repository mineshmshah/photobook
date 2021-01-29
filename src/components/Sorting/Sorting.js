import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateSortBy, updateSortOrder } from '../../store/actions/actions';
import { Block } from '../Block';
import {
  RadioButton,
  InputLabel,
  Slider,
  SliderInput,
  SliderLabel,
  SliderContainer,
  Label,
  RadioContainer,
} from './Sorting.styles';

export const Sorting = () => {
  const sortingMethods = useSelector((state) => state.sorting.sortBy);
  const ascending = useSelector((state) => state.sorting.ascending);
  const dispatch = useDispatch();
  const updateSortingMethod = (event) =>
    dispatch(updateSortBy(event.target.value));
  const toggleSortOrder = (event) =>
    dispatch(updateSortOrder(event.target.checked));

  return (
    <Block header='Sorting'>
      <Label>Sort by:</Label>
      <RadioContainer>
        <RadioButton
          id='default'
          type='radio'
          value='default'
          checked={sortingMethods === 'default'}
          onChange={updateSortingMethod}
        />
        <InputLabel for='default'>Default</InputLabel>
        <RadioButton
          id='date'
          type='radio'
          value='date'
          checked={sortingMethods === 'date'}
          onChange={updateSortingMethod}
        />
        <InputLabel for='date'>Date</InputLabel>
        <RadioButton
          id='industry'
          type='radio'
          value='industry'
          checked={sortingMethods === 'industry'}
          onChange={updateSortingMethod}
        />
        <InputLabel for='industry'>Industry</InputLabel>
        <RadioButton
          id='income'
          type='radio'
          value='income'
          checked={sortingMethods === 'income'}
          onChange={updateSortingMethod}
        />
        <InputLabel for='income'>Income</InputLabel>
      </RadioContainer>
      <Label>Sort order:</Label>
      <SliderContainer>
        <SliderLabel>
          <SliderInput
            type='checkbox'
            checked={ascending}
            onChange={toggleSortOrder}
          />
          <Slider />
        </SliderLabel>
        <InputLabel>{ascending ? 'Ascending' : 'Descending'}</InputLabel>
      </SliderContainer>
    </Block>
  );
};

Sorting.propTypes = {
  children: PropTypes.any,
};
