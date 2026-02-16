export interface Partner {
    name: string;
    logo: string;
}

export interface Benefit {
    title: string;
    description: string;
    icon: string;
}

export interface ProcessStep {
    step: number;
    title: string;
    description: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

export interface ServiceData {
    id: string;
    title: string;
    slug: string;
    description: string;
    shortDescription: string;
    icon: string;
    color: string;
    mascot: string;
    partners: Partner[];
    benefits: Benefit[];
    process: ProcessStep[];
    testimonial: Testimonial;
}

export const servicesData: ServiceData[] = [
    // ... (previous content unchanged)
    {
        id: 'energia',
        title: 'Energía: Luz y Gas',
        slug: 'energia',
        description: 'Optimizamos tus contratos de luz y gas analizando más de 20 comercializadoras. Deja de pagar de más por la misma energía.',
        shortDescription: 'Ahorra hasta un 30% en tus facturas de luz y gas.',
        icon: '⚡',
        color: 'bg-orange-50',
        mascot: '/assets/cerdo-zegura-2.png',
        partners: [
            { name: 'Endesa', logo: '/assets/endesa.png' },
            { name: 'Iberdrola', logo: '/assets/iberdrola.png' },
            { name: 'Naturgy', logo: '/assets/naturgy.png' },
            { name: 'TotalEnergies', logo: '/assets/total-energies.png' },
            { name: 'Eleia', logo: '/assets/eleia.png' }
        ],
        benefits: [
            { title: 'Estudio Gratuito', description: 'Analizamos tus facturas sin coste alguno.', icon: '📊' },
            { title: 'Sin Papeleos', description: 'Nos encargamos de todos los trámites de cambio.', icon: '📝' },
            { title: 'Ahorro Real', description: 'Reducción media del 30% en la factura anual.', icon: '💰' },
            { title: 'Gestor Personal', description: 'Un experto asignado para resolver tus dudas.', icon: '👨‍💼' }
        ],
        process: [
            { step: 1, title: 'Envíanos tu factura', description: 'Solo necesitamos una foto de tu última factura de luz o gas.' },
            { step: 2, title: 'Analizamos el mercado', description: 'Comparamos tu tarifa actual con las 20 mejores opciones del momento.' },
            { step: 3, title: 'Empiezas a ahorrar', description: 'Nos ocupamos del cambio de compañía. Sin cortes ni molestias.' }
        ],
        testimonial: {
            quote: "Gracias a Zegura he bajado mi factura de 120€ a 85€ al mes sin hacer nada. Se encargaron de todo.",
            author: "María González",
            role: "Propietaria de Cafetería"
        }
    },
    {
        id: 'seguros',
        title: 'Seguros',
        slug: 'seguros',
        description: 'Comparamos seguros de hogar, vida, salud y auto para darte las coberturas que necesitas al mejor precio del mercado.',
        shortDescription: 'Las mejores pólizas para tu tranquilidad y la de tu familia.',
        icon: '🛡️',
        color: 'bg-blue-50',
        mascot: '/assets/cerdito-medico-para-seguros-zegura-web.png',
        partners: [
            // { name: 'Axa', logo: '/assets/12.png' },
            // { name: 'Mapfre', logo: '/assets/13.png' },
            // { name: 'Allianz', logo: '/assets/14.png' },
            // { name: 'Generali', logo: '/assets/15.png' }
        ],
        benefits: [
            { title: 'Unificación', description: 'Agrupa tus pólizas y ahorra hasta un 15%.', icon: '🔗' },
            { title: 'Mejores Coberturas', description: 'Revisamos la letra pequeña por ti.', icon: '🔍' },
            { title: 'Gestión de Siniestros', description: 'Te defendemos ante las aseguradoras.', icon: '⚖️' },
            { title: 'Todo en Uno', description: 'Hogar, Auto, Vida y Salud con un solo gestor.', icon: '🏠' }
        ],
        process: [
            { step: 1, title: 'Revisión de Pólizas', description: 'Auditamos tus seguros actuales para detectar duplicidades o carencias.' },
            { step: 2, title: 'Negociación', description: 'Hablamos con las aseguradoras para mejorar precio y coberturas.' },
            { step: 3, title: 'Tranquilidad Total', description: 'Te presentamos la mejor opción y gestionamos el cambio.' }
        ],
        testimonial: {
            quote: "Tenía 4 seguros dispersos y pagaba una barbaridad. Zegura me los unificó y ahora tengo mejores coberturas ahorrando dinero.",
            author: "Carlos Ruiz",
            role: "Padre de familia"
        }
    },
    {
        id: 'comunicaciones',
        title: 'Telecomunicaciones',
        slug: 'comunicaciones',
        description: 'Fibra, móvil y TV. Buscamos la combinación perfecta de velocidad y precio entre todas las operadoras líderes.',
        shortDescription: 'Conectividad máxima sin pagar de más.',
        icon: '📶',
        color: 'bg-purple-50',
        mascot: '/assets/cerdito-ejecutivo-llamando-zegura-web.png',
        partners: [
            { name: 'Vodafone', logo: '/assets/vodafone.png' },
            { name: 'Orange', logo: '/assets/orange.png' },
            { name: 'Jazztel', logo: '/assets/jazztel.png' },
            { name: 'Lowi', logo: '/assets/lowi.png' },
            { name: 'MasMovil', logo: '/assets/masmovil.png' },
            { name: 'Pepephone', logo: '/assets/pepephone.png' },
            { name: 'Simyo', logo: '/assets/simyo.png' },
            { name: 'O2', logo: '/assets/o2.png' },
            { name: 'Digi', logo: '/assets/digi.png' },
            { name: 'Finetwork', logo: '/assets/finetwork.png' }
        ],
        benefits: [
            { title: 'Máxima Velocidad', description: 'Comparamos la cobertura real en tu zona.', icon: '🚀' },
            { title: 'Sin Permanencia', description: 'Priorizamos ofertas libres de ataduras.', icon: '🔓' },
            { title: 'Pack Familiar', description: 'Líneas adicionales al mejor precio.', icon: '👨‍👩‍👧‍👦' },
            { title: 'Soporte Técnico', description: 'Te ayudamos si tienes cortes o problemas.', icon: '🛠️' }
        ],
        process: [
            { step: 1, title: 'Test de Cobertura', description: 'Verificamos qué compañía ofrece la mejor señal real en tu dirección.' },
            { step: 2, title: 'Diseño del Pack', description: 'Configuramos los gigas y la velocidad según lo que realmente usas.' },
            { step: 3, title: 'Instalación', description: 'Coordinamos al técnico y aseguramos que todo quede funcionando.' }
        ],
        testimonial: {
            quote: "Me vendían 600Mb que nunca llegaban. Zegura me recomendó otra compañía y ahora mi internet vuela de verdad.",
            author: "Laura M.",
            role: "Diseñadora Freelance"
        }
    },
    {
        id: 'alarmas',
        title: 'Alarmas',
        slug: 'alarmas',
        description: 'Protege lo que más importa con sistemas de alarma de última generación conectados 24/7 a central receptora.',
        shortDescription: 'Seguridad total para tu hogar o negocio.',
        icon: '🏠',
        color: 'bg-red-50',
        mascot: '/assets/cerdito-vigilante-zegura-web.png',
        partners: [
            { name: 'Securitas Direct', logo: '/assets/securitas-direct.png' },
            { name: 'ADT', logo: '/assets/admo.png' }
        ],
        benefits: [
            { title: 'Conexión 24/7', description: 'Central receptora siempre alerta.', icon: '🚨' },
            { title: 'Video Verificación', description: 'Cámaras de alta resolución incluidas.', icon: '📹' },
            { title: 'Anti-Inhibición', description: 'Tecnología para evitar sabotajes.', icon: '🛡️' },
            { title: 'Control Móvil', description: 'Gestiona tu alarma desde la App.', icon: '📱' }
        ],
        process: [
            { step: 1, title: 'Estudio de Seguridad', description: 'Analizamos los puntos vulnerables de tu vivienda o local.' },
            { step: 2, title: 'Propuesta Personalizada', description: 'Diseñamos el sistema de videovigilancia y sensores ideal.' },
            { step: 3, title: 'Instalación Rápida', description: 'Técnicos certificados instalan tu sistema en pocas horas.' }
        ],
        testimonial: {
            quote: "Instalaron la alarma en mi negocio muy rápido. Me siento mucho más segura y la app es súper fácil de usar.",
            author: "Elena T.",
            role: "Dueña de Tienda de Moda"
        }
    },
    {
        id: 'hipotecas',
        title: 'Hipotecas',
        slug: 'hipotecas',
        description: 'Negociamos con los bancos para mejorar tu hipoteca actual o conseguir las mejores condiciones para tu nueva vivienda.',
        shortDescription: 'Mejora tu hipoteca y ahorra miles de euros en intereses.',
        icon: '💰',
        color: 'bg-yellow-50',
        mascot: '/assets/cerdo-zegura-hucha-web.png',
        partners: [
            // { name: 'Santander', logo: '/assets/16.png' },
            // { name: 'BBVA', logo: '/assets/17.png' },
            // { name: 'CaixaBank', logo: '/assets/18.png' },
            // { name: 'Sabadell', logo: '/assets/19.png' }
        ],
        benefits: [
            { title: 'Menor Interés', description: 'Negociamos tipos por debajo del mercado.', icon: '📉' },
            { title: 'Estudio Viabilidad', description: 'Sabrás qué casa puedes permitirte.', icon: '🏠' },
            { title: 'Gastos Incluidos', description: 'Claridad total en la provisión de fondos.', icon: '📑' },
            { title: 'Acompañamiento', description: 'Estamos contigo hasta la firma en notaría.', icon: '🤝' }
        ],
        process: [
            { step: 1, title: 'Análisis Financiero', description: 'Estudiamos tu perfil para ver hasta dónde puedes llegar.' },
            { step: 2, title: 'Negociación Bancaria', description: 'Presentamos tu caso a múltiples bancos para que compitan.' },
            { step: 3, title: 'Firma Mejores Condiciones', description: 'Te acompañamos a notaría para cerrar el trato.' }
        ],
        testimonial: {
            quote: "Pensaba que no me darían la hipoteca, pero Zegura la consiguió y con un interés más bajo del que me ofrecía mi propio banco.",
            author: "Javier y Ana",
            role: "Primeros Compradores"
        }
    }
];
