import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 50);
  }, []);

  const handleRegister = async (e) => {
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
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    localStorage.setItem("user", JSON.stringify({ email, fullname, phone }));
    alert("Registrasi berhasil!");
    navigate("/home page");
  };

  const fields = [
    {
      key: "phone",
      label: "Nomor handphone",
      type: "tel",
      placeholder: "+62 812 3456 7890",
      value: phone,
      onChange: setPhone,
      icon: (
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-.414.336-.75.75-.75h2.25a.75.75 0 01.743.648l.405 2.835a.75.75 0 01-.364.756l-1.178.654a13.527 13.527 0 006.668 6.668l.654-1.178a.75.75 0 01.756-.364l2.835.405a.75.75 0 01.648.743V17.25a.75.75 0 01-.75.75h-1.5C7.045 18 2.25 13.205 2.25 7.5V6a.75.75 0 01.75-.75h-.75z" />
        </svg>
      ),
    },
    {
      key: "email",
      label: "Alamat email",
      type: "email",
      placeholder: "nama@email.com",
      value: email,
      onChange: setEmail,
      icon: (
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
        </svg>
      ),
    },
    {
      key: "fullname",
      label: "Nama lengkap",
      type: "text",
      placeholder: "John Doe",
      value: fullname,
      onChange: setFullname,
      icon: (
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
  ];

  const eyeIcon = (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
  const eyeOffIcon = (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  );
  const lockIcon = (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V7.5a4.5 4.5 0 00-9 0v3M6.75 10.5h10.5A1.5 1.5 0 0118.75 12v6.75A1.5 1.5 0 0117.25 20.25H6.75A1.5 1.5 0 015.25 18.75V12a1.5 1.5 0 011.5-1.5z" />
    </svg>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .reg-root {
          font-family: 'Inter', sans-serif;
          width: 100vw; height: 100vh;
          display: flex; overflow: hidden;
          background: #f0f6fa;
        }

        /* LEFT */
        .reg-left {
          width: 38%;
          background: #003B59;
          position: relative;
          display: flex; flex-direction: column;
          justify-content: center; align-items: flex-start;
          padding: 0 5%;
          overflow: hidden;
          opacity: 0; transform: translateX(-40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reg-left.show { opacity: 1; transform: translateX(0); }

        .circle {
          position: absolute; border-radius: 50%;
          background: rgba(255,255,255,0.04);
          animation: floatY 6s ease-in-out infinite;
        }
        .c1 { width: 380px; height: 380px; top: -100px; right: -100px; animation-delay: 0s; }
        .c2 { width: 220px; height: 220px; bottom: -50px; left: -50px; animation-delay: 1.5s; }
        .c3 { width: 120px; height: 120px; top: 45%; left: 25%; animation-delay: 3s; }
        .c4 { width: 280px; height: 280px; bottom: 80px; right: -80px; background: rgba(94,190,218,0.06); animation-delay: 0.8s; }

        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }

        .left-content { position: relative; z-index: 1; }

        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(94,190,218,0.15);
          border: 1px solid rgba(94,190,218,0.25);
          border-radius: 100px; padding: 6px 14px; margin-bottom: 2rem;
        }
        .badge-dot { width: 8px; height: 8px; background: #5ebeda; border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        .badge-text { font-size: 11px; font-weight: 500; color: #a8dced; letter-spacing: 1px; text-transform: uppercase; }

        .left-heading { font-size: 38px; font-weight: 700; color: #fff; letter-spacing: -1.2px; line-height: 1.1; margin-bottom: 1rem; }
        .left-heading span { color: #5ebeda; }
        .left-desc { font-size: 14px; color: rgba(255,255,255,0.42); line-height: 1.75; max-width: 260px; margin-bottom: 2.5rem; }

        .already-box {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px; padding: 1.4rem 1.6rem;
          max-width: 260px;
        }
        .already-text { font-size: 13px; color: rgba(255,255,255,0.55); line-height: 1.6; margin-bottom: 1rem; }
        .btn-masuk {
          width: 100%; height: 42px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px; color: #fff;
          font-size: 13.5px; font-weight: 500;
          font-family: 'Inter', sans-serif; cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-masuk:hover { background: rgba(255,255,255,0.18); transform: translateY(-1px); }
        .btn-masuk:active { transform: scale(0.98); }

        /* RIGHT */
        .reg-right {
          flex: 1; background: #fff;
          display: flex; align-items: center; justify-content: center;
          padding: 2rem 4%;
          overflow-y: auto;
          opacity: 0; transform: translateX(40px);
          transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
        }
        .reg-right.show { opacity: 1; transform: translateX(0); }

        .form-box { width: 100%; max-width: 400px; padding: 0.5rem 0; }

        .form-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
        .form-eyebrow-line { width: 24px; height: 2.5px; background: #003B59; border-radius: 2px; }
        .form-eyebrow-text { font-size: 11px; font-weight: 600; color: #003B59; letter-spacing: 1.2px; text-transform: uppercase; }

        .form-title { font-size: 26px; font-weight: 700; color: #001f30; letter-spacing: -0.5px; line-height: 1.2; margin-bottom: 5px; }
        .form-sub { font-size: 13.5px; color: #94a3b8; margin-bottom: 1.8rem; }

        .field { margin-bottom: 1rem; }
        .field-label { display: block; font-size: 11px; font-weight: 600; color: #64748b; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 7px; }
        .field-wrap { position: relative; }
        .field-icon {
          position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
          color: #94a3b8; display: flex; pointer-events: none; transition: color 0.2s;
        }
        .field-wrap.focused .field-icon { color: #003B59; }

        .field-input {
          width: 100%; height: 46px; padding: 0 44px;
          border: 1.5px solid #e2e8f0; border-radius: 12px;
          font-size: 13.5px; color: #001f30; background: #f8fafc;
          font-family: 'Inter', sans-serif; outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s, transform 0.15s;
        }
        .field-input::placeholder { color: #c0cfe0; }
        .field-input:focus {
          border-color: #003B59; background: #fff;
          box-shadow: 0 0 0 4px rgba(0,59,89,0.08);
          transform: translateY(-1px);
        }

        .eye-btn {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          color: #94a3b8; display: flex; padding: 4px; border-radius: 6px;
          transition: color 0.15s, background 0.15s;
        }
        .eye-btn:hover { color: #003B59; background: #f0f6fa; }

        .hint { font-size: 11px; color: #b0c4d4; margin-top: 5px; padding-left: 2px; }

        .btn-register {
          width: 100%; height: 48px;
          background: #003B59; color: #fff;
          border: none; border-radius: 12px;
          font-size: 14.5px; font-weight: 600;
          font-family: 'Inter', sans-serif; cursor: pointer;
          letter-spacing: 0.2px; margin-top: 1.4rem;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .btn-register:hover { background: #004e75; box-shadow: 0 8px 24px rgba(0,59,89,0.28); transform: translateY(-1px); }
        .btn-register:active { transform: scale(0.98); box-shadow: none; }
        .btn-register:disabled { background: #94a3b8; cursor: not-allowed; transform: none; box-shadow: none; }

        .spinner {
          width: 18px; height: 18px;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: #fff; border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .ripple {
          position: absolute; border-radius: 50%;
          background: rgba(255,255,255,0.25);
          transform: scale(0);
          animation: rippleAnim 0.55s linear;
          pointer-events: none;
        }
        @keyframes rippleAnim { to { transform: scale(4); opacity: 0; } }

        .bottom-note { text-align: center; margin-top: 1.2rem; font-size: 12px; color: #94a3b8; }
        .bottom-note strong { color: #003B59; font-weight: 600; cursor: pointer; }

        @media (max-width: 768px) {
          .reg-left { display: none; }
          .reg-right { padding: 2rem 6%; }
          .form-title { font-size: 22px; }
        }
      `}</style>

      <div className="reg-root">
        {/* ── Left Panel ── */}
        <div className={`reg-left ${mounted ? "show" : ""}`}>
          <div className="circle c1" /><div className="circle c2" />
          <div className="circle c3" /><div className="circle c4" />

          <div className="left-content">
            <div className="badge">
              <div className="badge-dot" />
              <span className="badge-text">Property Platform</span>
            </div>

            <h1 className="left-heading">Hö<span>me</span>ly</h1>
            <p className="left-desc">
              Bergabunglah dengan ribuan pengguna yang telah menemukan hunian impian mereka.
            </p>

            <div className="already-box">
              <p className="already-text">Sudah punya akun? Masuk dan lanjutkan perjalanan anda.</p>
              <button className="btn-masuk" onClick={() => navigate("/login")}>
                Masuk sekarang →
              </button>
            </div>
          </div>
        </div>

        {/* ── Right Panel ── */}
        <div className={`reg-right ${mounted ? "show" : ""}`}>
          <div className="form-box">
            <div className="form-eyebrow">
              <div className="form-eyebrow-line" />
              <span className="form-eyebrow-text">Buat akun baru</span>
            </div>
            <h2 className="form-title">Daftar sekarang ✨</h2>
            <p className="form-sub">Isi data diri anda untuk memulai.</p>

            <form onSubmit={handleRegister}>
              {/* Dynamic fields */}
              {fields.map((f) => (
                <div className="field" key={f.key}>
                  <label className="field-label">{f.label}</label>
                  <div className={`field-wrap ${focusedField === f.key ? "focused" : ""}`}>
                    <span className="field-icon">{f.icon}</span>
                    <input
                      className="field-input"
                      type={f.type}
                      placeholder={f.placeholder}
                      value={f.value}
                      onChange={(e) => f.onChange(e.target.value)}
                      onFocus={() => setFocusedField(f.key)}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>
              ))}

              {/* Password */}
              <div className="field">
                <label className="field-label">Kata sandi</label>
                <div className={`field-wrap ${focusedField === "password" ? "focused" : ""}`}>
                  <span className="field-icon">{lockIcon}</span>
                  <input
                    className="field-input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Minimal 6 karakter"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                  />
                  <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? eyeOffIcon : eyeIcon}
                  </button>
                </div>
                <p className="hint">Gunakan minimal 6 karakter dengan kombinasi huruf dan angka.</p>
              </div>

              {/* Confirm Password */}
              <div className="field">
                <label className="field-label">Ulangi kata sandi</label>
                <div className={`field-wrap ${focusedField === "confirm" ? "focused" : ""}`}>
                  <span className="field-icon">{lockIcon}</span>
                  <input
                    className="field-input"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Ulangi kata sandi anda"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onFocus={() => setFocusedField("confirm")}
                    onBlur={() => setFocusedField(null)}
                  />
                  <button type="button" className="eye-btn" onClick={() => setShowConfirm(!showConfirm)}>
                    {showConfirm ? eyeOffIcon : eyeIcon}
                  </button>
                </div>
                {confirmPassword && password !== confirmPassword && (
                  <p style={{ fontSize: 11, color: "#e85555", marginTop: 5, paddingLeft: 2 }}>
                    Kata sandi tidak cocok.
                  </p>
                )}
                {confirmPassword && password === confirmPassword && confirmPassword.length >= 6 && (
                  <p style={{ fontSize: 11, color: "#22a06b", marginTop: 5, paddingLeft: 2 }}>
                    Kata sandi cocok ✓
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-register"
                disabled={loading}
                onClick={(e) => {
                  if (loading) return;
                  const btn = e.currentTarget;
                  const circle = document.createElement("span");
                  const d = Math.max(btn.clientWidth, btn.clientHeight);
                  const rect = btn.getBoundingClientRect();
                  circle.className = "ripple";
                  circle.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - rect.left - d / 2}px;top:${e.clientY - rect.top - d / 2}px`;
                  btn.appendChild(circle);
                  setTimeout(() => circle.remove(), 600);
                }}
              >
                {loading ? (
                  <><div className="spinner" /><span>Mendaftar...</span></>
                ) : "Buat akun"}
              </button>

              <p className="bottom-note">
                Dengan mendaftar, kamu setuju dengan <strong>Syarat & Ketentuan</strong> kami.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}