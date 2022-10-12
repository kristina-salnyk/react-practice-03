import { Component } from 'react';
import { Dropdown as DropdownContainer, Menu } from './Dropdown.styled';
import { CounterButton } from '../Counter/Controls/Controls.styled';

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <DropdownContainer>
        <CounterButton type="button" onClick={this.toggle}>
          {this.state.visible ? 'Hide' : 'Show'}
        </CounterButton>
        {this.state.visible && <Menu>Menu</Menu>}
      </DropdownContainer>
    );
  }
}
