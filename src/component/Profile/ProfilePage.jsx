import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profil from "../../assets/img/profile.png";

export default function ProfilePage() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";        // arahkan ke landing
  };

  return (
    <div className="relative">
      {/* Avatar */}
      <img
        src={Profil}
        alt="Profil"
        className="cursor-pointer w-10 h-10 rounded-full mt-4"
        onClick={() => setShowProfileDropdown(!showProfileDropdown)}
      />

      {showProfileDropdown && (
        <div className="absolute right-0 top-full mt-2 w-72 bg-white p-4 rounded-lg shadow-lg z-50">
          {/* Header profile */}
          <div className="flex items-center space-x-4 border-b pb-4">
            <img
              src={Profil}
              alt="profile"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h2 className="font-bold text-lg text-gray-800">Taylor Swift</h2>
              <p className="text-sm text-gray-500">SwifttiesTay@gmail.com</p>
            </div>
          </div>

          {/* Hömely Card */}
          <div className="pt-4 text-sm text-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-[#02939B] font-bold whitespace-nowrap">
                Hömely Card
              </span>
              <button className="text-blue-600 hover:underline whitespace-nowrap">
                Daftarkan Sekarang
              </button>
            </div>

            <div className="mt-2 space-y-1">
              <div className="flex justify-between">
                <span className="font-semibold">Saldo</span>
                <span className="text-blue-600">Rp 0</span>
              </div>
              <div className="flex justify-between">
                <span>Kupon Saya</span>
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Cek
                </span>
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="mt-6 pt-4 flex justify-between items-center border-t text-sm">
            {/* Keluar */}
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-600 hover:text-black"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7"
                />
              </svg>
              Keluar
            </button>

            {/* Lihat Profil */}
            <button
              onClick={() => navigate("/See")}
              className="text-blue-600 hover:underline"
            >
              Lihat Profil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
