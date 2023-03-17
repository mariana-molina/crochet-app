const dotenv = require('dotenv');
const { initializeApp } = require('firebase/app');
dotenv.config();

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOM,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSEGE_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MESUAREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

module.exports = {
	firebaseApp,
};
