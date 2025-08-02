import React from "react";
import "./Dashboard.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-auth";
export default function Dashboard({ user }) {
  if (!user) return null;

  const parts = (user.displayName ?? "").trim().split(/\s+/).filter(Boolean);
  const firstName = parts[0] || (user.email?.split("@")[0]) || "User";
  const lastName  = parts.slice(1).join(" ");

  return (
    <div className="dash-page">
      <div className="dash-card">
        <div className="dash-header">
          {user.photoURL ? (
            <img className="avatar-lg" src={user.photoURL} alt="Profile" />
          ) : (
            <div className="avatar-lg">{firstName.charAt(0).toUpperCase()}</div>
          )}
          <div className="dash-titles">
            <h1>Hello, {firstName}</h1>
            <p className="muted">{user.displayName || `${firstName}${lastName ? " " + lastName : ""}`}</p>
          </div>
          <button className="btn" onClick={() => signOut(auth)}>Sign out</button>
        </div>

        <div className="dash-info">
          <div className="row"><span className="label">Email</span><span>{user.email}</span></div>
          <div className="row"><span className="label">First name</span><span>{firstName}</span></div>
          <div className="row"><span className="label">Last name</span><span>{lastName || "—"}</span></div>
          <div className="row"><span className="label">UID</span><span className="mono">{user.uid}</span></div>
        </div>
      </div>
    </div>
  );
}
