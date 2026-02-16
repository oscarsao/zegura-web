import { Benefit } from '@/data/services';

interface ServiceBenefitsProps {
    benefits: Benefit[];
}

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
    if (!benefits || benefits.length === 0) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
                <div key={index} className="p-6 bg-white rounded-3xl border border-gray-100 hover:border-zegura-orange/30 hover:shadow-lg transition-all group">
                    <div className="text-4xl mb-4 bg-background-ghost w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-zegura-blue mb-2 font-display">{benefit.title}</h3>
                    <p className="text-zegura-blue/70 leading-snug text-sm">
                        {benefit.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
