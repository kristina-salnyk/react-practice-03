import styled from 'styled-components';

export const ColorPicker = styled.div`
  width: 400px;
  padding: 10px;
  border: 1px solid black;
`;

export const Title = styled.h1`
  line-height: 1.3;
`;

export const Option = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 250ms linear;
  background-color: ${props => props.color};
  ${props => props.active && 'transform: scale(1.2);'}
`;
