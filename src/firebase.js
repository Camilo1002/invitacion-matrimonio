import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDbwVuWM1nvuq0rj27uonqNFUGwy5Icnog",
  authDomain: "invitacionmatrimonio-c7243.firebaseapp.com",
  projectId: "invitacionmatrimonio-c7243",
  storageBucket: "invitacionmatrimonio-c7243.firebasestorage.app",
  messagingSenderId: "566766304430",
  appId: "1:566766304430:web:2a1bdd0f3aadabea6b013f",
  measurementId: "G-Q07SC83K5B"
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)

// Inicializar Firestore
const db = getFirestore(app)

export { db }
