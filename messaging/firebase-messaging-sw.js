// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.11.0/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-N7bwMhJRC1hqDwRXAZtW2FJu54uh3sc",
    authDomain: "chat-app-9af3e.firebaseapp.com",
    databaseURL: "https://chat-app-9af3e.firebaseio.com",
    projectId: "chat-app-9af3e",
    storageBucket: "chat-app-9af3e.appspot.com",
    messagingSenderId: "39364130335",
    appId: "1:39364130335:web:a57c7a7065568e7407872a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



