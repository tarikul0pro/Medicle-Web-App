 import {useEffect, useState} from 'react'
import {sendEmailVerification,
       updateProfile,
       createUserWithEmailAndPassword,
       signInWithEmailAndPassword,
       GithubAuthProvider,
       signOut,
       getAuth, 
       signInWithPopup,
       GoogleAuthProvider,
      onAuthStateChanged, 
      } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";
import Service from '../components/Service/Service';

initializeAuthentication()

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth();
const useFirebase = () => {

   const [user, setUser] = useState({});
   const [error, setError] = useState("");
   const [email, setEmail] = useState("");
   const [name, setName]   = useState("");
   const [photo, setPhoto] = useState("");
   const [password, setPassword] = useState("");


 //google sign in

   function signInWithGoogle(){
    return signInWithPopup(auth, googleProvider)
}

//Github sign in

function signInWithGithub(){
  signInWithPopup(auth, githubProvider)
  .then(result =>{
      setUser(result.user);
  }).catch(error => {
      setError(error.message)
  });
}
//Email sign in

function signInWithEmail(e){
  e.preventDefault();
  signInWithEmailAndPassword(auth,email, password)
  .then(result =>{
      setUser(result.user);
  }).catch(error => {
      setError(error.message)
  });
}
 function setNameAndImage (){
  updateProfile(auth.currentUser, {
    displayName: name, photoURL: photo,
  }).then(() => {
    
  }).catch((error) => {
    setError(error.message)
  });
}
 // Email verification sent!
 function eamailVerify(){
  sendEmailVerification(auth.currentUser)
  .then(() => {
   alert(`an Verification hs  benn set to  `)
  });

 }

//Get the currently signed-in user
  useEffect(() =>{
   const unsubscribe = onAuthStateChanged(auth, (signInUser) => {
        if (signInUser) {
          setUser(signInUser);
        }
      });
      return () => unsubscribe;
  },[]);
 // logout
  function logOut(){
    signOut(auth)
         .then((result) => {
          setUser({})
         })
        .catch((error) => {
        setError(error.message)
      });
 }


 //sign up with email password
 function signUp(e){
   e.preventDefault()
  createUserWithEmailAndPassword(auth, email, password)
  .then((result)=>{
    setNameAndImage ();
    eamailVerify();
    alert('user has been created ')
  }).catch(error =>{
    setError(error.message)
  })
 }


 
 //getName
 function getName(e){
   setName(e?.target?.value)
 }
 
 function getEmail(e){
  setEmail(e?.target?.value)

}
 //getPassword

 function getPassword(e){
  setPassword(e?.target?.value)

}
//getPhoto URL

function getPhoto(e){
  setPhoto(e?.target?.value)

}

//Get the currently signed-in user end
    return{
      eamailVerify,
      getName,
      signUp,
      logOut,
      getEmail,
      signInWithEmail,
      getPassword,
      getPhoto,
      user,
      error,
      setUser,
      setError,
      signInWithGoogle,
      signInWithGithub,
        

    } ;
};

export default useFirebase; 

