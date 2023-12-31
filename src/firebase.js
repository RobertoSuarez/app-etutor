import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAOht7tSe2PAQjTH9l1F_Re7J7Gt0wxRp0',
//   authDomain: 'e-tutor-57339.firebaseapp.com',
//   projectId: 'e-tutor-57339',
//   storageBucket: 'e-tutor-57339.appspot.com',
//   messagingSenderId: '463445450637',
//   appId: '1:463445450637:web:a8a3089684f0d41cae67c4',
//   measurementId: 'G-HYQK1L0K1E',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyA9vBaSZpWEyn3f1RbM_x2JdbQvliA0O2Q',
  authDomain: 'e-tutor-8e3ab.firebaseapp.com',
  projectId: 'e-tutor-8e3ab',
  storageBucket: 'e-tutor-8e3ab.appspot.com',
  messagingSenderId: '795884970385',
  appId: '1:795884970385:web:a40ab25f01b4b754ccba30',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
