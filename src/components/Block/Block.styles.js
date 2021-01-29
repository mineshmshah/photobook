import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
  margin: 16px;
  background-color: #efefef;
  border-radius: 4px 4px 0 0;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: #484848;
  height: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px 4px 0 0;
`;

export const Controls = styled.div`
  padding: 16px;
`;

export const Header = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: white;
  padding-left: 16px;
`;
