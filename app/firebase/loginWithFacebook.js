import * as Facebook from "expo-facebook";

import { firebase } from ".";
import keys from "./keys";

const loginWithFacebookAsync = async () => {
  try {
    await Facebook.initializeAsync({
      appId: keys.FACEBOOK_APP_ID,
    });

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile"], // 指定要从Facebook要求登录的权限,
    });

    if (type === "success") {
      await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL); //设置持久身份验证状态

      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      await firebase
        .auth()
        .signInWithCredential(credential)
        .catch((error) => console.log("@Login failed: ", error));
    } else {
      return { type: "cancel" };
    }
  } catch ({ message }) {
    alert(`Facebook login error: ${message}`);
  }
};

export default loginWithFacebookAsync;
