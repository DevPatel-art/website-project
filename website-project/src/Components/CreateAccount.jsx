import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase-auth";

const CreateAccount = ({ setPage }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [msg, setMsg] = useState("");

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setMsg("");

    if (form.password !== form.confirm) {
      setMsg("❌ Passwords do not match.");
      return;
    }

    try {
      const cred = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const uid = cred.user.uid;
      
      await setDoc(doc(db, "users", uid), {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        createdAt: serverTimestamp(),
      });

      setMsg("✅ Account created successfully!");
      setForm({
        firstName: "", lastName: "", phone: "", email: "", password: "", confirm: ""
      });
    } catch (err) {
      setMsg(`❌ ${err.message}`);
    }
  };

  return (
    <div className="auth-card">
      <h2>Create an Account</h2>
      <form onSubmit={handleCreate}>
        <div className="grid-2">
          <input
            name="firstName"
            placeholder="First name"
            value={form.firstName}
            onChange={onChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last name"
            value={form.lastName}
            onChange={onChange}
            required
          />
        </div>

        <input
          name="phone"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={onChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password (min 6)"
          value={form.password}
          onChange={onChange}
          required
        />

        <input
          type="password"
          name="confirm"
          placeholder="Confirm password"
          value={form.confirm}
          onChange={onChange}
          required
        />

        <button type="submit">Create Account</button>
      </form>

      {msg && <p className="auth-msg">{msg}</p>}

      <p className="auth-meta">
        Already have an account?{" "}
        <button
          type="button"
          className="linklike"
          onClick={() => setPage("signin")}
        >
          Sign in
        </button>
      </p>
    </div>
  );
};

export default CreateAccount;
