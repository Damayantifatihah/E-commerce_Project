import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg2 from "../../assets/img/bgLogin.png";

export default function Register() {
  const navigate = useNavigate();

  
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
  e.preventDefault();
  if (!phone || !email || !fullname || !password || !confirmPassword) {
    alert("Semua form wajib diisi!");
    return;
  }
  if (password.length < 6) {
    alert("Kata sandi harus terdiri dari minimal 6 karakter!");
    return;
  }
  if (password !== confirmPassword) {
    alert("Password dan Ulangi Password tidak sama!");
    return;
  }

  // Simpan data user di localStorage
  localStorage.setItem("user", JSON.stringify({ email, fullname, phone }));
  alert("Registrasi berhasil!");
  navigate("/home page");
};


  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      <img
        src={bg2}
        alt="Background"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div className="w-full h-screen flex items-center justify-center relative">
        <div className="relative z-10 bg-white/90 backdrop-blur-md w-[90%] max-w-4xl rounded-2xl shadow-xl flex overflow-hidden">
          <div className="w-1/2 bg-transparent flex flex-col items-center justify-center p-6">
            <p className="text-blue-600 text-lg font-bold mb-4">Sudah Memiliki Akun?</p>
            <button onClick={() => navigate("/login")} className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
              Masuk
            </button>
          </div>
          <div className="w-1/2 bg-white p-8">
            <h2 className="text-xl font-bold mb-6">Buat Akun</h2>
            <form className="flex flex-col gap-4" onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Nomor Handphone"
                className="border border-gray-300 p-2 rounded-md"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="border border-gray-300 p-2 rounded-md"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <input
                type="password"
                placeholder="Kata Sandi Minimal 6 Karakter!"
                className="border border-gray-300 p-2 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Ulangi Kata Sandi"
                className="border border-gray-300 p-2 rounded-md"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition"
              >
                Buat Akun
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
