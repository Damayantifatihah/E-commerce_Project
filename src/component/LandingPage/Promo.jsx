import icons1 from "../../assets/img/jam.png"
import icons2 from "../../assets/img/tangan.png"



export default function Promo() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 mt-20 mb-20">
      <h2 className="text-4xl font-bold text-black mb-2">Promo</h2>
      <p className="text-gray-600 mb-10">
        Jangan lewatkan kesempatan untuk mendapat promo ini
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/*  Promo 1 kiri  */}
        <div className="relative bg-[#F7941D] text-white rounded-lg p-6 overflow-hidden h-[300px]">
          {/* Clock */}
          <img
            src={icons1}
            alt="Clock"
            className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16"
          />

          <h3 className="text-white text-2xl font-bold text-center mt-20">
            Promo Akhir Pekan
          </h3>
          <p className="text-white text-center mt-2">
            Harga spesial tiap Sabtu, Minggu sepanjang tahun
          </p>

          <button  onClick={() => navigate("/login")}
          className="absolute bottom-4 left-4 bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800">
            Lihat Selengkapnya
          </button>
        </div>

        {/*  Promo 2 kanan  */}
        <div className="relative bg-[#00AEEF] text-white rounded-lg p-6 overflow-hidden h-[300px] flex flex-col items-center justify-start">
        {/* Tanggal */}
        <div className="bg-black text-white text-sm font-semibold px-4 py-1 rounded mb-4">
          25APR–2 MEI 2025
        </div>

        {/* Konten promo */}
        <div className="flex flex-row items-center justify-between w-full max-w-[650px] text-black mt-2">
          {/* Icon + Judul */}
          <div className="flex flex-col items-start">
            <img src={icons2} alt="Promo Icon" className="w-24 h-24 mb-2" />
            <p className="font-semibold text-lg">Promo Gajian</p>
          </div>

          {/* Teks utama */}
          <div className="flex-1 px-20 text-left">
            <p className="font-semibold">Dapatkan Voucher</p>
            <p className="text-2xl font-bold text-black">Rp 100.000</p>
          </div>

          {/* Syarat bank */}
          <div className="text-sm text-white text-right">
            <p>Setiap belanja online</p>
            <p>khusus nasabah bank</p>
            <p className="font-bold text-black">BCA, BSI, dan CIMB</p>
          </div>
        </div>

        {/* Footer keterangan */}
        <p className="text-xs text-white font-semibold  pt-4 text-center">
          *Kuota terbatas, syarat dan ketentuan berlaku
        </p>
      


          <button onClick={() => navigate("/login")}
           className="absolute bottom-4 left-4 bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800">
            Lihat Selengkapnya
          </button>
        </div>
        </div>  
    </section>
  );
}
