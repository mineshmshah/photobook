import styled from 'styled-components/macro';

export const Label = styled.h2`
  font-size: 14px;
  font-weight: 500;
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: start;
`;

export const RadioButton = styled.input`
  margin-top: 9px;
`;

export const InputLabel = styled.label`
  text-align: center;
  font-size: 14px;
  padding: 8px;
`;

export const SliderLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;

  > input {
    display: none;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ddd;
  transition: 0.4s;
  border-radius: 20px;

  &:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    background-color: #999;
    transition: 0.2s;
    border-radius: 50%;
    top: 2px;
    left: 2px;
  }
`;

export const SliderInput = styled.input`
  &:checked + ${Slider} {
    background-color: #0365b2;
    &:before {
      transform: translateX(20px);
      background-color: white;
    }
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
`;
