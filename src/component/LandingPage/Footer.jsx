import waicons from "../../assets/img/WaICONS.png"
import tiktok from "../../assets/img/tiktok.png"
import ig from "../../assets/img/instagram.png"
import fb from "../../assets/img/facebook.png"

export default function Footer () {
    return (
        <>
           <footer className="bg-[#01394D] text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-5 gap-8">
        {/* Kategori */}
        <div>
          <h4 className="text-lg font-bold mb-4">Kategori</h4>
          <ul className="space-y-2 text-sm">
            <li>Dekorasi</li>
            <li>Perabot Rumah Tangga</li>
          </ul>
        </div>

        {/* Layanan Pelanggan */}
        <div>
          <h4 className="text-lg font-bold mb-4">Layanan Pelanggan</h4>
          <ul className="space-y-2 text-sm">
            <li>Metode Pembayaran</li>
            <li>Bantuan</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>

        {/* Jelajahi Hӧmely */}
        <div>
          <h4 className="text-lg font-bold mb-4">Jelajahi Hӧmely</h4>
          <ul className="space-y-2 text-sm">
            <li>Tentang Kami</li>
            <li>Karir</li>
            <li>Kebijakan Hӧmely</li>
            <li>Kebijakan Privasi</li>
          </ul>
        </div>

        {/* Ikuti Kami */}
        <div>
          <h4 className="text-lg font-bold mb-4">Ikuti Kami</h4>
          <div className="flex space-x-4 text-2xl">
            <img src={tiktok} alt="TikTok" className="h-6 w-6" />
            <img src={ig} alt="Instagram" className="h-6 w-6" />
            <img src={fb} alt="Facebook" className="h-6 w-6" />
          </div>
        </div>

        {/* Kontak & Copyright */}
        <div className="md:col-span-5 flex flex-col md:flex-row justify-between items-center mt-10 text-sm text-gray-300">
          <div className="flex items-center space-x-2">
            <img src={waicons} alt="WhatsApp" className="h-5 w-5" />
            <span>+62 812–3456–7890</span>
          </div>
          <div className="text-center mt-4 md:mt-0 font-medium">
            © 2025 <span className="font-bold text-white">Hӧmely.</span>
          </div>
          <div className="text-right mt-4 md:mt-0">
            <p>Hӧmely Indonesia</p>
            <p>Jl. Melati No. 27, Jakarta Selatan</p>
            <p>12540</p>
          </div>
        </div>
      </div>
    </footer>
        </>
    )
}