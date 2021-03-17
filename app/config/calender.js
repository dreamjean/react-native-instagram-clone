import { Dimensions } from "react-native";

import theme from "./theme";

const { width, height } = Dimensions.get("window");

const ROW_HEIGHT = height / 16;
const TAB_WIDTH = (width - theme.space.m1 * 2) / 2;
const DATE_MODAL_HEIGHT = ROW_HEIGHT * 3 + theme.space.s3 * 2;
const DATE_PICKER_WIDTH = 80;

export default {
  width,
  height,
  DATE_MODAL_HEIGHT,
  DATE_PICKER_WIDTH,
  ROW_HEIGHT,
  TAB_WIDTH,
};
