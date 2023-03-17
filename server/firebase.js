// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
// const { getAnalytics } = require('firebase/analytics');´
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAb-suUZ5ERK5K2D6BHh4BXbl2R0VkvIAg',
	authDomain: 'crochet-fullstack.firebaseapp.com',
	projectId: 'crochet-fullstack',
	storageBucket: 'crochet-fullstack.appspot.com',
	messagingSenderId: '455770251273',
	appId: '1:455770251273:web:3ec718971e28c2b16a98d8',
	measurementId: 'G-P23HQ468TZ',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

module.exports = {
	firebaseApp,
};
