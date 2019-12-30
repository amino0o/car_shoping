import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDbnvnakUxT6-6I_vAC2FqOtWEadsONUK8",
    authDomain: "my-store-58783.firebaseapp.com",
    databaseURL: "https://my-store-58783.firebaseio.com",
    projectId: "my-store-58783",
    storageBucket: "my-store-58783.appspot.com",
    messagingSenderId: "485752616429",
    appId: "1:485752616429:web:90e22489896b7d148423e4",
    measurementId: "G-9JV1TSWEN7"
};

export const createUserProfileDocument = async (userAuth , additionalData) =>{

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const { displayName , email } = userAuth;
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user ' , error.massage)
        }
    }

    return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
