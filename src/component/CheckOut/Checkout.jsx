import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ceklist from "../../assets/img/ceklist.png";

export default function CheckOut() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("buyNow"));
    if (stored) {
      // Pastikan hasilnya array
      setProducts(Array.isArray(stored) ? stored : [stored]);
    }
  }, []);

  if (products.length === 0)
    return <p className="text-center mt-10">Memuat produk...</p>;

  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + 10000;

  return (
    <div className="max-w-6xl mt-4 mx-auto p-4 font-sans">
      {/* Alamat */}
      <div className="bg-gray-300 p-8 rounded text-sm mb-6">
        <h4 className="font-bold mb-2">Alamat Pengiriman</h4>
        <p><strong>Nama Penerima:</strong> Taylor Swift (Kembarannya)</p>
        <p><strong>Alamat:</strong> Jl. Jalanin Aja Dulu No. 3, Kecamatan Sejuta Warna, Kota Senja, 45678</p>
        <p><strong>No Hp yang Aktif:</strong> 0899 1122 3344</p>
      </div>

      {/* Produk */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="w-full md:w-2/3 space-y-6">
          {products.map((product, index) => (
            <div key={index} className="flex gap-4 items-start border-b pb-4">
              <img
                src={product.img_link}
                alt={product.name}
                className="w-40 h-40 object-cover rounded"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <p className="text-sm text-gray-600">meja</p>
                  <p className="text-lg font-semibold mt-2">
                    Rp {Number(product.price).toLocaleString("id-ID")}
                  </p>
                  <p className="text-xs text-gray-500">
                    Berat paket: {Number(product.weight).toFixed(2)} kg
                  </p>
                  <span className="inline-block mt-2 text-xs bg-blue-500 text-white px-2 py-1 rounded">
                    Produk Online Terlaris
                  </span>
                </div>
                <p className="mt-2 text-sm">Jumlah: {product.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ringkasan */}
        <div className="w-full md:w-1/3 border rounded p-4 bg-gray-50 shadow-sm">
          <h3 className="text-lg font-bold text-center text-[#003049] mb-4">Ringkasan Belanja</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Jumlah Produk</span>
              <span>{products.length} item</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rp {subtotal.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between">
              <span>Diskon</span>
              <span>Rp 0</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Pengiriman</span>
              <span>Rp 10.000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Metode Pembayaran</span>
              <select className="ml-auto border rounded px-4 py-2 text-sm">
                <option>COD</option>
                <option>E-Wallet</option>
              </select>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>Rp {total.toLocaleString("id-ID")}</span>
            </div>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-[#003049] text-white py-2 rounded mt-4 hover:bg-[#002030] transition"
          >
            Beli Sekarang
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 mt-10 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center relative border">
            <button
              className="absolute top-2 right-4 text-black text-xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="text-lg font-bold text-[#003049] mb-4">
              Terimakasih Telah Membeli Produk Kami
            </h2>
            <img src={ceklist} alt="Berhasil" className="w-16 h-16 mx-auto mb-4" />
            <p className="text-sm text-gray-600 mb-4">
              Kami akan segera memproses pesananmu untuk dikirim dengan aman.
            </p>
            <button
              onClick={() => navigate("/home page")}
              className="bg-[#003049] text-white px-4 py-2 rounded hover:bg-[#002030] transition"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
