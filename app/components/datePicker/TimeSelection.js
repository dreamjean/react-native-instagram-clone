import { PanGestureHandler } from "react-native-gesture-handler";
import {
  runOnJS,
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import styled from "styled-components/native";

import { calender } from "../../config";
import TimeItem from "./TimeItem";

const { TIME_HEIGHT, DATE_MODAL_HEIGHT, TIME_WIDTH } = calender;

const TimeSelection = ({ data = [], onSelectTime, name, initialTime }) => {
  const translateY = useSharedValue(
    data.findIndex(({ value }) => value === initialTime) * -TIME_HEIGHT
  );
  const snapPoints = data.map((_, i) => -i * TIME_HEIGHT);

  const handleSelectTime = () => {
    const index = Math.abs(translateY.value / TIME_HEIGHT);
    const { value } = data[index];
    onSelectTime({ [name]: value });
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
          overshootClamping: true,
          restDisplacementThreshold: 1,
          restSpeedThreshold: 1,
        },
        runOnJS(handleSelectTime)()
      );
    },
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Container>
        <Row>
          {data.map((item, index) => (
            <TimeItem
              key={item.value}
              translateY={translateY}
              index={index}
              label={item.label}
              onPress={() => {
                translateY.value = withSpring(-index * TIME_HEIGHT);
                const { value } = data[index];
                if (onSelectTime) onSelectTime({ [name]: value });
              }}
            />
          ))}
        </Row>
      </Container>
    </PanGestureHandler>
  );
};

const Container = styled.View`
  height: ${DATE_MODAL_HEIGHT}px;
  align-items: center;
  justify-content: center;
`;

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

export default TimeSelection;
