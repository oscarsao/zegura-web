import Image from 'next/image';
import ServiceForm from '@/components/ServiceForm';

export default function ContactoPage() {
    return (
        <main className="min-h-screen pt-40 pb-24 px-8 bg-background-ghost relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start relative z-10">
                {/* Text Side */}
                <div className="lg:w-1/2 pt-10">
                    <span className="text-zegura-orange font-bold uppercase tracking-widest text-sm mb-4 block">Contáctanos</span>
                    <h1 className="text-5xl md:text-7xl text-zegura-blue mb-8 leading-tight font-display">¿Listo para empezar a ahorrar?</h1>
                    <p className="text-xl text-zegura-blue/70 mb-12 leading-relaxed font-body max-w-lg">
                        Déjanos tus datos y uno de nuestros expertos analizará tus facturas gratis. Sin compromiso y con total transparencia.
                    </p>

                    <div className="space-y-8 bg-white p-10 rounded-[3rem] shadow-xl border border-white/50">
                        <div className="flex items-center gap-6 group">
                            <div className="bg-zegura-orange/10 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">📞</div>
                            <div>
                                <h4 className="font-bold text-zegura-blue text-lg">Llámanos</h4>
                                <p className="text-zegura-blue/60 text-lg">0300 582 8952</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 group">
                            <div className="bg-zegura-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">✉️</div>
                            <div>
                                <h4 className="font-bold text-zegura-blue text-lg">Escríbenos</h4>
                                <p className="text-zegura-blue/60 text-lg">hola@zegura.es</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 group">
                            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">📍</div>
                            <div>
                                <h4 className="font-bold text-zegura-blue text-lg">Visítanos</h4>
                                <p className="text-zegura-blue/60 text-lg">Calle Principal 123, Madrid</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex items-center gap-6 p-8 bg-zegura-blue text-white rounded-[2rem] shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <p className="font-bold text-lg mb-2">Análisis 100% Gratuito</p>
                            <p className="opacity-70 text-sm">Garantizamos mejorar tus condiciones actuales o te decimos que ya tienes lo mejor.</p>
                        </div>
                        <div className="text-5xl animate-bounce">👇</div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="lg:w-1/2 w-full">
                    <ServiceForm className="ml-auto" />
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-zegura-orange/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-0"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zegura-blue/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-0"></div>
        </main>
    );
}
