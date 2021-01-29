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
