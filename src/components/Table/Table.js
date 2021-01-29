import React from 'react';
import { useSelector } from 'react-redux';
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
  const data = useSelector((state) => state.filter.filteredData);

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
