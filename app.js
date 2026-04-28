/**
 * LÓGICA PRINCIPAL - OPTI CONTROL
 * Maneja la inyección dinámica de nombres, títulos y créditos.
 */

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Inyectar Nombre de la Óptica en la Cabecera (Logo)
    // Busca el elemento con ID "app-name"
    const appNameEl = document.getElementById("app-name");
    if (appNameEl && typeof CONFIG !== 'undefined') {
        appNameEl.textContent = CONFIG.nombreOptica.toUpperCase();
    }

    // 2. Actualizar el Título de la Pestaña (Navegador)
    // Toma el texto del primer H2 (ej: "Pacientes") y le suma el nombre de la óptica
    const sectionHeader = document.querySelector('h2');
    if (sectionHeader && typeof CONFIG !== 'undefined') {
        const sectionTitle = sectionHeader.textContent.trim();
        document.title = `${sectionTitle} | ${CONFIG.nombreOptica}`;
    }

    // 3. Inyectar Créditos y Versión en el Footer
    // Busca un elemento con la clase ".footer"
    const footerEl = document.querySelector(".footer");
    if (footerEl && typeof CONFIG !== 'undefined') {
        footerEl.innerHTML = `by ${CONFIG.empresa.toUpperCase()} | V.${CONFIG.version}`;
    }

    // 4. Lógica de Navegación Activa (Opcional)
    // Esto ayuda a resaltar en qué página estamos en el menú inferior
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('text-primary'); // Color turquesa para el icono activo
            link.classList.remove('text-slate-400');
        }
    });

    console.log(`${CONFIG.nombreOptica} App cargada correctamente.`);
});
