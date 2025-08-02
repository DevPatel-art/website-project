import React, { useState } from "react";
import "./Dashboard.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-auth";
import AddWidget from "./Widgets";
import WeatherWidget from "./Weather";
import QuoteWidget from "./Quote";
import TechWidget from "./tech-products";

export default function Dashboard({ user }) {
  if (!user) return null;

  const parts = (user.displayName ?? "").trim().split(/\s+/).filter(Boolean);
  const firstName = parts[0] || (user.email?.split("@")[0]) || "User";
  const lastName = parts.slice(1).join(" ");

  const [showModal, setShowModal] = useState(false);
  const [widgets, setWidgets] = useState({
    weather: false,
    quote: false,
    tech: false,
  });

  return (
    <div className="dash-page">
      <div className="dash-card">
        <div className="dash-header">
          <button className="btn" onClick={() => setShowModal(true)}>
            + Add Widget
          </button>

          {showModal && (
            <AddWidget
              widgets={widgets}
              setWidgets={setWidgets}
              close={() => setShowModal(false)}
            />
          )}

          {user.photoURL ? (
            <img className="avatar-lg" src={user.photoURL} alt="Profile" />
          ) : (
            <div className="avatar-lg">{firstName.charAt(0).toUpperCase()}</div>
          )}

          <div className="dash-titles">
            <h1>Hello, {firstName}</h1>
            <p className="muted">
              {user.displayName || `${firstName}${lastName ? " " + lastName : ""}`}
            </p>
          </div>

          <button className="btn" onClick={() => signOut(auth)}>
            Sign out
          </button>
        </div>

      {widgets.weather && <WeatherWidget />}
      {widgets.quote && <QuoteWidget />}
      {widgets.tech && <TechWidget />}


        <div className="dash-info">
          <div className="row">
            <span className="label">Email</span>
            <span>{user.email}</span>
          </div>
          <div className="row">
            <span className="label">First name</span>
            <span>{firstName}</span>
          </div>
          <div className="row">
            <span className="label">Last name</span>
            <span>{lastName || "—"}</span>
          </div>
          <div className="row">
            <span className="label">UID</span>
            <span className="mono">{user.uid}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
