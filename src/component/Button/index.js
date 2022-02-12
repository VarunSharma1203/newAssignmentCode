import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const Button = (props) => {
  const { btnStyle, textStyle, onPress, title, disabled = true } = props;
  return (
    <TouchableOpacity  style={btnStyle} onPress={
      onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
