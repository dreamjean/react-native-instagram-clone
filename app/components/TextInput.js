import { FontAwesome5 } from "@expo/vector-icons";
import React, { forwardRef } from "react";
import { Pressable } from "react-native";

import { colors } from "../config";
import { Input, View } from "../styles";

const TextInput = forwardRef(({ error, icon, iconColor, onPress, ...rest }, ref) => {
  return (
    <View inputBox {...{ error }}>
      <Input
        {...{ ref }}
        {...rest}
        numberOfLines={1}
        selectionColor={colors.blue}
        placeholderTextcolor={colors.grey}
        underlineColorAndroid="transparent"
      />
      {icon && (
        <Pressable {...{ onPress }}>
          <FontAwesome5 name={icon} size={24} color={iconColor} />
        </Pressable>
      )}
    </View>
  );
});

// const Container = styled.View`
//   flex-direction: row;
//   border-width: 1px;
//   height: ${ROW_HEIGHT}px;
//   align-items: center;

//   ${({ error, theme: { colors, space, radii } }) => ({
//     borderColor: error ? colors.danger : colors.grey,
//     borderRadius: radii.s1,
//     marginVertical: space.s2,
//     paddingHorizontal: space.s3,
//   })}
// `;

export default TextInput;
