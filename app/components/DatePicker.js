import React from "react";
import styled from "styled-components";

import { calender } from "../config";
import ItemSelection from "./datePicker/ItemSelection";

const { DATE_MODAL_HEIGHT } = calender;

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const DatePicker = () => {
  return (
    <Container>
      <ItemSelection data={months} />
      <ItemSelection data={months} />
      <ItemSelection data={months} />
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
