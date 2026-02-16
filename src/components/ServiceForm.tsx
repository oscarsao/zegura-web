"use client";

import { useState } from 'react';
import { servicesData } from '@/data/services';

interface ServiceFormProps {
    defaultService?: string;
    className?: string;
}

export default function ServiceForm({ defaultService, className = '' }: ServiceFormProps) {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <div className={`bg-white p-8 rounded-[2.5rem] shadow-xl text-center border border-green-100 ${className}`}>
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                    ✅
                </div>
                <h3 className="text-2xl font-bold text-zegura-blue mb-4">¡Solicitud Recibida!</h3>
                <p className="text-zegura-blue/70 mb-8">
                    Uno de nuestros expertos analizará tu caso y te contactará en menos de 24 horas.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-zegura-orange font-bold hover:underline"
                >
                    Enviar otra solicitud
                </button>
            </div>
        );
    }

    return (
        <div className={`bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 ${className}`}>
            <h3 className="text-3xl font-display font-bold text-zegura-blue mb-2">Solicita tu Estudio Gratuito</h3>
            <p className="text-zegura-blue/60 mb-8">Déjanos tus datos y te ayudaremos a ahorrar.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-zegura-blue font-bold mb-2 ml-1 text-sm uppercase tracking-wide">Nombre</label>
                        <input
                            required
                            type="text"
                            placeholder="Tu nombre"
                            className="w-full p-4 border-2 border-background-ghost rounded-2xl bg-background-ghost focus:border-zegura-orange transition-all outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-zegura-blue font-bold mb-2 ml-1 text-sm uppercase tracking-wide">Teléfono</label>
                        <input
                            required
                            type="tel"
                            placeholder="600 000 000"
                            className="w-full p-4 border-2 border-background-ghost rounded-2xl bg-background-ghost focus:border-zegura-orange transition-all outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-zegura-blue font-bold mb-2 ml-1 text-sm uppercase tracking-wide">Email</label>
                    <input
                        required
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full p-4 border-2 border-background-ghost rounded-2xl bg-background-ghost focus:border-zegura-orange transition-all outline-none"
                    />
                </div>

                <div>
                    <label className="block text-zegura-blue font-bold mb-2 ml-1 text-sm uppercase tracking-wide">Servicio de Interés</label>
                    <div className="relative">
                        <select
                            defaultValue={defaultService || ''}
                            className="w-full p-4 border-2 border-background-ghost rounded-2xl bg-background-ghost focus:border-zegura-orange transition-all outline-none appearance-none cursor-pointer"
                        >
                            <option value="" disabled>Selecciona un servicio</option>
                            {servicesData.map(s => (
                                <option key={s.slug} value={s.slug}>{s.title}</option>
                            ))}
                            <option value="otro">Otro / Consulta General</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zegura-blue/50">▼</div>
                    </div>
                </div>

                <div>
                    <label className="block text-zegura-blue font-bold mb-2 ml-1 text-sm uppercase tracking-wide">Mensaje (Opcional)</label>
                    <textarea
                        rows={3}
                        placeholder="Cuéntanos más sobre tu caso..."
                        className="w-full p-4 border-2 border-background-ghost rounded-2xl bg-background-ghost focus:border-zegura-orange transition-all outline-none resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-zegura-orange text-white py-5 rounded-2xl font-black text-xl shadow-lg hover:bg-zegura-blue transition-all active:scale-95 translate-y-0 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {status === 'submitting' ? 'Enviando...' : '¡Quiero Ahorrar!'}
                </button>

                <p className="text-center text-xs text-zegura-blue/40 mt-4">
                    Al enviar aceptas nuestra política de privacidad. Tus datos están 100% seguros.
                </p>
            </form>
        </div>
    );
}
