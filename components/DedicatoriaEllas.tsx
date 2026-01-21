import { dedicatoriaEllas } from "@/lib/revista-data";

const DedicatoriaEllas = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-5xl mb-4">💐</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dedicada a Ellas
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto mt-6 mb-8"></div>

            {/* Dedication Message */}
            <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-pink-100">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Contraparte esencial y existencial del varón, la mujer, en todas
                sus advocaciones y roles está en el principio y el fin de todas
                nuestras historias, y muchas veces, por no decir siempre, unida a
                los más intensos afectos. Mujer digna de todos nuestros fervores
                como cuna de la vida. A todas Ellas, con cascadas de gratitud y de
                abrazos, dedicamos esta Revista de Salesianos 1975..."
              </p>
            </div>
          </div>

          {/* Women Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {dedicatoriaEllas.map((mujer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-pink-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl">
                    👩
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {mujer.name}
                  </h3>
                  <p className="text-pink-600 font-semibold">{mujer.role}</p>
                </div>
              </div>
            ))}

            {/* Special Card for Mothers and Grandmothers */}
            <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-lg p-8 text-white text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold mb-2">Madres y Abuelas</h3>
              <p className="text-lg text-pink-100">
                A todas las madres y abuelas que con su amor, dedicación y
                sacrificio hicieron posible nuestra formación y han sido el pilar
                fundamental de nuestras vidas.
              </p>
            </div>
          </div>

          {/* Closing Message */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg italic">
              Gracias por ser parte esencial de nuestra historia salesiana
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DedicatoriaEllas;
