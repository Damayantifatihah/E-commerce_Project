import image6 from "../../assets/img/lampu.png"
import image7 from "../../assets/img/unit rak.png"
import image8 from "../../assets/img/kamar.png"

export default function KategoriHome () {
    return (
        <>
        <section id="Kategori"
            className="max-w-screen-xl mx-auto px-4 mt-30 mb-20">
                <h2 className="text-2xl md:text-4xl mt-20 font-bold text-gray-900 mr-24 mb-24">
                  Jelajahi Kategori Unggulan Kami
                </h2>
        
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Lampu Kamar Tidur */}
                  <div className="text-center">
                    <img
                      src={image6}
                      alt="Lampu Kamar Tidur"
                      className="rounded-lg mx-auto mb-4 mt-10 h-64 object-cover transition duration-300 transform hover:scale-105"
                    />
                    <h3 className="inline-block bg-white text-black px-4 py-1 rounded-full shadow text-sm font-medium">
                      Lampu Kamar Tidur
                    </h3>
                  </div>
        
                  {/* Unit Rak */}
                  <div className="text-center">
                    <img
                      src={image7}
                      alt="Unit Rak"
                      className="rounded-lg mx-auto mb-4 w-64 mt-10 h-64 object-cover transition duration-300 transform hover:scale-105"
                    />
                    <h3 className="inline-block bg-white text-black px-4 py-1 rounded-full shadow text-sm font-medium">
                      Unit Rak
                    </h3>
                  </div>
        
                  {/* Dekorasi Kamar Tidur */}
                    <div className="text-center">
                    <img
                    src={image8}
                    alt="Dekorasi Kamar Tidur"
                 className="rounded-lg mt-10 mb-4 w-64 h-64 object-cover transition duration-300 transform hover:scale-105 ml-auto mr-20"
                    />
                 <h3 className="inline-block bg-white text-black px-4 py-1 rounded-full shadow font-medium">
                    Dekorasi Kamar Tidur
                 </h3>
                 </div>
        
                </div>
              </section>
        </>
    )
}