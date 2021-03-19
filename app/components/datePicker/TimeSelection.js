import React from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import styled from "styled-components";

import { calender } from "../../config";
import TimeItem from "./TimeItem";

const { ROW_HEIGHT, DATE_MODAL_HEIGHT, TIME_WIDTH } = calender;

const TimeSelection = ({ data, onSelectTime }) => {
  const translateY = useSharedValue(0);
  const snapPoints = data.map((_, i) => -i * ROW_HEIGHT);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.y = translateY.value;
    },
    onActive: ({ translationY }, { y }) => {
      translateY.value = y + translationY;
    },
    onEnd: ({ velocityY }) => {
      const dest = snapPoint(translateY.value, velocityY, snapPoints);
      translateY.value = withSpring(dest);
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
              onPress={() => onSelectTime(item)}
            />
          ))}
        </Row>
      </Animated.View>
    </PanGestureHandler>
  );
};

const Row = styled.View`
  height: ${ROW_HEIGHT}px;
  width: ${TIME_WIDTH}px;
  border-top-width: 2px;
  border-bottom-width: 2px;

  ${({ theme: { colors, space } }) => ({
    borderColor: colors.dark,
    marginHorizontal: space.s1,
  })}
`;

export default TimeSelection;
