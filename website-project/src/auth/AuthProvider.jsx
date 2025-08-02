import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-auth";

const AuthCtx = createContext({ user: null, loading: true });
export const useAuth = () => useContext(AuthCtx);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u ?? null);
      setLoading(false);
    });
    return unsub;
  }, []);

  return (
    <AuthCtx.Provider value={{ user, loading }}>
      {children}
    </AuthCtx.Provider>
  );
}
