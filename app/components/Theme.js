import { ThemeProvider } from "styled-components/native";

import { theme } from "../config";

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
