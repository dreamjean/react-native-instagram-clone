import styled from "styled-components";

import { colors } from "../config";
import { Text } from "../styles";
import Icon from "./Icon";

const Checkbox = ({ checked, title, onPress }) => {
  return (
    <Box activeOpacity={0.6} onPress={onPress}>
      <Icon
        backgroundColor={checked ? colors.blue : colors.white}
        borderColor={colors.blue}
        round={false}
        iconRatio={0.8}
        iconName="check"
        size={20}
      />
      <Check button1 blue>
        {title}
      </Check>
    </Box>
  );
};

const Box = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingVertical: space.s2,
  })}
`;

const Check = styled(Text)`
  text-transform: capitalize;

  ${({ theme: { space } }) => ({
    marginLeft: space.s2,
  })}
`;

export default Checkbox;
