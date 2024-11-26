const admin = require("firebase-admin");
var serviceAccount = require("");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "",
});

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Initialize Firebase

const auth = admin.auth();
const database = admin.firestore();

module.exports = { auth, database };
