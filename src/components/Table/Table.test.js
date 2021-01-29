import React from 'react';
import { render } from '@testing-library/react';
import { Table } from './Table';

describe('Components/Table', () => {
  it('should render', () => {
    const { container } = render(<Table data={[]} />);
    expect(container).toMatchSnapshot();
  });
});
