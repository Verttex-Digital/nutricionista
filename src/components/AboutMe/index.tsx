import { GraduationCap, Award, Users } from 'lucide-react';

export function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1000&auto=format&fit=crop"
                alt="Adriana en consulta"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-6 rounded-2xl shadow-lg">
              <p className="text-3xl font-medium">10+</p>
              <p className="text-sm">Años de experiencia</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-light">
              Sobre <span className="font-medium">Mi Trayectoria</span>
            </h2>

            <p className="text-gray-600">
              Como nutricionista graduada de la Universidad de Buenos Aires (UBA),
              me especializo en crear planes nutricionales personalizados que se adaptan
              a tu estilo de vida. Mi enfoque combina la ciencia nutricional moderna
              con prácticas sostenibles y realistas.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-emerald-50">
                <GraduationCap className="h-8 w-8 text-emerald-500 mb-2" />
                <h3 className="font-medium mb-1">UBA</h3>
                <p className="text-sm text-gray-600">Graduada con honores</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50">
                <Award className="h-8 w-8 text-emerald-500 mb-2" />
                <h3 className="font-medium mb-1">Certificada</h3>
                <p className="text-sm text-gray-600">Plant-Based Nutrition</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50">
                <Users className="h-8 w-8 text-emerald-500 mb-2" />
                <h3 className="font-medium mb-1">+1000</h3>
                <p className="text-sm text-gray-600">Pacientes atendidos</p>
              </div>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
            >
              Agenda tu consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}