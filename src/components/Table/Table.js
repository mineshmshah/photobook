import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { sortDataBy } from '../../utils/sort';
import {
  TableBlock,
  TableContainer,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from './Table.styles';

export const Table = () => {
  const filterSortData = createSelector(
    (state) => state.data.value,
    (state) => state.sorting,
    (state) => state.filter,
    (data, sorting, filter) =>
      data
        .filter((user) => {
          const firstNameExists =
            !filter.firstName ||
            (user.first_name &&
              user.first_name.toLowerCase().includes(filter.firstName));
          const lastNameExists =
            !filter.lastName ||
            (user.last_name &&
              user.last_name.toLowerCase().includes(filter.lastName));
          return firstNameExists && lastNameExists;
        })
        .sort((a, b) => {
          const sortingMethod = sorting.sortBy;
          const { ascending } = sorting;
          return sortDataBy(a, b, sortingMethod, ascending);
        }),
  );

  const data = useSelector(filterSortData);

  return (
    <TableBlock>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableHeader>First Name</TableHeader>
            <TableHeader>Last Name</TableHeader>
            <TableHeader>e-mail</TableHeader>
            <TableHeader>Date of Birth</TableHeader>
            <TableHeader>Industry</TableHeader>
            <TableHeader>Salary</TableHeader>
            <TableHeader>Years of Experience</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableData>{item.first_name}</TableData>
              <TableData>{item.last_name}</TableData>
              <TableData>{item.email}</TableData>
              <TableData>{item.date_of_birth}</TableData>
              <TableData>{item.industry}</TableData>
              <TableData>{item.salary}</TableData>
              <TableData>{item.years_of_experience}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </TableBlock>
  );
};

Table.propTypes = {};
