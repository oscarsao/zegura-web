import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50">
            {/* Top Contact Bar */}
            <div className="bg-zegura-blue text-white py-2 hidden md:block text-[13px] font-body border-b border-white/10">
                <div className="container-custom flex justify-between items-center opacity-90">
                    <div className="flex space-x-8">
                        <span className="flex items-center gap-2">
                            <span className="text-zegura-orange">📞</span> 0300 582 8952
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="text-zegura-orange">✉️</span> hola@zegura.es
                        </span>
                    </div>
                    <div className="flex space-x-6 items-center">
                        <span className="text-white/60 mr-2">Síguenos:</span>
                        <Link href="#" className="hover:text-zegura-orange transition-colors">Facebook</Link>
                        <Link href="#" className="hover:text-zegura-orange transition-colors">Instagram</Link>
                        <Link href="#" className="hover:text-zegura-orange transition-colors">LinkedIn</Link>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white/95 backdrop-blur-xl border-b border-gray-100 py-5 transition-all duration-300">
                <div className="container-custom flex justify-between items-center">
                    <Link href="/" className="flex items-center group relative">
                        <Image
                            src="/assets/logo-zegura.png"
                            alt="Zegura Logo"
                            width={160}
                            height={58}
                            priority
                            className="group-hover:scale-[1.02] transition-transform duration-500"
                        />
                    </Link>

                    <div className="hidden lg:flex space-x-12 items-center">
                        <Link href="/" className="text-zegura-blue font-extrabold text-[15px] uppercase tracking-wider hover:text-zegura-orange transition-colors">Inicio</Link>
                        <Link href="/servicios" className="text-zegura-blue font-extrabold text-[15px] uppercase tracking-wider hover:text-zegura-orange transition-colors">Servicios</Link>
                        <Link href="/nosotros" className="text-zegura-blue font-extrabold text-[15px] uppercase tracking-wider hover:text-zegura-orange transition-colors">Sobre Nosotros</Link>
                        <Link href="/contacto" className="text-zegura-blue font-extrabold text-[15px] uppercase tracking-wider hover:text-zegura-orange transition-colors">Contacto</Link>

                        <Link
                            href="/contacto"
                            className="bg-zegura-orange text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-xl hover:bg-zegura-blue hover:shadow-2xl transition-all active:scale-95 translate-y-0 hover:-translate-y-1"
                        >
                            Análisis Gratis
                        </Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <button className="lg:hidden p-2 text-zegura-blue hover:text-zegura-orange transition-colors">
                        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-16 6h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}
