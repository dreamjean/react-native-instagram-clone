import React from "react";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
} from "react-native-reanimated";

import { calender } from "../../config";
import { Text } from "../../styles";

const { ROW_HEIGHT } = calender;

const RowItem = ({ translateY, index, name, onPress }) => {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [-ROW_HEIGHT * (index + 1), -ROW_HEIGHT * index, -ROW_HEIGHT * (index - 1)],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ translateY: translateY.value }],
      opacity,
    };
  });

  const onGestureEvent = () => {
    ({ absoluteX: x, absoluteY: y }) => {
      runOnJS(onPress)({ x, y });
    };
  };

  return (
    <TapGestureHandler {...{ onGestureEvent }}>
      <Animated.View
        style={[
          {
            height: ROW_HEIGHT,
            alignItems: "center",
            justifyContent: "center",
          },
          style,
        ]}
      >
        <Text body>{name}</Text>
      </Animated.View>
    </TapGestureHandler>
  );
};

export default RowItem;
