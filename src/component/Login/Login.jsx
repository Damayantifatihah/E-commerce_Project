import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/img/bgLogin.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email }));
      alert("Login berhasil!");
      navigate("/home page");
    } else {
      alert("Form wajib diisi lengkap!");
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src={background}
        alt="Background"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white/90 backdrop-blur-md w-[90%] max-w-4xl rounded-2xl shadow-xl flex overflow-hidden">
          <div className="w-1/2 flex flex-col items-center justify-center p-6">
            <p className="text-blue-600 text-lg font-bold text-center">
              Silahkan masuk ke akun <span className="poppins ">Hömely</span> anda
            </p>
          </div>
          <div className="w-1/2 bg-white p-8">
            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 mt-4 p-2 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Kata Sandi"
                className="border border-gray-300 mt-4 p-2 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-900 text-white py-2 rounded-md mt-4 hover:bg-blue-800 transition"
              >
                Masuk
              </button>

              <button
                onClick={() => navigate("/register")}
                type="button"
                className="bg-gray-200 text-black font-semibold py-2 rounded-md border border-gray-400 mt-4 hover:bg-gray-300 transition"
              >
                Daftar Sekarang?
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
