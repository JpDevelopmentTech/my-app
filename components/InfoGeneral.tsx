import { revistaInfo, comiteEditorial, creditos, estadisticas } from "@/lib/revista-data";

const InfoGeneral = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Información General
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Publicación Info */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
                <span className="mr-3">📖</span>
                Publicación
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-gray-700">Fecha:</span>
                  <span className="ml-2 text-gray-600">{revistaInfo.publishDate}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Total de páginas:</span>
                  <span className="ml-2 text-gray-600">{revistaInfo.totalPages}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Institución:</span>
                  <span className="ml-2 text-gray-600">{revistaInfo.school}</span>
                </div>
              </div>
            </div>

            {/* Comité Editorial */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
                <span className="mr-3">✍️</span>
                Comité Editorial
              </h3>
              <div className="space-y-3">
                {comiteEditorial.map((editor, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{editor.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Créditos */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
                <span className="mr-3">🎨</span>
                Créditos
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-gray-700">Diseño y diagramación:</span>
                  <span className="ml-2 text-gray-600">{creditos.diseñador}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Fotografía histórica:</span>
                  <span className="ml-2 text-gray-600">{creditos.fotografo}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Impresor:</span>
                  <span className="ml-2 text-gray-600">{creditos.impresor}</span>
                </div>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">📊</span>
                Estadísticas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">
                    {estadisticas.estudiantesOriginales}
                  </div>
                  <div className="text-sm mt-1">Estudiantes originales</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">
                    {estadisticas.sobrevivientes}
                  </div>
                  <div className="text-sm mt-1">Sobrevivientes</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">
                    {estadisticas.enGrupoWhatsApp}
                  </div>
                  <div className="text-sm mt-1">En grupo WhatsApp</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">
                    {estadisticas.fallecidos}
                  </div>
                  <div className="text-sm mt-1">Fallecidos</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="space-y-2 text-sm">
                  {estadisticas.cursos.map((curso, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span>{curso}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoGeneral;
