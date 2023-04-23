import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYRrlAM5-yVptoA_k4Q4lvQPQOPpIav2A",
  authDomain: "colibri51175.firebaseapp.com",
  projectId: "colibri51175",
  storageBucket: "colibri51175.appspot.com",
  messagingSenderId: "267204079993",
  appId: "1:267204079993:web:685ebe001ec7b079b5ffa8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItems(){

  const productsRef = collection(db, "products")

  const productsSnapShot = await getDocs(productsRef);

  const documents = productsSnapShot.docs;

  const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data()};
  });

  return docsData;
 };

export async function getSingleItem(idURL){
    const docRef = doc(db, "products", idURL);
    const docSnap = await getDoc(docRef);

    return { id: docSnap.id, ...docSnap.data()}
};

export async function getItemsByCategory(categoryid){
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", categoryid))
    
    const productsSnapShot = await getDocs(q);
    
    const documents = productsSnapShot.docs;
    const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data()};
  });

  return docsData;
 };

export async function createOrder(order){
  const collectionOrdersRef = collection(db, "orders");
  const response = await addDoc(collectionOrdersRef, order);
  return response.id;
}

