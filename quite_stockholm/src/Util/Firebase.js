
import firebase from 'firebase'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import {fireBaseConfig} from '../constants/constants'

firebase.initializeApp({
  apiKey: fireBaseConfig.apiKey,
  authDomain: fireBaseConfig.authDomain,
  projectId: fireBaseConfig.projectId,
  storageBucket: fireBaseConfig.storageBucket
})

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

const storage = firebase.storage();
const storageRef = storage.ref();

const Firebase = {
  getPlacesRef :  function (){
   return db.collection("places")
 },
  getFirebase :  function (){
      return firebase
     }
  ,
  getPlacesList: async function(){
  const placeList = []
   return db.collection("places").get().then(async function(querySnapshot) {
     querySnapshot.forEach(async function(doc) {
         const data = doc.data()
          const place = {
           id: doc.id,
           plats: data.Plats,
           adress: data.Adress,
           kategori: data.Kategori,
           likes: data.Likes,
           image: data.Foto
         }
         placeList.push(await place)
      })
      return placeList
    })
  },
  getPhotoReference: async function(photoName){
    if (photoName !== "") {
      return await storageRef.child(`images/${photoName}`).getDownloadURL()
    }
  },

  addPlaceTip: function(placeTip){
    db.collection("places").add(
       placeTip
    )
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  },

  addPhotoFile: function(file){
    const metadata = {"contentType": file.type }
    const uploadTask = storageRef.child('images/' + file.name.toLowerCase()).put(file, metadata);
    return uploadTask
  }
}

export default Firebase
