import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createServer } from 'miragejs';
import { jsonData } from './db/MOCK_DATA';
import { getData, sortData } from './store/actions/actions';
import { Table } from './components/Table';
import { Sorting } from './components/Sorting';

createServer({
  routes() {
    this.get('/api/data', () => jsonData);
  },
});

export const App = () => {
  const sortingInfo = useSelector((state) => state.sorting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    console.log(sortingInfo);
    dispatch(sortData());
  }, [sortingInfo]);

  return (
    <div>
      <Sorting />
      <Table />
    </div>
  );
};
