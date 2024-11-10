import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-light mb-6">
              Comienza Tu <span className="font-medium">Transformación</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Estoy aquí para ayudarte a alcanzar tus objetivos nutricionales.
              Contacta conmigo para agendar tu consulta o resolver cualquier duda.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Teléfono</h3>
                  <p className="text-gray-600">+54 11 1234-5678</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">adriana@nutricion.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Consultorio</h3>
                  <p className="text-gray-600">Av. Corrientes 1234, CABA</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="¿En qué puedo ayudarte?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
            >
              <Send className="h-5 w-5 mr-2" />
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}