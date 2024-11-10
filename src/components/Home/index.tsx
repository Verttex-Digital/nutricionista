import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700">
              <Sparkles className="h-4 w-4 mr-2" />
              <span>Nutrición del Futuro</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              <span className="font-medium">Adriana Veronica</span> Markowicz
              <span className="block text-2xl md:text-3xl mt-4 text-emerald-600">
                Nutricionista UBA
              </span>
            </h1>

            <p className="text-xl text-gray-600">
              Transformando vidas a través de la nutrición consciente y personalizada.
              Especialista en alimentación basada en plantas y planes nutricionales adaptados a tu estilo de vida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <a href="#c" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors">
                Agenda tu consulta
              </a>
              <a href="#servicios" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-50 transition-colors">
                Conoce mis servicios
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-tr from-emerald-200 via-emerald-100 to-blue-100 p-2">
              <img
                src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=1000&auto=format&fit=crop"
                alt="Adriana Markowicz"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-2xl px-8 py-4 shadow-lg">
              <p className="text-center font-medium text-emerald-700">
                +1000 pacientes satisfechos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
