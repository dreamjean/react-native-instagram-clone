import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect } from "react";
import { Platform, Pressable } from "react-native";
import styled from "styled-components";

import { colors } from "../config";
import { Image } from "../styles";

const ImageInput = ({ error, image, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    if (Platform.OS !== "web") {
      const {
        granted,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!granted)
        alert("You need to enable permission to access the library.");
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      console.log(result);
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error @pickImage", error);
    }
  };

  return (
    <Pressable
      style={({ pressed }) => ({
        background: pressed ? colors.lightBlue : colors.grey,
        alignItems: "center",
        justifyContent: "center",
      })}
      onPress={selectImage}
    >
      <Container {...{ error }}>
        {image && <Image source={{ uri: image }} />}
        {!image && (
          <MaterialCommunityIcons
            name="plus"
            size={35}
            color={error ? colors.danger : colors.white}
          />
        )}
      </Container>
    </Pressable>
  );
};

const Container = styled.View`
  width: 80px;
  height: 80px;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  ${({ error, theme: { colors, space, radii } }) => ({
    borderRadius: radii.l,
    backgroundColor: error ? colors.lightDanger : colors.grey,
    marginBottom: space.s1,
  })}
`;

export default ImageInput;
