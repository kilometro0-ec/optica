/**
 * CONFIGURACIÓN GLOBAL DEL SISTEMA - OPTI CONTROL
 * Administrado por: Corporación 360
 */

const CONFIG = {
    // Información de Marca
    nombreOptica: "Opti Control",
    eslogan: "Tu visión, nuestra prioridad",
    empresa: "Corporación 360",
    
    // Versión y Créditos
    version: "1.0.2",
    creditos: "© 2026 Opti Control by Corporación 360",
    
    // Identidad Visual (Colores extraídos del logo)
    colores: {
        primario: "#1A8D8C",    // Turquesa Óptica
        secundario: "#6C247B",  // Violeta Good Look
        fondo: "#f8f9ff",
        blanco: "#ffffff"
    },

    // Configuración de API / Base de Datos (Estructura para Firebase u otros)
    apiEndpoints: {
        pacientes: "/pacientes",
        historias: "/historias",
        ordenes: "/ordenes",
        whatsappBase: "https://api.whatsapp.com/send?phone="
    },

    // Función para mensajes automáticos de WhatsApp
    enviarMensajeOptica: function(telefono, mensaje) {
        const url = `${this.apiEndpoints.whatsappBase}${telefono}&text=${encodeURIComponent(mensaje + "\n\nAtentamente: " + this.nombreOptica)}`;
        window.open(url, '_blank');
    }
};

// Congelar el objeto para evitar modificaciones accidentales en tiempo de ejecución
Object.freeze(CONFIG);
