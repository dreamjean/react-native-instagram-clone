import "firebase/auth";
import "firebase/firestore";

import Constants from "expo-constants";
import * as firebase from "firebase";

// firebase只能初始化一次
if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase);
}

const db = firebase.firestore();

export { db, firebase };
