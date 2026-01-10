import React from "react";

export default function TopNav({ toggleSidebar, isMobile }) {
  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        backgroundColor: "#1976d2",
        color: "white",
        position: "relative",
        zIndex: 8,
      }}
    >
      {/* Left */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={toggleSidebar} style={{ fontSize: "20px" }}>
          ☰
        </button>

        {!isMobile && <h2 style={{ margin: 0 }}>Life Canvas</h2>}
      </div>

      {/* Right */}
      <div>
        {!isMobile && <button style={{ marginRight: "10px" }}>Settings</button>}
        <button>Profile</button>
      </div>
    </div>
  );
}
