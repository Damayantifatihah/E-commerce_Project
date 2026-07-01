import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/img/back.png";

export default function Keranjang() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (index, delta) => {
    const updated = [...cart];
    updated[index].quantity = Math.max(1, updated[index].quantity + delta);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };
<br />
  const removeItem = (index) => {
    const updated = [...cart];
    const removedItem = updated.splice(index, 1)[0];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    setSelectedItems((prev) => prev.filter((id) => id !== removedItem.id));
  };

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === cart.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cart.map((item) => item.id));
    }
  };

  const handleCheckout = () => {
    const selectedCartItems = cart.filter((item) =>
      selectedItems.includes(item.id)
    );

    if (selectedCartItems.length > 0) {
      localStorage.setItem("buyNow", JSON.stringify(selectedCartItems));

      const remainingCart = cart.filter(
        (item) => !selectedItems.includes(item.id)
      );
      setCart(remainingCart);
      localStorage.setItem("cart", JSON.stringify(remainingCart));

      setSelectedItems([]);
      navigate("/beli");
    }
  };

  const total = cart
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Judul dan tombol kembali */}
      <div className="flex items-center gap-4 mb-4">
        <button onClick={() => navigate(-1)} className="focus:outline-none">
          <img src={back} alt="Kembali" className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold">Keranjang Belanja Anda</h1>
      </div>

      {cart.length === 0 ? (
        <p>Keranjang kosong.</p>
      ) : (
        <>
          {/* Pilih Semua */}
          <div className="mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedItems.length === cart.length}
                onChange={toggleSelectAll}
              />
              <span>Pilih Semua</span>
            </label>
          </div>

          {/* Daftar Produk */}
          <div>
            {cart.map((item, index) => (
              <div
                key={item.id}
                className="flex justify-between items-start border-b py-4"
              >
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleSelect(item.id)}
                  />
                  <img
                    src={item.img_link}
                    alt={item.name}
                    className="w-28 h-28 object-cover"
                  />
                  <div>
                    <h2 className="font-bold">{item.name}</h2>
                    <p>Rp {Number(item.price).toLocaleString("id-ID")}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateCart(index, -1)}
                        className="px-2 py-1 border rounded"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateCart(index, 1)}
                        className="px-2 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>

                    {/* ✅ Subtotal per produk */}
                    <p className="mt-2 text-sm text-gray-600">
                      Subtotal: Rp{" "}
                      {(item.price * item.quantity).toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>

                {/* Hapus */}
                <button
                  onClick={() => removeItem(index)}
                  className="text-red-600 font-bold"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>

          {/* Total dan Tombol Checkout */}
          <div className="mt-6 flex flex-col items-end">
            <div className="text-xl font-semibold mb-2">
              Total: Rp {total.toLocaleString("id-ID")}
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
              disabled={selectedItems.length === 0}
              onClick={handleCheckout}
            >
              Beli Sekarang
            </button>
          </div>
        </>
      )}
    </div>
  );
}
