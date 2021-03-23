import { Dimensions } from "react-native";

import theme from "./theme";

const { width, height } = Dimensions.get("window");

const ROW_HEIGHT = height / 16;
const TAB_WIDTH = (width - theme.space.m1 * 2) / 2;
const VISIBLE_TIMES = 3;
const DATE_MODAL_HEIGHT = ROW_HEIGHT * VISIBLE_TIMES + theme.space.s3 * 2;
const TIME_WIDTH = width / 5;

export default {
  width,
  height,
  DATE_MODAL_HEIGHT,
  ROW_HEIGHT,
  TAB_WIDTH,
  TIME_WIDTH,
  VISIBLE_TIMES,
};
