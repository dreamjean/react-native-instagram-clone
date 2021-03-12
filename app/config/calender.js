import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const ROW_HEIGHT = height / 16;

export default {
  width,
  height,
  ROW_HEIGHT,
};
