import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const { auth, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {auth.user?.name}</h2>
      <button onClick={logout}>Logout</button>
      <p>Vision Board will go here later...</p>
    </div>
  );
}
