import { useState } from "react";
import { auth } from "../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";

function useSignup() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext();
  const signup = async (displayName, email, password) => {
    setIsPending(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName,
        });
        dispatch({ type: "LOGIN", payload: userCredential.user });
        setIsPending(false);
        setError(null);
        toast.success("You are signup, successfully !");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setError(errorMessage);
        setIsPending(false);
      });
  };

  return { isPending, error, signup };
}

export default useSignup;
