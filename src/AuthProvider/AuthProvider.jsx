import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  console.log(user)

  // creating user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Observer
  useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
        setUser(user)
    });
  },[])

  // sign in user
  const signUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)

  }

  const authInfo = {
    createUser,
    user,
    signUser,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
