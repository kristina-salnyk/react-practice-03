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
