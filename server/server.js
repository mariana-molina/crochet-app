const express = require('express');
const { firebaseApp } = require('./firebase');
const cors = require('cors');
const { json } = require('express');
const {
	doc,
	getFirestore,
	setDoc,
	getDocs,
	deleteDoc,
	collection,
	query,
	where,
} = require('firebase/firestore');

const app = express();
const port = 3000;

const store = getFirestore(firebaseApp);

app.use(cors());
app.use(json());

app.get('/', async (req, res) => {
	const projectsRef = collection(store, 'projects');
	const snapshot = await getDocs(projectsRef);
	res.status(200).json({
		data: snapshot.docs.map(sn => sn.data()),
	});
});
app.get('/:category', async (req, res) => {
	const category = req.params.category;
	const projectsRef = collection(store, 'projects');
	const q = query(projectsRef, where('category', '==', category));
	const querySnapshot = await getDocs(q);
	res.status(200).json({
		data: querySnapshot.docs.map(sn => sn.data()),
	});
});
app.post('/', async (req, res) => {
	const newProject = req.body;
	const snapshot = await setDoc(
		doc(store, 'projects', newProject.id),
		newProject
	);
	res.status(201).json({
		data: snapshot,
	});
});

app.delete('/', async (req, res) => {
	const projectId = req.body.id;
	await deleteDoc(doc(store, 'projects', projectId));
	res.status(200).json({
		message: 'Project succesfully deleted',
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
