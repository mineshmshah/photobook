import styled from 'styled-components/macro';

export const Input = styled.input`
  padding: 8px;
  width: 300px;
  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.3);
  outline: none;
  border: 1px solid #dde3ed;
  border-radius: 4px;  
`;
export const Label = styled.h2`
  font-size: 14px;
  font-weight: 500;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

export const Button = styled.button`
cursor: pointer;
width: fit-content;
border-radius: 4px;
box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.3);
border: solid 1px rgba(0, 0, 0, 0.1);
background: linear-gradient(to bottom, #429bff, #3f94f3);
font-size: 12px;
text-align: center;
padding: 6px 16px;
color: white;
transition: all 0.3s cubic-bezier(0.645, 0.045, 0.35, 1);
margin: 16px 4px;
`
