import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Layout from "../components/Layout";

export default function Home() {
  const { auth, logout } = useContext(AuthContext);

  return (
    <Layout>
      <h2>Welcome, {auth.user?.name}</h2>
      <button onClick={logout}>Logout</button>
      <p>Vision Board will appear here in Phase 3.</p>
    </Layout>
  );
}
