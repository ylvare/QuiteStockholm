import firebase from 'firebase';
/*import * as firebase from 'firebase/app';*/
import 'firebase/firestore'
import fireBaseConfig from '../constants/app_secrets'

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
    getUpdates :  function (){
    return db.collection("places")
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
    return await storageRef.child(`images/${photoName}`).getDownloadURL()
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
  }
}

export default Firebase
