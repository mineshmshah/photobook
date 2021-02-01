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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <Filter />
      <Sorting />
      <Table />
    </div>
  );
};
