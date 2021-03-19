import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";

import { calender } from "../../config";
import TimeSelection from "./TimeSelection";

const { DATE_MODAL_HEIGHT } = calender;

const start = 2000;

const years = new Array(dayjs().year() - (start - 1))
  .fill(0)
  .map((_, i) => {
    const value = start + i;
    return { value, label: `${value}` };
  })
  .reverse();

const months = Array.from({ length: 12 })
  .fill(0)
  .map((_, i) => {
    return { value: i, label: `${dayjs().month(i).format("MMM")}` };
  });

const DatePicker = ({ values }) => {
  const days = Array.from({ length: dayjs(values).daysInMonth() })
    .fill(0)
    .map((_, i) => {
      const value = i + 1;
      return { value, label: `${value}` };
    });

  return (
    <Container>
      <TimeSelection data={months} />
      <TimeSelection data={days} />
      <TimeSelection data={years} />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${DATE_MODAL_HEIGHT}px;
  overflow: hidden;
`;

export default DatePicker;
