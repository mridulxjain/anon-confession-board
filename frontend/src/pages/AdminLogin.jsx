import { useState } from "react";

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adminEmail = import.meta.env.ADMIN_EMAIL;
    const adminPassword = import.meta.env.ADMIN_PASSWORD;
    
    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("admin", "true");
      onLogin();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-text">
      <form
        onSubmit={handleSubmit}
        className="bg-surface border border-border shadow-lg rounded-xl p-6 w-96"
      >
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 border rounded bg-background"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded bg-background"
        />
        <button
          type="submit"
          className="w-full py-3 bg-accent text-background rounded hover:bg-opacity-80"
        >
          Login
        </button>
      </form>
    </div>
  );
}