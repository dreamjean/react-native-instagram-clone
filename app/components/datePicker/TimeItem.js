import { Pressable } from "react-native";
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";

import { calender } from "../../config";
import { Text } from "../../styles";

const { ROW_HEIGHT } = calender;

const TimeItem = ({ translateY, index, label, onPress }) => {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [-ROW_HEIGHT * (index + 1), -ROW_HEIGHT * index, -ROW_HEIGHT * (index - 1)],
      [0.35, 1, 0.35],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateY: translateY.value }],
      opacity,
    };
  });

  return (
    <Pressable {...{ onPress }}>
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
        <Text body>{label}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default TimeItem;
