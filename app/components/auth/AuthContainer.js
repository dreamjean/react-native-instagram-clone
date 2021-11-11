import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

import { colors } from "../../config";
import { View } from "../../styles";

const AuthContainer = ({ children }) => {
  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={100}
      enableOnAndroid
      enableAutomaticScroll
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <View container>
        <Pressable
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            position: "absolute",
            top: 28,
            left: 12,
          })}
          onPress={() => navigation.goBack()}
        >
          <Fontisto name="angle-left" size={18} color={colors.dark} />
        </Pressable>
        {children}
      </View>
      <StatusBar style="dark" />
    </KeyboardAwareScrollView>
  );
};

export default AuthContainer;
