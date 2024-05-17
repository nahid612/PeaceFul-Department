import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// google & github auth provider
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


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

  // google login
  const googleLogin = () =>{
    return signInWithPopup(auth, googleProvider)
  }

  // github login
  const githubLogin = () =>{
    return signInWithPopup(auth, githubProvider)
  }

  const authInfo = {
    createUser,
    user,
    signUser,
    googleLogin,
    githubLogin
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
