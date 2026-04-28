document.addEventListener("DOMContentLoaded", function() {
    // 1. Cambiar el nombre de la Óptica en la cabecera
    const appNameEl = document.getElementById("app-name");
    if (appNameEl) {
        appNameEl.textContent = CONFIG.nombreOptica.toUpperCase();
    }

    // 2. Cambiar el <title> de la pestaña automáticamente
    // Esto toma el texto del H2 (ej: "Pacientes") y le suma el nombre de la óptica
    const sectionTitle = document.querySelector('h2')?.textContent || "Panel";
    document.title = `${sectionTitle} | ${CONFIG.nombreOptica}`;
});
document.addEventListener("DOMContentLoaded", function () {

  const version = "0.0.5";

  document.querySelector(".footer").innerHTML =
    `by CORPORACIÓN 360 | V.${version}`;

});
