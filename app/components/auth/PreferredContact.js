import { Pressable } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components";

import { calender, images, theme } from "../../config";
import { Image, Text } from "../../styles";
import FormField from "../form/FormField";
import FormPhoneField from "../form/FormPhoneField";
import SubmitButton from "./../form/SubmitButton";

const { width, TAB_WIDTH } = calender;
const { colors, space } = theme;

const PreferredContact = ({ tabs, onPress, showPhone }) => {
  const activeIndex = useSharedValue(0);

  const indicatorPosition = useDerivedValue(() => {
    return withTiming(activeIndex.value * TAB_WIDTH + TAB_WIDTH / 2);
  });

  return (
    <Container>
      <Image account source={images[1]} />
      <Tabs>
        {tabs.map((tab, index) => {
          const position = TAB_WIDTH * index + TAB_WIDTH / 2;
          const style = useAnimatedStyle(() => {
            const visibility = interpolate(
              indicatorPosition.value,
              [
                position - width / 4,
                position - width / 8,
                position + width / 8,
                position + width / 4,
              ],
              [0.5, 1, 1, 0.5],
              Extrapolate.CLAMP
            );
            return {
              opacity: visibility,
            };
          });
          return (
            <Animated.View
              key={tab.id}
              style={[
                {
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: space.s2,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.dark,
                },
                style,
              ]}
            >
              <Pressable
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  onPress();
                  activeIndex.value = index;
                }}
              >
                <Text title1 style={{ textTransform: "uppercase" }}>
                  {tab.label}
                </Text>
              </Pressable>
            </Animated.View>
          );
        })}
      </Tabs>
      {showPhone && (
        <>
          <FormPhoneField name="phone" />
          <Text small2 center color={colors.grey} marginTop={12}>
            You may receive SMS updates from Instagram and can optout at any
            time.
          </Text>
        </>
      )}
      {!showPhone && (
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          blurOnSubmit={false}
          clearButtonMode="while-editing"
          keyboardAppearance="default"
          keyboardType="email-address"
          name="email"
          placeholder="Email Address"
          returnKeyLabel="go"
          returnKeyType="go"
          textContentType="emailAddress"
        />
      )}
      <SubmitButton title="Next" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { space } }) => ({
    marginTop: space.l1 * 2,
  })}
`;

const Tabs = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    margin: space.m1,
  })}
`;

export default PreferredContact;
