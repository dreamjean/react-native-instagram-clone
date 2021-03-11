import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components';

const Icon = ({
  backgroundColor,
  color = 'white',
  name,
  IconComponent = MaterialCommunityIcons,
  iconRatio = 0.7,
  margin,
  onPress,
  size,
}) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
      {...{ onPress }}
    >
      <Container {...{ size, backgroundColor, margin }}>
        <IconComponent name={name} color={color} size={size * iconRatio} />
      </Container>
    </Pressable>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: center;

  ${({ size, backgroundColor, margin }) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
    margin,
  })}
`;

export default Icon;
