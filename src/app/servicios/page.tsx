import Image from 'next/image';
import Link from 'next/link';
import { servicesData } from '@/data/services';

export default function ServiciosPage() {
    return (
        <main className="min-h-screen pt-40 pb-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="bg-zegura-orange/10 text-zegura-orange px-6 py-2 rounded-full font-bold text-sm mb-6 inline-block uppercase tracking-wider">
                        Soluciones Integrales
                    </span>
                    <h1 className="text-5xl md:text-7xl text-zegura-blue mb-6 font-display">Nuestros Servicios</h1>
                    <p className="text-xl text-zegura-blue/70 max-w-3xl mx-auto font-body">
                        Diseñados para simplificar tu vida y mejorar tus finanzas. Todo gestionado por un único equipo de expertos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesData.map((service) => (
                        <div key={service.slug} className={`group relative p-10 rounded-[2.5rem] ${service.color} border border-transparent hover:border-zegura-orange/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}>

                            {/* Icon Wrapper */}
                            <div className="mb-8 relative z-10">
                                <div className="bg-white w-24 h-24 flex items-center justify-center rounded-3xl shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                    <span className="text-5xl">{service.icon}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold text-zegura-blue mb-4 font-display group-hover:text-zegura-orange transition-colors">
                                    {service.title}
                                </h2>
                                <p className="text-zegura-blue/70 mb-8 text-lg leading-relaxed min-h-[5rem]">
                                    {service.shortDescription}
                                </p>

                                <Link
                                    href={`/servicios/${service.slug}`}
                                    className="inline-flex items-center gap-2 font-black text-zegura-blue group-hover:gap-4 transition-all bg-white px-6 py-3 rounded-xl shadow-sm group-hover:shadow-md"
                                >
                                    Ver detalles <span className="text-xl text-zegura-orange">→</span>
                                </Link>
                            </div>

                            {/* Decorative Background Element */}
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center p-12 bg-zegura-blue rounded-[3rem] relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl text-white mb-6 font-display">¿No encuentras lo que buscas?</h3>
                        <Link
                            href="/contacto"
                            className="bg-white text-zegura-blue px-10 py-4 rounded-full font-bold hover:bg-zegura-orange hover:text-white transition-colors shadow-xl"
                        >
                            Contáctanos directamente
                        </Link>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zegura-blue to-accent/20"></div>
                </div>
            </div>
        </main>
    );
}
