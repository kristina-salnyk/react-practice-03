import { CounterButton } from './Controls.styled';
import { Box } from '../../Box';
import React from 'react';

export const Controls = ({ onIncrement, onDecrement }) => (
  <Box>
    <CounterButton type="button" onClick={onIncrement}>
      Increment by 1
    </CounterButton>
    <CounterButton type="button" onClick={onDecrement}>
      Decrement by 1
    </CounterButton>
  </Box>
);
