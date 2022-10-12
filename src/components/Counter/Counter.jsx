import React from 'react';
import { Counter as CounterContainer, CounterValue } from './Counter.styled';
import PropTypes from 'prop-types';
import { Controls } from './Controls/Controls';

export default class Counter extends React.Component {
  static defaultProps = {
    initialValue: 5,
  };

  static propTypes = {
    initialValue: PropTypes.number,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = event => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };

  handleDecrement = event => {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };

  render() {
    return (
      <CounterContainer>
        <CounterValue>{this.state.value}</CounterValue>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </CounterContainer>
    );
  }
}
