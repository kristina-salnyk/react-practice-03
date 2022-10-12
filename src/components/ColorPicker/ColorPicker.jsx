import {
  ColorPicker as ColorPickerContainer,
  Option,
  Title,
} from './ColorPicker.styled';
import { Component } from 'react';

export class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIndex = index => {
    this.setState({
      activeOptionIdx: index,
    });
  };

  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;

    return (
      <ColorPickerContainer>
        <Title>Color Picker</Title>
        <p>Selected color: {options[activeOptionIdx].label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <Option
              key={label}
              color={color}
              active={index === this.state.activeOptionIdx}
              onClick={() => this.setActiveIndex(index)}
            ></Option>
          ))}
        </div>
      </ColorPickerContainer>
    );
  }
}
