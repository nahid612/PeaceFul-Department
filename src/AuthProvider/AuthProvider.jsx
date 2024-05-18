/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// google & github auth provider
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // loader
  const [loading, setLoading]= useState(true)
  console.log(loading)

  // Update User Profile
  const updateUserProfile = (name, image, text) =>{
    return updateProfile(auth.currentUser, {
      displayName: name,
       photoURL: image,
       email: text
    })
  }


  // creating user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Observer
  useEffect(() =>{
   const unSubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user)
    setLoading(false)

    });
    return () => unSubscribe
  },[])

  // sign in user
  const signUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // google login
  const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // github login
  const githubLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }

  // SignOut
  const signOut = () =>{
    setUser(null)
    signOut(auth)
  }

  const authInfo = {
    createUser,
    user,
    signUser,
    googleLogin,
    githubLogin,
    signOut,
    loading,
    updateUserProfile
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
