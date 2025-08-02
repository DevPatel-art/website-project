import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "../firebase-auth";

const SignIn = ({ setPage }) => {
  console.log("SignIn component rendered");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMsg("✅ Signed in successfully!");
      setEmail("");
      setPassword("");
      setPage("home");
    } catch (err) {
      setMsg(`❌ ${err.message}`);
    }
  };

  // Google sign in
  const handleGoogle = async () => {
    setMsg("");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);
      if (!snap.exists()) {
        const display = user.displayName || "";
        const [firstName = "", lastName = ""] = display.split(" ");
        await setDoc(
          ref,
          {
            firstName,
            lastName,
            email: user.email || "",
            phone: user.phoneNumber || "",
            provider: "google",
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          },
          { merge: true }
        );
      } else {
        await setDoc(ref, { updatedAt: serverTimestamp() }, { merge: true });
      }

      setMsg("✅ Signed in with Google!");
      setPage("home");
    } catch (err) {
      setMsg(`❌ ${err.message}`);
    }
  };

  return (
    <div className="auth-card">
      <h2>Sign In</h2>

      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>

      {/* Divider + Google button */}
      <div className="oauth">
        <div className="oauth-sep"><span>or</span></div>
        <button type="button" className="google-btn" onClick={handleGoogle}>
          Continue with Google
        </button>
      </div>

      {msg && <p className="auth-msg">{msg}</p>}

      <p className="auth-meta">
        Don’t have an account?{" "}
        <button
          type="button"
          className="linklike"
          onClick={() => setPage("create-account")}
        >
          Create an account
        </button>
      </p>
    </div>
  );
};

export default SignIn;
