import styled from 'styled-components/macro';

export const TableBlock = styled.div`
  max-width: 100%;
  padding: 16px;
`;

export const TableContainer = styled.table`
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
  width: 100%;
  border-collapse: collapse;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  text-align: left;
`;

export const TableRow = styled.tr`
  height: 50px;
`;

export const TableHeader = styled.th`
  font-weight: 400;
  font-size: 14px;
  color: white;
  padding: 8px 16px;
`;
export const TableData = styled.td`
  padding: 8px 16px;
  color: gray;
  font-size: 12px;
`;

export const TableHead = styled.thead`
  height: 8px;
  ${TableRow} {
    background-color: #484848;
  }
`;

export const TableBody = styled.tbody`
  ${TableRow} {
    background-color: #efefef;
  }
`;
