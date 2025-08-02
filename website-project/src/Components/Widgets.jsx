import React from "react";
import "./DashBoard.css";

export default function AddWidget({ widgets, setWidgets, close }) {
  const toggleWidget = (key) => {
    setWidgets(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="widget">
      <div className="widget-box">
        <h2>Select Widgets</h2>
        <div className="widget-options">
          {["weather", "quote", "tech"].map((key) => (
            <div key={key} className={`widget-card ${widgets[key] ? "active" : ""}`} onClick={() => toggleWidget(key)}>
              {key === "weather" && "☀️ Weather"}
              {key === "quote" && "💭 Quote"}
              {key === "tech" && "⚙️ Tech"}
            </div>
          ))}
        </div>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}