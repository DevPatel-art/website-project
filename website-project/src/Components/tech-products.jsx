import React, { useState, useEffect } from "react";

const techList = [
  "Apple Vision Pro",
  "Samsung Galaxy Z Fold",
  "Meta Quest 3",
  "Sony WH-1000XM5",
  "Raspberry Pi 5",
  "Nothing Phone 2",
  "DJI Mini 4 Pro",
  "Steam Deck OLED",
  "Framework Laptop 13",
  "Apple M3 MacBook Air",
  "Google Pixel Fold",
  "OnePlus Open",
  "Anker 737 Power Bank",
  "Logitech MX Keys S",
  "Elgato Stream Deck Plus",
  "Lenovo Legion Go",
  "Amazon Echo Show 15",
  "Asus ROG Ally",
  "TP-Link Deco XE75 Pro",
  "Samsung Smart Monitor M8",
  "Apple iPad Pro (M4)",
  "Sony PlayStation Portal",
  "Intel NUC 13 Extreme",
  "Beats Studio Pro",
  "Bose QuietComfort Ultra",
  "Ring Battery Doorbell Plus",
  "Belkin BoostCharge Pro 3-in-1",
  "Insta360 GO 3",
  "HyperX Cloud III Wireless",
  "Nanoleaf Shapes Ultra Black Triangles"
];


 function TechWidget() {
  const [gadget, setGadget] = useState("");

  useEffect(() => {
    const random = techList[Math.floor(Math.random() * techList.length)];
    setGadget(random);
  }, []);

  return (
    <div className="widget-card">
      <h3>⚙️ Tech of the Day</h3>
      <p>{gadget}</p>
    </div>
  );
}
export default TechWidget