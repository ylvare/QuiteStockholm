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
    getPlacesList: async function(){
    const placeList = []
     return db.collection("places").get().then(async function(querySnapshot) {
       querySnapshot.forEach(async function(doc) {
           const data = doc.data()
            const place = {
             id: doc.id,
             plats: data.Plats,
             adress: data.Adress,
             category: data.Kategori,
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
  }
}


export default Firebase
