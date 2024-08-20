// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.DB_API_KEY,
  authDomain: process.env.DB_AUTH_DOMAIN,
  projectId: process.env.DB_PROJECT_ID,
  storageBucket: process.env.DB_STORAGE_BUCKET,
  messagingSenderId: process.env.DB_MESSAGING_SENDER_ID,
  appId: process.env.DB_APP_ID,
  measurementId: process.env.DB_MEASUREMENT_ID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function getBlogs(){
  const querySnapshot = await getDocs(collection(db, "blog"));
  const blogs: { id: string; title: any; body: any; }[] = [];
  querySnapshot.forEach((doc) => {
    blogs.push({
      id: doc.id,
      title: doc.data().title,
      body: doc.data().body
    })
  });
  return blogs;
}
