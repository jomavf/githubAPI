import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjSj4uA4-9WTNSHQs4vsIVVBMh1UQ8kmI",
  authDomain: "githubapi-ca688.firebaseapp.com",
  databaseURL: "https://githubapi-ca688.firebaseio.com",
  projectId: "githubapi-ca688",
  storageBucket: "githubapi-ca688.appspot.com",
  messagingSenderId: "1077477662730",
  appId: "1:1077477662730:web:2810bac1363fdf4b8ffff3",
  measurementId: "G-3E9XSQH6K9",
};

firebase.initializeApp(firebaseConfig);

async function authWithGithub() {
  const provider = new firebase.auth.GithubAuthProvider();
  provider.addScope("repo");
  provider.addScope("user");
  const result = await firebase.auth().signInWithPopup(provider);
  return result.credential.accessToken;
}

export { authWithGithub };
