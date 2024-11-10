import { Leaf, Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-light">
                <span className="font-medium">AMN</span>utrición
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando vidas a través de la nutrición consciente y personalizada.
              Especialista en alimentación basada en plantas y planes nutricionales adaptados a tu estilo de vida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Horarios</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes - Viernes</li>
              <li>9:00 - 20:00</li>
              <li>Sábados</li>
              <li>9:00 - 14:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AMNutrición. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}