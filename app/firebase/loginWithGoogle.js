import * as Google from "expo-google-app-auth";

import { firebase } from ".";
import keys from "./keys";

const loginWithGoogleAsync = async () => {
  try {
    const { type, idToken, accessToken } = await Google.logInAsync({
      iosClientId: keys.GOOGLe_IOS_CLIENT_ID_FOR_EXPO,
      androidClientId: keys.GOOGLE_ANDROID_CLIENT_ID_FOR_EXPO,
    });

    if (type === "success") {
      await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL); // 设置持久身份验证状态

      const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);

      firebase
        .auth()
        .signInWithCredential(credential)
        .catch((error) => console.log("@Login failed", error));
    } else {
      return { cancelled: true };
    }
  } catch ({ message }) {
    alert(`Google login error: ${message}`);
  }
};

export default loginWithGoogleAsync;
