import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

export const getDocumentRealTime = (collectionName, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const docRef = doc(firestore, collectionName, id);

    const unsubscribe = onSnapshot(
      docRef,
      (snap) => {
        if (snap.data()) {
          setDocument({ ...snap.data(), id: snap.id });
          setError(null);
        } else {
          setError("Такого проекта нет!!!");
        }
      },
      (err) => {
        setError(err);
      }
    );

    return () => unsubscribe();
  }, [collectionName, id]);

  return { document, error };
};

export const addDocument = async (collectionName, newDoc) => {
  const [error, setError] = useState(null);
  const collectionRef = collection(firestore, collectionName);

  try {
    await addDoc(collectionRef, newDoc);
    setError(null);
  } catch (err) {
    setError(err.message);
  }

  return { error };
};
