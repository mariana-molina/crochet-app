const express = require('express');
const { firebaseApp } = require('./firebase');
const {
	getFirestore,
	addDoc,
	getDocs,
	collection,
} = require('firebase/firestore');
const app = express();
const port = 3000;

const store = getFirestore(firebaseApp);

app.get('/', async (req, res) => {
	const ref = collection(store, 'projects');
	const snapshot = await getDocs(ref);
	res.status(200).json({
		data: snapshot.docs.map(sn => sn.data()),
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
