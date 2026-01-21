import { timeline } from "@/lib/revista-data";

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Timeline 1975-2025
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              50 años de historia: desde nuestra graduación hasta hoy
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-shadow duration-300 ml-12 md:ml-0">
                      <div
                        className={`text-2xl mb-2 ${
                          index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                        } flex justify-start`}
                      >
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">
                        {item.year}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-700 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Cincuenta años de historia compartida
            </h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Desde nuestra graduación en 1975 hasta este reencuentro en 2025,
              hemos sido testigos y protagonistas de la transformación de Colombia
              y el mundo. Celebramos nuestro camino recorrido y miramos con
              esperanza hacia el futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
