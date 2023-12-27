import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { db } from "../firebase/FirebaseConfig";
import { getDoc, doc } from "firebase/firestore";

export function useDoc(id) {
  console.log(id);
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const getRecipe = async () => {
      const docRef = doc(db, "recipies", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const doc = docSnap.data();
        setRecipe(doc);
        setIsPending(false);
     
      } else {
        toast.error("No such document");
        setIsPending(false);
      }
    };

    getRecipe();
  }, []);

  return { recipe, isPending };
}
