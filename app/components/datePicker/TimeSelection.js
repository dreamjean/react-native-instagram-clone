import { memo } from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import styled from "styled-components";

import { calender } from "../../config";
import TimeItem from "./TimeItem";

const { TIME_HEIGHT, DATE_MODAL_HEIGHT, TIME_WIDTH } = calender;

const TimeSelection = ({ data = [], onSelectTime, name, initialValue }) => {
  const translateY = useSharedValue(data.findIndex({ value: initialValue }));
  const snapPoints = data.map((_, i) => -i * TIME_HEIGHT);

  const handleSelectTime = () => {
    const index = Math.abs(translateY.value) / TIME_HEIGHT;
    if (name === "year") onSelectTime({ [name]: data[index].value });
    else onSelectTime({ [name]: data[index].value - 1 });
  };

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.y = translateY.value;
    },
    onActive: ({ translationY }, { y }) => {
      translateY.value = y + translationY;
    },
    onEnd: ({ velocityY }) => {
      const dest = snapPoint(translateY.value, velocityY, snapPoints);
      translateY.value = withSpring(
        dest,
        {
          velocity: velocityY,
        },
        runOnJS(handleSelectTime)()
      );
    },
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View
        style={{
          height: DATE_MODAL_HEIGHT,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row>
          {data.map((item, index) => (
            <TimeItem
              key={item.value}
              translateY={translateY}
              index={index}
              label={item.label}
              onPress={() => {
                translateY.value = withSpring(-index * TIME_HEIGHT);
                if (onSelectTime) {
                  if (name === "year")
                    onSelectTime({ [name]: data[index].value });
                  else onSelectTime({ [name]: data[index].value - 1 });
                }
              }}
            />
          ))}
        </Row>
      </Animated.View>
    </PanGestureHandler>
  );
};

const Row = styled.View`
  height: ${TIME_HEIGHT}px;
  width: ${TIME_WIDTH}px;
  border-top-width: 2px;
  border-bottom-width: 2px;

  ${({ theme: { colors, space } }) => ({
    borderColor: colors.dark,
    marginHorizontal: space.s1,
  })}
`;

export default memo(TimeSelection);
