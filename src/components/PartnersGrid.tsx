import Image from 'next/image';
import { Partner } from '@/data/services';

interface PartnersGridProps {
    partners: Partner[];
    title?: string;
}

export default function PartnersGrid({ partners, title = 'Comparanos entre las principales compañías' }: PartnersGridProps) {
    if (!partners || partners.length === 0) return null;

    return (
        <div className="py-12">
            <h3 className="text-2xl md:text-3xl font-display text-center text-zegura-blue mb-10 opacity-90">{title}</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {partners.map((partner) => (
                    <div
                        key={partner.name}
                        className="w-32 h-20 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 transform hover:scale-110"
                        title={partner.name}
                    >
                        <Image
                            src={partner.logo}
                            alt={`Logo ${partner.name}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100px, 150px"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
