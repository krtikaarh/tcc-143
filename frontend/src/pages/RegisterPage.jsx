import { useState } from "react";
import { registerUser } from "../services/api";


function RegisterPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      setSuccess("Registrasi berhasil. Silakan login.");
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Registrasi gagal");
      setSuccess("");
    }
  };

  return (
   <div className="min-h-screen bg-[#f7e8e9] flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center text-[#2c3154] mb-6">Signup</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-2">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create a password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-[#2c3154] text-white py-2 rounded-md hover:[#2c3154]"
          >
            Signup
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#2c3154] font-semibold">Login</a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
