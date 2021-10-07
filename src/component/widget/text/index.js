import React from 'react';
import {Text} from 'react-native';

const BaseText = props => {
  return <Text {...props}>{props.text || props.children}</Text>;
};

export default BaseText;
