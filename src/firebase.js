import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  //   apiKey: "AIzaSyB3hPF0WdXwvNZCV-NDTW-r7aY962-D7d0",
  //   authDomain: "neither-49a9b.firebaseapp.com",
  //   projectId: "neither-49a9b",
  //   storageBucket: "neither-49a9b.appspot.com",
  //   messagingSenderId: "16900405955",
  //   appId: "1:16900405955:web:edb9d83bbe1e9a02cd4076",
};

export default initializeApp(firebaseConfig);
