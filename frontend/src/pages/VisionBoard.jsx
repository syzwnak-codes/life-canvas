import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Layout from "../components/Layout";

export default function VisionBoard() {
  const { auth } = useContext(AuthContext);

  return (
    <Layout>
      {/* Ambient greeting (not headline) */}
      <p style={{ opacity: 0.6, marginBottom: "20px" }}>
        Welcome back, {auth.user?.name}
      </p>

      {/* Placeholder for Phase 3 */}
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.5,
        }}
      >
        <p>Your vision board will live here.</p>
      </div>
    </Layout>
  );
}
