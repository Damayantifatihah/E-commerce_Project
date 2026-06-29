import image1 from "../../assets/img/Ajakan.png";
import { useNavigate } from "react-router-dom"

export default function Ajakan () {
  const navigate = useNavigate()
  return (
    <>
      <section className="bg-[#003B59] text-white">
        <div className="max-w-screen-xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
          {/* Text Side */}
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Yuk, Belanja di Hömely
            </h1>
            <p className="text-lg mb-6">
              Cek barang dari beragam kategori Unggulan 
            </p>
            <a
              onClick={() => navigate("/login")}
              href="#"
              className="bg-white text-[#003B59] font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Cek Sekarang
            </a>
          </div>

          {/* Image Side */}
          <div className="md:w-1/2 flex justify-end">
            <img
              src={image1}
              alt="Interior Illustration"
              className="w-64 md:w-72 lg:w-80"
            />
          </div>
        </div>
      </section>
    </>
  )
}
