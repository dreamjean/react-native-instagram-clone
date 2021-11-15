import dayjs from "dayjs";
import { useEffect, useState } from "react";
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

// const range = (start, end) => {
//   start = Number(start);
//   end = Number(end);

//   if (start > end) return [];

//   return new Array(end - start + 1)
//     .fill()
//     .map((_, index) => ({ value: index + start, label: `${index + start}` }));
// };

const months = Array.from({ length: 12 })
  .fill(0)
  .map((_, i) => {
    return { value: i, label: `${dayjs().month(i).format("MMM")}` };
  });

const days = Array.from({ length: 31 })
  .fill(0)
  .map((_, i) => {
    const value = i + 1;
    return {
      value,
      label: `${dayjs().date(value).format("DD")}`,
    };
  });

const DatePicker = ({
  year,
  month,
  date,
  onSelectDate,
  onSelectMonth,
  onSelectYear,
}) => {
  const [dates, setDates] = useState(days);

  useEffect(() => {
    restoreDates(year, month, date);
  }, [dates]);

  const restoreDates = (year, month, date) => {
    let dates = [...days];
    const currentDate = `${year}-${month}-${date}`;
    const currentDateLength = dayjs(currentDate).daysInMonth();
    if (currentDateLength < days.lenth) {
      dates = dates.slice(0, currentDateLength - 1);
      setDates(dates);
    }
  };

  return (
    <Container>
      <TimeSelection
        data={months}
        name="month"
        initialValue={month}
        onSelectTime={onSelectMonth}
      />
      <TimeSelection
        data={dates}
        name="date"
        initialValue={date}
        onSelectTime={onSelectDate}
      />
      <TimeSelection
        data={years}
        name="year"
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
