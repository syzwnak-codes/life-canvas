import React from "react";

export default function SideNav({ isOpen, isMobile }) {
  const sidebarWidth = 240;

  return (
    <div
      style={{
        position: isMobile ? "fixed" : "relative",
        top: isMobile ? 0 : 0,
        left: isMobile ? (isOpen ? 0 : -sidebarWidth) : 0,
        width: isOpen ? sidebarWidth : 60,
        height: "100vh",
        backgroundColor: "#eeeeee",
        transition: "all 0.25s ease",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* App Name (Mobile only or expanded desktop) */}
      {(isMobile || isOpen) && (
        <div style={{ padding: "16px", fontWeight: "bold", fontSize: "18px" }}>
          Life Canvas
        </div>
      )}

      {/* Navigation */}
      <div style={{ flex: 1 }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ padding: "10px" }}>
            {isOpen ? "Vision Board" : "📌"}
          </li>
          <li style={{ padding: "10px" }}>
            {isOpen ? "Calendar & Tasks" : "📅"}
          </li>
          <li style={{ padding: "10px" }}>
            {isOpen ? "Journal" : "📝"}
          </li>
          <li style={{ padding: "10px" }}>
            {isOpen ? "Pomodoro" : "⏱️"}
          </li>
        </ul>
      </div>

      {/* Settings at bottom (Mobile only or expanded desktop) */}
      {(isMobile || isOpen) && (
        <div style={{ padding: "16px", borderTop: "1px solid #ccc" }}>
          <button>Settings</button>
        </div>
      )}
    </div>
  );
}
