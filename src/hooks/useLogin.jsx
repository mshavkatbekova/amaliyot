import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase/FirebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

function useLogin() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext();
  const login = async (email, password) => {
    setIsPending(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        dispatch({ type: "LOGIN", payload: userCredential.user });
        setIsPending(false);
        setError(null);
        toast.success("Well come back !");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setError(errorMessage);
        setIsPending(false);
      });
  };

  const enterWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
        setIsPending(false);
        setError(null);
        toast.success("Well come back!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(error.message);
        setError(errorMessage);
        setIsPending(false);
      });
  };

  return { isPending, error, login, enterWithGoogle };
}

export { useLogin };
