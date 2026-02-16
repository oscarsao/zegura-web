import { ProcessStep } from '@/data/services';

interface ServiceProcessProps {
    steps: ProcessStep[];
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
    if (!steps || steps.length === 0) return null;

    return (
        <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-zegura-blue mb-10 text-center">¿Cómo funciona?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center group">
                        {/* Connecting Line (only for first 2 steps on desktop) */}
                        {index < steps.length - 1 && (
                            <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-zegura-blue/10 -z-10"></div>
                        )}

                        <div className="w-16 h-16 rounded-full bg-zegura-orange text-white text-2xl font-black flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10 border-4 border-white">
                            {step.step}
                        </div>
                        <h4 className="text-xl font-bold text-zegura-blue mb-3">{step.title}</h4>
                        <p className="text-zegura-blue/70 leading-relaxed text-sm px-4">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
