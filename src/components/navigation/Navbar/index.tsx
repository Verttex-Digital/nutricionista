import React from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-emerald-500" />
            <span className="ml-2 text-xl font-light">
              <span className="font-medium">AMN</span>utrición
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-emerald-500 transition-colors">Inicio</a>
            <a href="#sobre-mi" className="text-gray-700 hover:text-emerald-500 transition-colors">Sobre Mí</a>
            <a href="#servicios" className="text-gray-700 hover:text-emerald-500 transition-colors">Servicios</a>
            <a href="#testimonios" className="text-gray-700 hover:text-emerald-500 transition-colors">Testimonios</a>
            <a href="#contacto" className="px-4 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors">
              Contacto
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md">
            <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-emerald-500">Inicio</a>
            <a href="#sobre-mi" className="block px-3 py-2 text-gray-700 hover:text-emerald-500">Sobre Mí</a>
            <a href="#servicios" className="block px-3 py-2 text-gray-700 hover:text-emerald-500">Servicios</a>
            <a href="#testimonios" className="block px-3 py-2 text-gray-700 hover:text-emerald-500">Testimonios</a>
            <a href="#contacto" className="block px-3 py-2 text-emerald-500 font-medium">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}