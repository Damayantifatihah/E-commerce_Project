import { useState } from 'react';
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const [isHovering, setIsHovering] = useState(false);

  return (
    <nav className="bg-white shadow-sm w-full z-50  sticky top-0">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a
          href="#"
          className="text-4xl font-bold text-[#02939B]"
          style={{ fontFamily: "'ADLaM Display', cursive" }}
        >
          Hömely
        </a>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-6 ml-10 relative">
          <ul className="flex space-x-6 font-semibold text-black text-base">
            <li>
              <a href="#" className="hover:text-[#02939B]">
                Home
              </a>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <a href="#" className="hover:text-[#02939B]">
                Kategori
              </a>

              {/*Menu Kategori */}
              {isHovering && (
                <div className="absolute left-0 top-full mt-3 w-[400px] bg-gray-100 p-6 rounded shadow-lg grid grid-cols-2 gap-6 z-40">
                  <div>
                    <h4 className="font-bold mb-2">Dekorasi</h4>
                    <ul className="space-y-1 text-sm text-black">
                      <li>Jam Dinding</li>
                      <li>Hiasan Dinding/Meja</li>
                      <li>Rak</li>
                      <li>Tanaman Tiruan</li>
                      <li>Lampu</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Perabot</h4>
                    <ul className="space-y-1 text-sm text-black">
                      <li>Piring</li>
                      <li>Sendok</li>
                      <li>Kursi sofa</li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
          </ul>

          {/* Search Bar */}
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Cari di sini"
              className="w-full pl-10 pr-4 py-2 text-sm border rounded-lg focus:ring-[#02939B] focus:border-[#02939B] bg-gray-100 shadow"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-[#262D63]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 5.25 5.25a7.5 7.5 0 0 0 11.4 11.4z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Login/Register */}
        <div className="flex gap-2">
               <button
                onClick={() => navigate("/login")} className="border-2 border-black text-black font-bold px-4 py-2 rounded-lg text-sm hover:bg-gray-200 hover:text-black transition-all duration-300">Masuk</button>
           

                <button 
                onClick={() => navigate("/register")}className="border-2 border-black text-black font-bold px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition-all duration-300">Daftar</button>
        
              </div>
      </div>
    </nav>
  );
};

export default Navbar;
