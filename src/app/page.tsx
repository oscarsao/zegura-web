import Image from 'next/image';
import Link from 'next/link';
import SEO from '@/components/SEO';
import { servicesData } from '@/data/services';

export default function Home() {
  // We map the centralized data to the format expected by the Home component, or use it directly.
  // The Home component expects { title, description, icon, color, slug }.
  // servicesData has { title, description (long), shortDescription, icon, color, slug, ... }
  // We can just use servicesData directly and access the properties we need.
  const services = servicesData.map(s => ({
    ...s,
    description: s.shortDescription // Use short description for the card
  }));

  const benefits = [
    { title: "Soporte Técnico", desc: "Profesionales cualificados para resolver cualquier incidencia rápidamente.", icon: "🎧" },
    { title: "Hasta un 40% de Ahorro", desc: "Podemos conseguir las mejores ofertas y reducir tus facturas drásticamente.", icon: "📉" },
    { title: "Confianza y Cercanía", desc: "Tendrás la posibilidad de reunirte con un asesor cada vez que sea necesario.", icon: "🤝" },
    { title: "Asesoramiento Gratuito", desc: "Ahorras y no pagas por el servicio. Solo ganamos si tú ahorras.", icon: "✨" },
    { title: "Sin Competencia Directa", desc: "Software comparador de más de 80 compañías en tiempo real.", icon: "🚀" },
    { title: "Gestión de Contratos", desc: "Nos encargamos de toda la gestión contractual por ti.", icon: "📋" }
  ];

  const faqs = [
    { q: "¿Cuánto puedo llegar a ahorrar realmente?", a: "Podemos conseguir hasta un 40% de ahorro en tus facturas integrales mediante la optimización y negociación directa." },
    { q: "¿Tengo que pagar por vuestro servicio?", a: "No, el asesoramiento es gratuito. Ahorras y no pagas por el servicio de consultoría inicial." },
    { q: "¿Zegura es una compañía eléctrica o de seguros?", a: "No, somos una consultora independiente. Nos distinguimos por no tener exclusividad con ninguna compañía, buscando siempre lo mejor para ti." },
    { q: "¿Qué servicios podéis optimizar?", a: "Luz, gas, telefonía, seguros (todos los ramos), alarmas e incluso condiciones hipotecarias." }
  ];

  return (
    <>
      <SEO
        title="Zegura | Súmate al Ahorro Inteligente"
        description="Zegura te ayuda a ahorrar hasta un 40% en luz, gas, seguros, telefonía e hipotecas. Consultora líder en optimización de servicios básicos."
      />

      <main className="min-h-screen font-body">
        {/* HERO SECTION */}
        <section className="relative pt-48 pb-32 overflow-hidden bg-gradient-to-b from-white to-background-ghost">
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 z-10 text-center md:text-left">
              <span className="bg-zegura-orange/10 text-zegura-orange px-6 py-2 rounded-full font-bold text-sm mb-6 inline-block uppercase tracking-wider">
                Súmate al ahorro inteligente
              </span>
              <h1 className="text-6xl md:text-8xl text-zegura-blue mb-8 font-black leading-[0.95] tracking-tight font-display">
                Tu socio para <span className="text-zegura-orange tracking-tighter italic">ahorrar</span> sin letras pequeñas
              </h1>
              <p className="text-2xl text-zegura-blue/70 mb-12 font-medium leading-relaxed max-w-xl">
                Somos expertos en la gestión y optimización de servicios básicos. Analizamos el mercado por ti para garantizarte la mejor opción.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                <Link href="/contacto" className="bg-zegura-orange text-white px-12 py-5 rounded-full font-black text-xl hover:bg-zegura-blue shadow-[0_20px_50px_rgba(255,135,84,0.3)] transition-all flex items-center justify-center">
                  Análisis Gratis Ahora
                </Link>
                <Link href="#servicios" className="bg-white border-2 border-zegura-blue/10 text-zegura-blue px-12 py-5 rounded-full font-bold text-xl hover:border-zegura-orange transition-all flex items-center justify-center">
                  Descubrir Más
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="relative z-10 animate-float">
                <Image
                  src="/assets/cerdito-zegura.png"
                  alt="Mascota Zegura"
                  width={600}
                  height={600}
                  className="drop-shadow-[0_35px_35px_rgba(255,135,84,0.3)] mx-auto"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-zegura-orange/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-20 bg-zegura-blue text-white">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-black text-zegura-orange mb-2">40%</div>
              <div className="text-sm uppercase tracking-widest opacity-70 font-bold">Ahorro Máximo</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black text-zegura-orange mb-2">+80</div>
              <div className="text-sm uppercase tracking-widest opacity-70 font-bold">Compañías Analizadas</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black text-zegura-orange mb-2">100%</div>
              <div className="text-sm uppercase tracking-widest opacity-70 font-bold">Gratuito para ti</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black text-zegura-orange mb-2">24h</div>
              <div className="text-sm uppercase tracking-widest opacity-70 font-bold">Resultado Análisis</div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-32 px-8 bg-white" id="servicios">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl text-zegura-blue mb-6 font-display">Todo bajo un mismo techo</h2>
              <p className="text-xl text-zegura-blue/60 max-w-2xl mx-auto font-body">
                Optimizamos todos tus servicios básicos para que no tengas que preocuparte por nada más que por ahorrar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link key={service.slug} href={`/servicios/${service.slug}`} className="p-10 bg-background-ghost rounded-[3rem] hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all border border-transparent hover:border-zegura-orange/20 group">
                  <div className="text-6xl mb-8 group-hover:rotate-12 transition-transform inline-block">{service.icon}</div>
                  <h3 className="text-3xl text-zegura-blue mb-4 font-display font-bold">{service.title}</h3>
                  <p className="text-zegura-blue/70 text-lg mb-8 leading-relaxed">{service.description}</p>
                  <span className="text-zegura-orange font-black flex items-center gap-2">
                    Saber más <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION (FROM PDF) */}
        <section className="py-32 px-8 bg-zegura-blue text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-7xl text-center mb-20 font-display text-white">¿Por qué Zegura?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-6 p-8 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <div className="text-4xl">{benefit.icon}</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2 text-zegura-orange">{benefit.title}</h4>
                    <p className="opacity-70 text-lg leading-snug">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-zegura-orange/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-32 px-8 bg-background-ghost">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-zegura-blue mb-16 text-center font-display uppercase tracking-tighter">Preguntas Frecuentes</h2>
            <div className="grid gap-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:border-zegura-orange/30 transition-all cursor-default group">
                  <h4 className="text-xl font-black text-zegura-blue mb-4 flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-zegura-orange/10 flex items-center justify-center text-zegura-orange text-sm">?</span>
                    {faq.q}
                  </h4>
                  <p className="text-zegura-blue/70 leading-relaxed text-lg ml-12">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="py-40 px-8 bg-white text-center">
          <div className="max-w-5xl mx-auto bg-zegura-blue rounded-[4rem] p-16 md:p-32 text-white relative shadow-[0_50px_100px_rgba(0,15,92,0.2)]">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl mb-8 font-display font-black leading-[0.9] tracking-tight">¿Listo para ahorrar de verdad?</h2>
              <p className="text-2xl text-white mb-16 max-w-2xl mx-auto font-medium leading-normal">
                Súmate al ahorro inteligente hoy mismo. Un análisis de 2 minutos puede cambiar tus facturas para siempre.
              </p>
              <Link href="/contacto" className="bg-zegura-orange text-white px-16 py-6 rounded-full font-black text-2xl hover:bg-white hover:text-zegura-blue transition-all inline-block shadow-2xl scale-110">
                ¡Solicitar Análisis Gratis!
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-zegura-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </section>
      </main>
    </>
  );
}
