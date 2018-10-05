import firebase from 'firebase';
import google_config from './static/data/config.js';


// Initialize Firebase
firebase.initializeApp(google_config);


export default firebase;
