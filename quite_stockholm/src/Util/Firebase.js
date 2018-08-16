import firebase from 'firebase';
/*import * as firebase from 'firebase/app';*/
import 'firebase/firestore'
import fireBaseConfig from '../constants/app_secrets'

firebase.initializeApp({
  apiKey: fireBaseConfig.apiKey,
  authDomain: fireBaseConfig.authDomain,
  projectId: fireBaseConfig.projectId
})

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

const Firebase = {
    getPlacesList: async function(){
     return await db.collection("places").get().then(function(querySnapshot) {
              return querySnapshot
          })
    }
}

export default Firebase
