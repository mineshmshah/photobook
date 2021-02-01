import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
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
          const sortingOrder = sorting.ascending;
          switch (sortingMethod) {
            case 'default':
              return sortingOrder ? a.id - b.id : b.id - a.id;
            case 'income':
              return sortingOrder ? a.salary - b.salary : b.salary - a.salary;
            case 'industry':
              if (a.industry === b.industry) {
                return 0;
              }
              if (a.industry === null) {
                return 1;
              }
              if (b.industry === null) {
                return -1;
              }
              if (a.industry === 'n/a') {
                return 1;
              }
              if (b.industry === 'n/a') {
                return -1;
              }
              return sortingOrder
                ? (a.industry || '').localeCompare(b.industry || '')
                : (b.industry || '').localeCompare(a.industry || '');
            case 'date': {
              const aDate = a.date_of_birth.split('/');
              const aDateNew = new Date(aDate[2], aDate[1], aDate[0]);

              const bDate = b.date_of_birth.split('/');
              const bDateNew = new Date(bDate[2], bDate[1], bDate[0]);

              return sortingOrder
                ? aDateNew.getTime() - bDateNew.getTime()
                : bDateNew.getTime() - aDateNew.getTime();
            }
            default:
              return 0;
          }
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
