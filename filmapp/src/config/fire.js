import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCisSU5lHW_yxpn4SE_ZP8pw1h-mUIoSsE",
    authDomain: "filmbuff-56d7a.firebaseapp.com",
    databaseURL: "https://filmbuff-56d7a.firebaseio.com",
    projectId: "filmbuff-56d7a",
    storageBucket: "filmbuff-56d7a.appspot.com",
    messagingSenderId: "568301885727", 
};
const fire = firebase.initializeApp(config);
export default fire;