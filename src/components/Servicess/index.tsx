import { Video, Users, Salad, Brain, HeartPulse, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: "Consultas Online",
    description: "Asesoramiento nutricional desde la comodidad de tu hogar"
  },
  {
    icon: Users,
    title: "Consultas Presenciales",
    description: "Atención personalizada en consultorio"
  },
  {
    icon: Salad,
    title: "Planes Personalizados",
    description: "Dietas adaptadas a tus objetivos y estilo de vida"
  },
  {
    icon: Brain,
    title: "Educación Alimentaria",
    description: "Aprende sobre nutrición de manera práctica y realista"
  },
  {
    icon: HeartPulse,
    title: "Seguimiento Continuo",
    description: "Acompañamiento durante todo tu proceso"
  },
  {
    icon: Sparkles,
    title: "Nutrición Plant-Based",
    description: "Especialista en alimentación basada en plantas"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-light mb-6">
            Servicios <span className="font-medium">Profesionales</span>
          </h2>
          <p className="text-gray-600">
            Ofrezco soluciones nutricionales integrales adaptadas a tus necesidades específicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white hover:bg-emerald-500 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <Icon className="h-12 w-12 text-emerald-500 group-hover:text-white mb-6" />
                <h3 className="text-xl font-medium mb-4 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}