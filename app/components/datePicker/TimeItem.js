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
        -TIME_HEIGHT * (index + 1),
        -TIME_HEIGHT * index,
        -TIME_HEIGHT * (index - 1),
      ],
      [0.35, 1, 0.35],
      Extrapolate.CLAMP
    );

    return {
      height: TIME_HEIGHT,
      alignItems: "center",
      justifyContent: "center",
      transform: [{ translateY: translateY.value }],
      opacity,
    };
  });

  return (
    <Pressable {...{ onPress }}>
      <Animated.View style={style}>
        <Text body>{label}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default TimeItem;
