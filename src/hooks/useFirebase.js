import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [adminLoading, setAdminLoading] = useState(true);
  const auth = getAuth();

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);

        // save user to database
        saveUser(email, name);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((err) => {
        setError(err.message);
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };
  const signInUsingEmailPassword = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  //   user update when state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAdminLoading(true);
        fetch(`https://radiant-meadow-05044.herokuapp.com/users/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            if (data?.role === "Admin") {
              setAdmin(true);
            } else {
              setAdmin(false);
            }
          })
          .finally(() => {
            setAdminLoading(false);
          });
      } else {
        setUser({});
        setAdmin(false);
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const saveUser = (email, displayName) => {
    const user = { email, displayName, role: "User" };
    fetch("https://radiant-meadow-05044.herokuapp.com/users", {
      method: `POST`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };
  setTimeout(() => {
    setError("");
  }, 3000);
  return {
    admin,
    user,
    error,
    isLoading,
    adminLoading,
    registerUser,
    signInUsingEmailPassword,
    logOut,
  };
};

export default useFirebase;
