import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-auth";
import NavBar from "./navbar";
import Content from "./Content";

function App() {
  const [page, setPage] = useState("home");
  const [User, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setUser(user));
    return () => unsub();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    setPage("home");
  };

  return (
    <>
      <NavBar setPage={setPage} User={User} onSignOut={handleSignOut} />
      <Content page={page} setPage={setPage} User={User} />
    </>
  );
}

export default App;
