import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/data/services';
import ServiceForm from '@/components/ServiceForm';
import PartnersGrid from '@/components/PartnersGrid';
import ServiceBenefits from '@/components/ServiceBenefits';
import ServiceProcess from '@/components/ServiceProcess';
import ServiceTestimonial from '@/components/ServiceTestimonial';

interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = servicesData.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    // Dynamically import the MDX content
    const Content = dynamic(() => import(`@/content/servicios/${slug}.mdx`).catch(() => {
        return () => <div className="p-4 bg-red-50 text-red-500 rounded-lg">Contenido detallado en desarrollo...</div>;
    }));

    return (
        <>
            <SEO
                title={service.title}
                description={service.description}
                ogType="article"
            />

            <main className="min-h-screen pt-40 pb-24 px-8 bg-background-ghost">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-3 text-zegura-blue/50 text-sm mb-12 font-bold uppercase tracking-widest">
                        <Link href="/" className="hover:text-zegura-orange transition-colors">Inicio</Link>
                        <span>/</span>
                        <Link href="/servicios" className="hover:text-zegura-orange transition-colors">Servicios</Link>
                        <span>/</span>
                        <span className="text-zegura-blue">{service.title}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Left Column: Content */}
                        <div className="lg:col-span-7">
                            {/* Service Header */}
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                                <div className="relative">
                                    <div className="text-7xl bg-white w-32 h-32 flex items-center justify-center rounded-[2rem] shadow-lg border-2 border-white relative z-10">
                                        {service.icon}
                                    </div>
                                    <div className="absolute -top-4 -left-4 w-full h-full bg-zegura-orange/10 rounded-[2rem] -z-0"></div>
                                </div>
                                <div className="text-center md:text-left">
                                    <h1 className="text-4xl md:text-5xl text-zegura-blue font-display mb-4 leading-tight">{service.title}</h1>
                                    <p className="text-lg text-zegura-blue/70 font-body leading-relaxed">{service.description}</p>
                                </div>
                            </div>

                            {/* Benefits Grid */}
                            <ServiceBenefits benefits={service.benefits} />

                            {/* MDX Content */}
                            <article className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:text-zegura-blue prose-p:text-zegura-blue/80 prose-li:text-zegura-blue/80 prose-strong:text-zegura-orange max-w-none bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-white/50 mb-16">
                                <Content />
                            </article>

                            {/* Service Process */}
                            <div className="mb-16">
                                <ServiceProcess steps={service.process} />
                            </div>

                            {/* Testimonial */}
                            <div className="mb-16">
                                <ServiceTestimonial testimonial={service.testimonial} />
                            </div>

                            {/* Partners Grid */}
                            <div className="mb-16">
                                <PartnersGrid partners={service.partners} />
                            </div>

                        </div>

                        {/* Right Column: Sticky Sidebar with Form & Mascot */}
                        <div className="lg:col-span-5 relative">
                            <div className="sticky top-32 space-y-12">
                                {/* Mascot Image */}
                                <div className="relative h-96 w-full flex justify-center items-center">
                                    <div className="absolute inset-0 bg-zegura-orange/5 rounded-full blur-3xl transform scale-75"></div>
                                    <Image
                                        src={service.mascot || '/assets/cerdito-zegura.png'}
                                        alt="Mascota Zegura"
                                        width={500}
                                        height={500}
                                        className="object-contain drop-shadow-2xl animate-float relative z-10 w-full h-auto max-h-[500px]"
                                    />
                                </div>

                                {/* Request Form */}
                                <ServiceForm defaultService={service.slug} className="shadow-[0_20px_60px_rgba(0,15,92,0.1)]" />

                                {/* Guarantee Badge */}
                                <div className="flex items-center gap-4 bg-green-50 p-6 rounded-3xl border border-green-100">
                                    <div className="text-3xl">🛡️</div>
                                    <div>
                                        <h4 className="font-bold text-green-800">Garantía Zegura</h4>
                                        <p className="text-sm text-green-700">Estudio 100% gratuito y sin compromiso.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
