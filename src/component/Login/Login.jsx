import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 50);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Form wajib diisi lengkap!");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    localStorage.setItem("user", JSON.stringify({ email }));
    alert("Login berhasil!");
    navigate("/home page");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .login-root {
          font-family: 'Inter', sans-serif;
          width: 100vw;
          height: 100vh;
          display: flex;
          overflow: hidden;
          background: #f0f6fa;
        }

        .left-panel {
          width: 52%;
          background: #003B59;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 0 5%;
          overflow: hidden;
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .left-panel.show { opacity: 1; transform: translateX(0); }

        .circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          animation: floatY 6s ease-in-out infinite;
        }
        .c1 { width: 420px; height: 420px; top: -120px; right: -80px; animation-delay: 0s; }
        .c2 { width: 240px; height: 240px; bottom: -60px; left: -60px; animation-delay: 1.5s; }
        .c3 { width: 140px; height: 140px; top: 50%; left: 30%; animation-delay: 3s; }
        .c4 { width: 320px; height: 320px; bottom: 60px; right: -100px; background: rgba(94,190,218,0.06); animation-delay: 0.8s; }

        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .left-content { position: relative; z-index: 1; }

        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(94,190,218,0.15);
          border: 1px solid rgba(94,190,218,0.25);
          border-radius: 100px;
          padding: 6px 14px;
          margin-bottom: 2rem;
        }
        .badge-dot {
          width: 8px; height: 8px;
          background: #5ebeда;
          background: #5ebeda;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        .badge-text { font-size: 11px; font-weight: 500; color: #a8dced; letter-spacing: 1px; text-transform: uppercase; }

        .left-heading {
          font-size: 46px; font-weight: 700; color: #fff;
          letter-spacing: -1.5px; line-height: 1.08; margin-bottom: 1.2rem;
        }
        .left-heading span { color: #5ebeda; }

        .left-desc {
          font-size: 15px; color: rgba(255,255,255,0.45);
          line-height: 1.75; max-width: 320px; margin-bottom: 3rem;
        }

        .stat-grid { display: flex; gap: 2.5rem; }
        .stat-num { font-size: 24px; font-weight: 700; color: #fff; letter-spacing: -0.5px; }
        .stat-label { font-size: 12px; color: rgba(255,255,255,0.35); margin-top: 2px; }

        .right-panel {
          flex: 1;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 4%;
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
        }
        .right-panel.show { opacity: 1; transform: translateX(0); }

        .form-box { width: 100%; max-width: 380px; }

        .form-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
        .form-eyebrow-line { width: 24px; height: 2.5px; background: #003B59; border-radius: 2px; }
        .form-eyebrow-text { font-size: 11px; font-weight: 600; color: #003B59; letter-spacing: 1.2px; text-transform: uppercase; }

        .form-title { font-size: 28px; font-weight: 700; color: #001f30; letter-spacing: -0.6px; line-height: 1.2; margin-bottom: 6px; }
        .form-sub { font-size: 14px; color: #94a3b8; margin-bottom: 2.4rem; }

        .field { margin-bottom: 1.2rem; }
        .field-label {
          display: block; font-size: 11.5px; font-weight: 600;
          color: #64748b; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 8px;
        }
        .field-wrap { position: relative; }
        .field-icon {
          position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
          color: #94a3b8; display: flex; pointer-events: none; transition: color 0.2s;
        }
        .field-wrap.focused .field-icon { color: #003B59; }

        .field-input {
          width: 100%; height: 50px; padding: 0 44px;
          border: 1.5px solid #e2e8f0; border-radius: 14px;
          font-size: 14px; color: #001f30; background: #f8fafc;
          font-family: 'Inter', sans-serif; outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s, transform 0.15s;
        }
        .field-input::placeholder { color: #c0cfe0; }
        .field-input:focus {
          border-color: #003B59;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(0,59,89,0.08);
          transform: translateY(-1px);
        }

        .eye-btn {
          position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          color: #94a3b8; display: flex; padding: 4px;
          border-radius: 6px; transition: color 0.15s, background 0.15s;
        }
        .eye-btn:hover { color: #003B59; background: #f0f6fa; }

        .forgot { text-align: right; margin-top: 7px; }
        .forgot-link { font-size: 12px; color: #003B59; font-weight: 500; cursor: pointer; }
        .forgot-link:hover { text-decoration: underline; }

        .btn-login {
          width: 100%; height: 50px;
          background: #003B59; color: #fff;
          border: none; border-radius: 14px;
          font-size: 15px; font-weight: 600;
          font-family: 'Inter', sans-serif; cursor: pointer;
          letter-spacing: 0.2px; margin-top: 1.6rem;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .btn-login:hover { background: #004e75; box-shadow: 0 8px 24px rgba(0,59,89,0.28); transform: translateY(-1px); }
        .btn-login:active { transform: scale(0.98) translateY(0); box-shadow: none; }
        .btn-login:disabled { background: #94a3b8; cursor: not-allowed; transform: none; box-shadow: none; }

        .spinner {
          width: 18px; height: 18px;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .divider { display: flex; align-items: center; gap: 12px; margin: 1.4rem 0; }
        .divider-line { flex: 1; height: 1px; background: #f1f5f9; }
        .divider-text { font-size: 12px; color: #c0cfe0; font-weight: 500; }

        .btn-reg {
          width: 100%; height: 50px;
          background: #fff; color: #001f30;
          border: 1.5px solid #e2e8f0; border-radius: 14px;
          font-size: 14px; font-weight: 500;
          font-family: 'Inter', sans-serif; cursor: pointer;
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
        }
        .btn-reg:hover { border-color: #003B59; background: #f0f6fa; transform: translateY(-1px); }
        .btn-reg:active { transform: scale(0.98); }

        .bottom-note { text-align: center; margin-top: 1.6rem; font-size: 12.5px; color: #94a3b8; }
        .bottom-note strong { color: #003B59; font-weight: 600; cursor: pointer; }

        .ripple {
          position: absolute; border-radius: 50%;
          background: rgba(255,255,255,0.25);
          transform: scale(0);
          animation: rippleAnim 0.55s linear;
          pointer-events: none;
        }
        @keyframes rippleAnim { to { transform: scale(4); opacity: 0; } }

        @media (max-width: 768px) {
          .left-panel { display: none; }
          .right-panel { padding: 2rem 6%; }
          .form-title { font-size: 24px; }
        }
      `}</style>

      <div className="login-root">
        {/* ── Left Panel ── */}
        <div className={`left-panel ${mounted ? "show" : ""}`}>
          <div className="circle c1" />
          <div className="circle c2" />
          <div className="circle c3" />
          <div className="circle c4" />

          <div className="left-content">
            <div className="badge">
              <div className="badge-dot" />
              <span className="badge-text">Property Platform</span>
            </div>

            <h1 className="left-heading">
              Hö<span>me</span>ly
            </h1>
            <p className="left-desc">
              Temukan hunian impian anda dengan mudah, cepat, dan terpercaya. Ribuan pilihan menanti.
            </p>
          </div>
        </div>

        {/* ── Right Panel ── */}
        <div className={`right-panel ${mounted ? "show" : ""}`}>
          <div className="form-box">
            <div className="form-eyebrow">
              <div className="form-eyebrow-line" />
              <span className="form-eyebrow-text">Masuk ke akun</span>
            </div>
            <h2 className="form-title">Selamat datang<br />kembali 👋</h2>
            <p className="form-sub">Silakan masuk untuk melanjutkan.</p>

            <form onSubmit={handleLogin}>
              {/* Email */}
              <div className="field">
                <label className="field-label">Alamat email</label>
                <div className={`field-wrap ${focusedField === "email" ? "focused" : ""}`}>
                  <span className="field-icon">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
                    </svg>
                  </span>
                  <input
                    className="field-input"
                    type="email"
                    placeholder="nama@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="field">
                <label className="field-label">Kata sandi</label>
                <div className={`field-wrap ${focusedField === "password" ? "focused" : ""}`}>
                  <span className="field-icon">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V7.5a4.5 4.5 0 00-9 0v3M6.75 10.5h10.5A1.5 1.5 0 0118.75 12v6.75A1.5 1.5 0 0117.25 20.25H6.75A1.5 1.5 0 015.25 18.75V12a1.5 1.5 0 011.5-1.5z" />
                    </svg>
                  </span>
                  <input
                    className="field-input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan kata sandi"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                  />
                  <button
                    type="button"
                    className="eye-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password"
                  >
                    {showPassword ? (
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="forgot">
                  <span className="forgot-link">Lupa kata sandi?</span>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn-login"
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
                  <>
                    <div className="spinner" />
                    <span>Masuk...</span>
                  </>
                ) : "Masuk"}
              </button>

              {/* Divider */}
              <div className="divider">
                <div className="divider-line" />
                <span className="divider-text">atau</span>
                <div className="divider-line" />
              </div>

              {/* Register */}
              <button
                type="button"
                className="btn-reg"
                onClick={() => navigate("/register")}
              >
                Daftar akun baru
              </button>

              <p className="bottom-note">
                Dengan masuk, kamu setuju dengan{" "}
                <strong>Syarat & Ketentuan</strong> kami.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}