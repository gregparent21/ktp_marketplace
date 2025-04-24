const db = firebase.firestore();

db.collection("test").add({
  message: "Hello from KTP Marketplace",
  timestamp: Date.now()
}).then(docRef => {
  console.log("Test document written with ID: ", docRef.id);
}).catch(error => {
  console.error("Error adding test document: ", error);
});
