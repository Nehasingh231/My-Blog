import { createContext, useContext, useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { auth} from "./firebase";


const authcontext = createContext();

export default function AuthContextProvider({children}) {

     const [user, setUser] = useState(null);
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState(null);

      useEffect(() => {
         setIsLoading(true)
          const unsub = onAuthStateChanged(auth, (user) => {
              if(user) {
                setUser(user);
              } else{
                setUser(null);
              }
              setIsLoading(false)
          });
          return () => unsub();
      }, [])

     const handleSignIn = async() => {
        setIsLoading(true)
         try {
             await signInWithPopup(auth, new GoogleAuthProvider());
         } catch (error) {
            setError(error?.message)
         }
         setIsLoading(false) 
     }

     const handleSignOut = async() => {
        setIsLoading(true)
         try {
             await signOut(auth)
         } catch (error) {
            setError(error?.message)
         }
         setIsLoading(false) 
     }


    return <authcontext.Provider
       value={{
          user,
          isLoading,
          error,
          handleSignIn,
          handleSignOut,
       }}
    >
       {children}
    </authcontext.Provider>
}

export const useAuth = () => useContext(authcontext); //custom hook 