import Image from 'next/image';
import SEO from '@/components/SEO';
import Link from 'next/link';

export default function NosotrosPage() {
    return (
        <>
            <SEO
                title="Sobre Nosotros"
                description="Conoce la historia de Zegura, nuestra misión de ahorro inteligente y el equipo de expertos que ayuda a familias y empresas a optimizar sus facturas."
            />

            <main className="min-h-screen pt-40 pb-24 px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
                        <div className="lg:w-1/2 relative z-10">
                            <span className="text-zegura-orange font-extrabold uppercase tracking-widest text-sm mb-4 block">Nuestra Historia</span>
                            <h1 className="text-5xl md:text-7xl text-zegura-blue mb-8 leading-tight font-display">Más que un Comparador, tu Aliado de Confianza</h1>
                            <p className="text-xl text-zegura-blue/70 mb-6 font-body leading-relaxed">
                                Zegura nació de una observación simple: las familias españolas pagan de más en sus facturas básicas por falta de tiempo o información.
                            </p>
                            <p className="text-lg text-zegura-blue/60 font-body leading-relaxed mb-8">
                                Lo que comenzó como un pequeño equipo de consultores energéticos ha evolucionado hasta convertirse en una plataforma integral de gestión del ahorro. Hoy, protegemos la economía de más de 950 familias en toda España.
                            </p>
                            <Link href="/contacto" className="bg-zegura-orange text-white px-10 py-4 rounded-full font-bold hover:bg-zegura-blue transition-all shadow-xl hover:shadow-2xl inline-block">
                                Únete a la Familia Zegura
                            </Link>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 p-4 bg-white rounded-[4rem] shadow-2xl border border-gray-100 overflow-hidden group rotate-2 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/assets/imagen-seguro-familiar-protege-a-tu-familia-1.png"
                                    alt="Familia Zegura Protegida"
                                    width={600}
                                    height={500}
                                    className="rounded-[3.5rem] object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zegura-blue/40 to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-8 left-8 text-white font-display font-bold text-2xl drop-shadow-lg">
                                    Protegemos lo que más quieres
                                </div>
                            </div>
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-zegura-orange/20 rounded-full blur-3xl -z-0"></div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-0"></div>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 relative z-10">
                        <div className="p-12 bg-zegura-blue text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-display mb-6">Nuestra Misión</h2>
                                <p className="text-white/80 text-lg leading-relaxed mb-8">
                                    Democratizar el acceso al ahorro inteligente, proporcionando a cada hogar y empresa las herramientas y el conocimiento necesario para pagar solo lo justo por servicios de calidad.
                                </p>
                                <div className="text-5xl opacity-20 group-hover:opacity-40 transition-opacity">🚀</div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                        </div>
                        <div className="p-12 bg-background-ghost rounded-[3rem] border border-zegura-orange/10 relative overflow-hidden group hover:bg-white hover:shadow-xl transition-all">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-display text-zegura-blue mb-6">Nuestra Visión</h2>
                                <p className="text-zegura-blue/70 text-lg leading-relaxed mb-8">
                                    Ser la plataforma de referencia en España para la gestión del gasto doméstico, reconocida por nuestra independencia, transparencia y resultados tangibles para las familias.
                                </p>
                                <div className="text-5xl opacity-20 group-hover:opacity-40 transition-opacity">🔭</div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-zegura-orange/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
                        </div>
                    </div>

                    {/* Values Grid */}
                    <div className="text-center mb-24 relative z-10">
                        <h2 className="text-4xl md:text-5xl text-zegura-blue mb-16 font-display">Valores que nos definen</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: 'Independencia', desc: 'No somos comisionistas de una sola marca. Buscamos SIEMPRE lo mejor para ti.', icon: '⚖️' },
                                { title: 'Transparencia', desc: 'Te explicamos la letra pequeña para que no haya sorpresas en tus facturas.', icon: '🔍' },
                                { title: 'Cercanía', desc: 'Tendrás un asesor personal, no un contestador automático ni un chat bot genérico.', icon: '🤝' },
                                { title: 'Innovación', desc: 'Utilizamos tecnología IA avanzada para analizar el mercado en tiempo real.', icon: '💡' }
                            ].map((item) => (
                                <div key={item.title} className="p-10 bg-white rounded-[2.5rem] border border-gray-50 hover:border-zegura-orange/20 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform inline-block bg-background-ghost w-20 h-20 flex items-center justify-center rounded-2xl">{item.icon}</div>
                                    <h3 className="text-2xl font-bold text-zegura-blue mb-4">{item.title}</h3>
                                    <p className="text-zegura-blue/70 leading-relaxed font-body">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Commitment Section */}
                    <section className="bg-gradient-to-r from-accent to-red-500 rounded-[4rem] p-16 md:p-24 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl mb-8 font-display">Nuestro Compromiso Contigo</h2>
                            <p className="max-w-3xl mx-auto text-xl opacity-90 mb-16 font-medium">
                                En Zegura no solo ahorras dinero, ganas tiempo y tranquilidad. Estamos de tu lado en cada negociación con las compañías grandes.
                            </p>
                            <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                                <div>
                                    <div className="text-5xl md:text-6xl font-black mb-2">+560K€</div>
                                    <div className="text-sm uppercase tracking-widest opacity-80 font-bold">Ahorrados a familias</div>
                                </div>
                                <div className="w-px h-24 bg-white/20 hidden md:block"></div>
                                <div>
                                    <div className="text-5xl md:text-6xl font-black mb-2">100%</div>
                                    <div className="text-sm uppercase tracking-widest opacity-80 font-bold">Independencia</div>
                                </div>
                                <div className="w-px h-24 bg-white/20 hidden md:block"></div>
                                <div>
                                    <div className="text-5xl md:text-6xl font-black mb-2">24h</div>
                                    <div className="text-sm uppercase tracking-widest opacity-80 font-bold">Respuesta Garantizada</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
                    </section>
                </div>
            </main>
        </>
    );
}
