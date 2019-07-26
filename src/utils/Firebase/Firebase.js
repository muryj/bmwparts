// @flow
import * as firebase from "react-native-firebase";

export const login = (email, password) => {
    console.log(email, password, 'login');
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user =>{
            console.log('success')
        })
        .catch(() => alert('error login'));
};

export const register = (email, password) => {
  console.log(email, password, 'register');
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
      .then(() => {
          const {currentUser} = firebase.auth();
          const tmpString = email.split('@');
          const username = tmpString[0];
          try {
              const db = firebase.firestore();
              db.collection("users").doc(`${currentUser.uid}`).set({
                  email,
                  username,
                  password,
                  avatar: '',
              });
          } catch (error) {
              alert(error);
          }
      })
      .catch(() => alert("auth failed"));
};
   

export const logout = () => {
    const loggedUser = firebase.auth();
    loggedUser
        .signOut()
        .then(() => alert('logged out'))
        .catch(() => alert('logout error'));
};

export default { register };
