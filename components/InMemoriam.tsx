import { inMemoriam } from "@/lib/revista-data";

const InMemoriam = () => {
  return (
    <section id="memoriam" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-4">🕊️</div>
            <h2 className="text-4xl font-bold mb-4">In Memoriam</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              En memoria de nuestros queridos compañeros que ya no nos acompañan
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
          </div>

          {/* Memorial Message */}
          <div className="max-w-3xl mx-auto text-center mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <p className="text-lg text-gray-300 leading-relaxed italic">
              "Honramos la memoria de 13 compañeros que compartieron con nosotros
              los años de formación en el Colegio Salesiano. Su recuerdo permanece
              vivo en nuestros corazones y en las huellas que dejaron en nuestra
              comunidad."
            </p>
          </div>

          {/* Memorial Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inMemoriam.map((person) => (
              <div
                key={person.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300"
              >
                {/* Name */}
                <h3 className="text-lg font-bold mb-3 text-yellow-400">
                  {person.name}
                </h3>

                {/* Details */}
                <div className="space-y-2 mb-4 text-sm">
                  {person.curso && (
                    <div className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      <span>Curso: {person.curso}</span>
                    </div>
                  )}
                  {person.taller && (
                    <div className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      <span>Taller: {person.taller}</span>
                    </div>
                  )}
                  {person.yearOfDeath && (
                    <div className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      <span>Falleció en {person.yearOfDeath}</span>
                    </div>
                  )}
                </div>

                {/* Bio */}
                {person.bio && (
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {person.bio}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Footer Message */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg italic">
              Descansen en paz, queridos compañeros. Siempre los recordaremos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InMemoriam;
