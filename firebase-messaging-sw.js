// firebase-messaging-sw.js

// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYY2GQqS0tCXb7Oxw8AWXhpexq9e8VRUs",
  authDomain: "aspirehub-32863.firebaseapp.com",
  projectId: "aspirehub-32863",
  storageBucket: "aspirehub-32863.appspot.com",
  messagingSenderId: "686810111182",
  appId: "1:686810111182:web:4290b4b1b6e64934ec449f",
  measurementId: "G-KX41R0SSMY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
