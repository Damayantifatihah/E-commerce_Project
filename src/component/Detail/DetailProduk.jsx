import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function DetailProduk() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        const data = await res.json();
        const foundProduct = data.payload.find(item => item.id === id);
        setProduct(foundProduct);
      } catch (err) {
        console.error("Gagal fetch data:", err);
      }
    };
    fetchData();
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex(item => item.id === product.id);
    if (existingIndex !== -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produk ditambahkan ke keranjang!");
  };

  if (product === null) return;
  if (product === undefined) return <p className="text-center">Produk tidak ditemukan.</p>;

  

  const reviews = [
    {
      name: "Sarah Nurul",
      avatar: "https://randomuser.me/api/portraits/women/11.jpg",
      date: "01 Nov 2023",
      rating: 5,
      comment:
        "Produk ini sangat nyaman dan terlihat elegan di ruang tamu saya. Bahan berkualitas dan pengiriman cepat!",
    },
    {
      name: "Budi Santoso",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      date: "01 Nov 2023",
      rating: 5,
      comment:
        "Desain minimalis, cocok banget buat konsep rumah saya. Harganya juga terjangkau!",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6">
      {/* Produk Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gambar Produk */}
        <div className="relative">
          <img src={product.img_link} alt={product.name} className="w-full rounded-lg shadow-md" />
          <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 text-xs rounded">
            Produk Online Terlaris
          </span>
        </div>

        {/* Informasi Produk */}
        <div>
          <h1 className="text-3xl mt-10 font-bold">{product.name}</h1>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <p className="text-2xl font-semibold mt-4 text-black">
            Rp {Number(product.price).toLocaleString("id-ID")}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {/* Kontrol jumlah */}
            <div className="flex items-center border rounded px-3 py-1">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-lg font-bold px-2">−</button>
              <span className="px-2">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="text-lg font-bold px-2">+</button>
            </div>

            {/* Tombol aksi */}
            <div className="flex gap-4">
              <button
                onClick={() => {
                  addToCart();
                  navigate("/keranjang");
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Tambah keranjang
              </button>

              <button
                onClick={() => {
                  localStorage.setItem("buyNow", JSON.stringify({ ...product, quantity }));
                  navigate("/beli");
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Belanja Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Review */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">People Love Us</h2>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex items-start gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex text-yellow-400">
                      {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
