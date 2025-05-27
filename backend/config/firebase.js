const admin = require('firebase-admin');
const path = require('path');

// Inisialisasi Firebase Admin dengan service account
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Dapatkan instance Firestore
const db = admin.firestore();

// Atur pengaturan Firestore untuk mode development
const settings = { timestampsInSnapshots: true };
db.settings(settings);

module.exports = { admin, db }; 