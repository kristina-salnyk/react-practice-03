import styled from 'styled-components';

export const TodoList = styled.ul`
  width: 600px;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid black;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px;
`;

export const Checkbox = styled.input`
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const Button = styled.button`
  margin-left: auto;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: #3f51b5;
  color: white;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
