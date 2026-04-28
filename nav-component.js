function cargarNavegacion() {
    const navHTML = `
    <nav class="fixed bottom-0 w-full z-50 bg-white border-t border-slate-100 pb-safe shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
        <div class="flex justify-around items-center h-20 w-full px-2 max-w-md mx-auto">
            <a href="menu.html" class="nav-link flex flex-col items-center justify-center text-slate-300 w-full py-2 hover:text-primary transition-all" data-page="menu">
                <span class="material-symbols-outlined text-2xl">grid_view</span>
                <span class="font-manrope text-[10px] font-bold mt-1 uppercase tracking-tighter">Panel</span>
            </a>
            <a href="pacientes.html" class="nav-link flex flex-col items-center justify-center text-slate-300 w-full py-2 hover:text-primary transition-all" data-page="pacientes">
                <span class="material-symbols-outlined text-2xl">group</span>
                <span class="font-manrope text-[10px] font-bold mt-1 uppercase tracking-tighter">Pacientes</span>
            </a>
            <a href="historias.html" class="nav-link flex flex-col items-center justify-center text-slate-300 w-full py-2 hover:text-primary transition-all" data-page="historias">
                <span class="material-symbols-outlined text-2xl">medical_information</span>
                <span class="font-manrope text-[10px] font-bold mt-1 uppercase tracking-tighter">Historias</span>
            </a>
            <a href="agenda.html" class="nav-link flex flex-col items-center justify-center text-slate-300 w-full py-2 hover:text-primary transition-all" data-page="agenda">
                <span class="material-symbols-outlined text-2xl">calendar_month</span>
                <span class="font-manrope text-[10px] font-bold mt-1 uppercase tracking-tighter">Agenda</span>
            </a>
            <a href="ordenes.html" class="nav-link flex flex-col items-center justify-center text-slate-300 w-full py-2 hover:text-primary transition-all" data-page="ordenes">
                <span class="material-symbols-outlined text-2xl">precision_manufacturing</span>
                <span class="font-manrope text-[10px] font-bold mt-1 uppercase tracking-tighter">Laboratorio</span>
            </a>
        </div>
    </nav>
    `;

    // Insertar el menú al final del body
    document.body.insertAdjacentHTML('beforeend', navHTML);

    // Lógica para resaltar el botón de la página actual
    const path = window.location.pathname;
    const currentPage = path.split("/").pop().replace(".html", "") || "index";

    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('text-primary');
            link.classList.remove('text-slate-300');
            // Rellenar el icono si es la página activa
            link.querySelector('.material-symbols-outlined').style.fontVariationSettings = "'FILL' 1, 'wght' 600";
            // Asegurar que el texto se vea más fuerte
            link.querySelector('span:last-child').classList.add('text-primary');
        }
    });
}

document.addEventListener('DOMContentLoaded', cargarNavegacion);
