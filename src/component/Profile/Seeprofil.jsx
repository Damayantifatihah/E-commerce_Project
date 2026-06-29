import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profil from "../../assets/img/profile.png";
import back from "../../assets/img/back.png";
import { FiEdit3 } from "react-icons/fi";

export default function LihatProfil() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "Taylor Swift",
    email: "swifttiestay@gmail.com",
    noHp: "0812xxxxxxx",
    alamat: "Los Angeles, California"
  });

  const [editMode, setEditMode] = useState({
    nama: false,
    email: false,
    noHp: false,
    alamat: false
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleEdit = (field) => {
    setEditMode((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSave = () => {
    // Simpan perubahan, bisa tambahkan API call di sini
    console.log("Data disimpan:", formData);
    setEditMode({
      nama: false,
      email: false,
      noHp: false,
      alamat: false
    });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Body */}
      <div className="flex p-8 gap-8">
        {/* Left Section */}
        <div className="w-1/3 text-center border-r pr-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-left mb-6"
          >
            <img src={back} alt="back" className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">Profil</h2>
          </button>
          <img
            src={Profil}
            alt="profile"
            className="w-32 h-32 rounded-full mx-auto object-cover"
          />
          <h3 className="mt-4 font-bold">{formData.nama}</h3>

          {/* Tombol Simpan */}
          <button
            onClick={handleSave}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Simpan
          </button>
        </div>

        {/* Right Section */}
        <div className="w-2/3 space-y-6">
          {[
            { label: "Nama Lengkap", field: "nama" },
            { label: "E-Mail", field: "email" },
            { label: "No. Handphone", field: "noHp" },
            { label: "Alamat", field: "alamat" }
          ].map((item, index) => (
            <div key={index}>
              <label className="block text-sm font-medium mb-1">
                {item.label}
              </label>
              <div className="flex justify-between items-center bg-gray-300 p-3 rounded">
                {editMode[item.field] ? (
                  <input
                    type="text"
                    value={formData[item.field]}
                    onChange={(e) => handleChange(item.field, e.target.value)}
                    className="flex-grow bg-gray-100 border-none focus:outline-none p-1"
                  />
                ) : (
                  <span>{formData[item.field]}</span>
                )}
                <FiEdit3
                  className="text-gray-600 cursor-pointer ml-2"
                  onClick={() => toggleEdit(item.field)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
