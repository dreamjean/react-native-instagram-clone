import { Dimensions } from "react-native";

import theme from "./theme";

const { width, height } = Dimensions.get("window");

const ROW_HEIGHT = height / 16;
const TAB_WIDTH = (width - theme.space.m1 * 2) / 2;

export default {
  width,
  height,
  ROW_HEIGHT,
  TAB_WIDTH,
};
