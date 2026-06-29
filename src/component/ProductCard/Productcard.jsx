import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Productcard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try { 
        const res = await fetch("/api/data");
        const data = await res.json();

        
        if (Array.isArray(data.payload)) {
          setProducts(data.payload);
        } else if (Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          console.error("Format data tidak dikenali:", data);
        }
      } catch (error) {
        console.error("Gagal fetch produk:", error);
      }
    };
    fetchProducts();
  }, []);

  const isLoggedIn = () => !!localStorage.getItem("user");

  const checkLoginBeforeAction = () => {
    if (!isLoggedIn()) {
      alert("Silakan login terlebih dahulu!");
      navigate("/login");
      return false;
    }
    return true;
  };

  const handleAddToCart = (product) => {
    if (!checkLoginBeforeAction()) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produk ditambahkan ke keranjang!");
  };

  const handleClickImage = (product) => {
    if (!checkLoginBeforeAction()) return;

    navigate(`/detailproduk/${product.id}`);
  };

  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-bold mb-6">Produk Terlaris</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-md shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <span className="self-start bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded mb-2">
              Produk Online Terlaris
            </span>

            <img
              onClick={() => handleClickImage(product)}
              src={product.img_link}
              alt={product.name}
              className="w-32 h-32 object-contain mt-4 mb-4 transition duration-100 transform hover:scale-110 cursor-pointer"
            />

            <h3 className="text-md font-bold text-center">{product.name}</h3>

            <div className="mt-3 flex items-center space-x-2">
              <span className="bg-orange-400 text-white font-bold px-3 py-1 rounded">
                Rp {parseInt(product.price).toLocaleString()}
              </span>
              <button
                className="text-black-600 hover:text-[#02939B]"
                onClick={() => handleAddToCart(product)}
              >
                <FaShoppingCart size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productcard;
