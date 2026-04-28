const CONFIG = {
    nombreOptica: "Opti Control",
    eslogan: "Tu visión, nuestra prioridad",
    empresa: "Corporación 360",
    version: "1.0.2",
    creditos: "© 2026 Opti Control by Corporación 360",
    colores: {
        primario: "#1A8D8C",
        secundario: "#6C247B"
    },
    apiEndpoints: {
        pacientes: "/pacientes",
        historias: "/historias",
        ordenes: "/ordenes",
        whatsappBase: "https://api.whatsapp.com/send?phone="
    },
    enviarMensajeOptica: function(telefono, mensaje) {
        const url = `${this.apiEndpoints.whatsappBase}${telefono}&text=${encodeURIComponent(mensaje + "\n\nAtentamente: " + this.nombreOptica)}`;
        window.open(url, '_blank');
    }
};
Object.freeze(CONFIG);
