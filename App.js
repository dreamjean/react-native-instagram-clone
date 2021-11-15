import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { decode, encode } from "base-64";
import AppLoading from "expo-app-loading";
import { LogBox, Platform } from "react-native";

import { Theme } from "./app/components";
// import { firebase } from "./app/firebase";
import useLoadAssets from "./app/hooks/useLoadAssets";
import AuthNavigator from "./app/navigation/AuthNavigator";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

if (Platform.OS === "android") {
  LogBox.ignoreLogs([""]); //android登錄時會有長時間計時器的黃色警告
}

export default function App() {
  const { assetsLoaded, setAssetsLoaded, loadAssetsAsync } = useLoadAssets();
  // const [user, setUser] = useState();
  // const [initializing, setInitalizing] = useState(true);

  // const onAuthStateChanged = (user) => {
  //   if (user) {
  //     setUser(user);
  //     setInitalizing(false);
  //   } else {
  //     setInitalizing(false);
  //   }
  // };

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(onAuthStateChanged);
  // }, []);

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setAssetsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Theme>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </Theme>
  );
}
