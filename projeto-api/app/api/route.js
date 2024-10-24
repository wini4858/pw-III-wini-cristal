import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDJHnLhE215BntDqgVZ1BawLM-fLn0bmV4",
    authDomain: "meuprimeirofirebase-fbac4.firebaseapp.com",
    projectId: "meuprimeirofirebase-fbac4",
    storageBucket: "meuprimeirofirebase-fbac4.appspot.com",
    messagingSenderId: "1078501627330",
    appId: "1:1078501627330:web:9ecb3d6569ce7a125f725b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const dynamic = 'force-static'
 
export async function GET() {
    const query = await getDocs(collection(db, 'Nomes'));
    const dados = [];

    query.forEach(nome => {
        dados.push({ id: nome.id, dados: nome.data() });
    });
 
    return Response.json(dados)
}
