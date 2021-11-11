import dayjs from "dayjs";
import styled from "styled-components";

import { calender } from "../../config";
import TimeSelection from "./TimeSelection";

const { DATE_MODAL_HEIGHT } = calender;

// const start = 2000;

// const years = new Array(dayjs().year() - (start - 1))
//   .fill(0)
//   .map((_, i) => {
//     const value = start + i;
//     return { value, label: `${value}` };
//   })
//   .reverse();

const range = (start, end) => {
  start = Number(start);
  end = Number(end);

  if (start > end) return [];

  return new Array(end - start + 1)
    .fill()
    .map((_, index) => ({ value: index + start, label: `${index + start}` }));
};

const months = Array.from({ length: 12 }).map((_, i) => {
  return { value: i, label: `${dayjs().month(i).format("MMM")}` };
});

const DatePicker = ({ year, month, date, onSelectDate, onSelectMonth, onSelectYear }) => {
  const days = Array.from(Array(dayjs(year).daysInMonth()).keys()).map((_, i) => {
    const value = i + 1;
    return {
      value,
      label: `${dayjs().date(value).format("DD")}`,
    };
  });

  return (
    <Container>
      <TimeSelection data={months} initialValue={month} onSelectTime={onSelectMonth} />
      <TimeSelection data={days} initialValue={date} onSelectTime={onSelectDate} />
      <TimeSelection
        data={range(1900, 2021).reverse()}
        initialValue={year}
        onSelectTime={onSelectYear}
      />
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
