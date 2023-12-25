import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";

function useCollection() {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setIsPending(true)
    const unsubscribe = onSnapshot(
      collection(db, "recipies"),
      (snapshot) => {
        const results = []
       snapshot.docs.forEach((doc) => {
        results.push({id: doc.id, ...doc.data()})
        setDocuments(results)
        setIsPending(false)
       })
      },
      (error) => {
        console.log(error);
        setError(error)
        setIsPending(false)
      }
    );
    return () => unsubscribe();
  }, []);

  return { documents, isPending, error };
}

export default useCollection;
