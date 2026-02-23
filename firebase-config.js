const firebaseConfig = {
  apiKey: "AIzaSyDJF0DSEOC78eotfKQ7lqYHzZ8ImWA3eSo",
  authDomain: "himatika-91e47.firebaseapp.com",
  projectId: "himatika-91e47",
  storageBucket: "himatika-91e47.firebasestorage.app",
  messagingSenderId: "81243402605",
  appId: "1:81243402605:web:8d7c57efebadf0fd5fea64",
  measurementId: "G-E55YJ3Q4WX"
};

if (typeof firebase === 'undefined') {
  console.warn('Firebase SDK not loaded. Make sure firebase-app-compat and firebase-auth-compat are included in index.html');
} else {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    console.error('Error initializing Firebase:', err);
  }
}
