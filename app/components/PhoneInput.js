import { forwardRef, useState } from "react";
import { Pressable } from "react-native";
import CountryPicker, {
  CountryModalProvider,
  DEFAULT_THEME,
} from "react-native-country-picker-modal";
import styled from "styled-components/native";

import { colors } from "../config";
import { Input, Text, View } from "../styles";

const PhoneInput = forwardRef(({ error, touched, ...rest }, ref) => {
  const [countryCode, setCountryCode] = useState("TW");
  const [code, setCode] = useState("886");
  const [modalVisible, setModalVisible] = useState(false);

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCode(country.callingCode[0]);
  };

  const renderFlagButton = () => {
    return (
      <AreaNum>
        <Text areaNum>{`${countryCode} +${code}`}</Text>
      </AreaNum>
    );
  };

  return (
    <CountryModalProvider>
      <View inputBox {...{ error, touched }}>
        <Pressable onPress={() => setModalVisible(true)}>
          <CountryPicker
            onSelect={onSelect}
            withEmoji
            withFilter
            withFlag
            countryCode={countryCode}
            withCallingCode
            visible={modalVisible}
            theme={DEFAULT_THEME}
            renderFlagButton={renderFlagButton}
            onClose={() => setModalVisible(false)}
          />
        </Pressable>
        <Input
          {...{ ref }}
          {...rest}
          blurOnSubmit={false}
          clearButtonMode="while-editing"
          keyboardAppearance="default"
          keyboardType="number-pad"
          numberOfLines={1}
          returnKeyLabel="go"
          returnKeyType="go"
          selectionColor={colors.blue}
          style={{ paddingLeft: 12 }}
          placeholder="Phone Number"
          placeholderTextcolor={colors.grey}
          underlineColorAndroid="transparent"
        />
      </View>
    </CountryModalProvider>
  );
});

const AreaNum = styled.View`
  align-items: center;
  justify-content: center;

  ${({ theme: { colors, space } }) => ({
    borderRightWidth: 1,
    borderColor: colors.grey,
    paddingRight: space.m1,
  })}
`;

export default PhoneInput;
