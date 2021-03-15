import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components";

import { calender, theme } from "../../config";
import { Text } from "../../styles";
import FormField from "../form/FormField";
import FormPhoneField from "../form/FormPhoneFlield";

const { width, TAB_WIDTH } = calender;
const { colors, space } = theme;

const PreferredContact = ({ tabs, onPress, showPhone }) => {
  const activeIndex = useSharedValue(0);

  const indicatorPosition = useDerivedValue(() => {
    return withTiming(activeIndex.value * TAB_WIDTH + TAB_WIDTH / 2);
  });

  return (
    <>
      <Tabs>
        {tabs.map((tab, index) => {
          const position = TAB_WIDTH * index + TAB_WIDTH / 2;
          const stylet = useAnimatedStyle(() => {
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
                stylet,
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
                <Text title1>{tab.label}</Text>
              </Pressable>
            </Animated.View>
          );
        })}
      </Tabs>
      {showPhone && <FormPhoneField name="phone" />}
      {!showPhone && (
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          blurOnSubmit={false}
          keyboardAppearance="default"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          returnKeyLabel="next"
          returnKeyType="next"
          textContentType="emailAddress"
        />
      )}
    </>
  );
};

const Tabs = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;

  ${({ theme: { colors, space } }) => ({
    margin: space.m1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grey,
  })}
`;

export default PreferredContact;