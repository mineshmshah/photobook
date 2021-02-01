import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createServer } from 'miragejs';
import { jsonData } from './db/MOCK_DATA';
import { getData } from './store/actions/actions';
import { Table } from './components/Table';
import { Sorting } from './components/Sorting';
import { Filter } from './components/Filter';

createServer({
  routes() {
    this.get('/api/data', () => jsonData);
  },
});

export const App = () => {
  // const sortingInfo = useSelector((state) => state.sorting);
  // const filterFirstName = useSelector((state) => state.filter.firstName);
  // const filterLastName = useSelector((state) => state.filter.lastName);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  // useEffect(() => {
  //   console.log(sortingInfo);
  //   dispatch(sortData());
  // }, [sortingInfo, filterFirstName, filterLastName]);

  return (
    <div>
      <Filter />
      <Sorting />
      <Table />
    </div>
  );
};
