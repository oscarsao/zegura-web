import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-zegura-blue text-white pt-20 pb-10 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Image
                            src="/assets/logo-zegura-blanco.png"
                            alt="Zegura Logo"
                            width={160}
                            height={60}
                        />
                        <p className="opacity-70 leading-relaxed font-body">
                            Tu socio de confianza para el ahorro inteligente en servicios básicos. Ayudamos a familias y empresas a optimizar sus facturas.
                        </p>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-xl font-display mb-8">Empresa</h4>
                        <ul className="space-y-4 opacity-70">
                            <li><Link href="/" className="hover:text-zegura-orange transition-colors">Inicio</Link></li>
                            <li><Link href="/nosotros" className="hover:text-zegura-orange transition-colors">Sobre Nosotros</Link></li>
                            <li><Link href="/servicios" className="hover:text-zegura-orange transition-colors">Servicios</Link></li>
                            <li><Link href="/contacto" className="hover:text-zegura-orange transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-xl font-display mb-8">Servicios</h4>
                        <ul className="space-y-4 opacity-70">
                            <li><Link href="/servicios/energia" className="hover:text-zegura-orange transition-colors">Luz y Gas</Link></li>
                            <li><Link href="/servicios/seguros" className="hover:text-zegura-orange transition-colors">Seguros</Link></li>
                            <li><Link href="/servicios/comunicaciones" className="hover:text-zegura-orange transition-colors">Comunicaciones</Link></li>
                            <li><Link href="/servicios/alarmas" className="hover:text-zegura-orange transition-colors">Alarmas</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-xl font-display mb-8">Contacto</h4>
                        <ul className="space-y-4 opacity-70">
                            <li>📍 Calle Principal 123, Madrid</li>
                            <li>📞 0300 582 8952</li>
                            <li>✉️ hola@zegura.es</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-50">
                    <p>© {new Date().getFullYear()} Zegura. Todos los derechos reservados.</p>
                    <div className="flex space-x-6">
                        <Link href="/privacidad" className="hover:text-white">Privacidad</Link>
                        <Link href="/cookies" className="hover:text-white">Cookies</Link>
                        <Link href="/legal" className="hover:text-white">Aviso Legal</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
