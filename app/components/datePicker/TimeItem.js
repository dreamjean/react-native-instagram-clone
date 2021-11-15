import { Pressable } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { calender } from "../../config";
import { Text } from "../../styles";

const { TIME_HEIGHT } = calender;

const TimeItem = ({ translateY, index, label, onPress }) => {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [
        -TIME_HEIGHT * (index + 2),
        -TIME_HEIGHT * index,
        -TIME_HEIGHT * (index - 2),
      ],
      [0.3, 1, 0.3],
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
            height: TIME_HEIGHT,
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
