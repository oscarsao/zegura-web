import { Testimonial } from '@/data/services';

interface ServiceTestimonialProps {
    testimonial: Testimonial;
}

export default function ServiceTestimonial({ testimonial }: ServiceTestimonialProps) {
    if (!testimonial) return null;

    return (
        <div className="mb-16 bg-zegura-blue/5 p-10 rounded-[3rem] relative">
            <div className="text-6xl text-zegura-orange/20 absolute top-6 left-8 font-serif leading-none">“</div>
            <figure className="relative z-10 text-center max-w-2xl mx-auto">
                <blockquote className="text-xl md:text-2xl text-zegura-blue font-medium italic leading-relaxed mb-6">
                    "{testimonial.quote}"
                </blockquote>
                <figcaption>
                    <div className="font-bold text-zegura-blue">{testimonial.author}</div>
                    <div className="text-sm text-zegura-blue/60 uppercase tracking-wide">{testimonial.role}</div>
                </figcaption>
            </figure>
        </div>
    );
}
