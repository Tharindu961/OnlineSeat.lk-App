import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDqGXeGO14a-ZkWTeG7Wr-pASEmLLJik30",
    authDomain: "bus-booking-43159.firebaseapp.com",
    databaseURL: "https://bus-booking-43159.firebaseio.com",
    projectId: "bus-booking-43159",
    storageBucket: "bus-booking-43159.appspot.com",
    messagingSenderId: "803354273782",
    appId: "1:803354273782:web:6f179ba9defd578ccec9d7",
    measurementId: "G-M8SVVCXG4F"
  };
  const fire = firebase.initializeApp(config);
  export default fire;