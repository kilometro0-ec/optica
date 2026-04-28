function cargarNavegacion() {
    const navHTML = `
    <nav class="fixed bottom-0 w-full z-50 bg-white border-t border-slate-200 pb-safe shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div class="flex justify-around items-center h-16 w-full px-2">
            <a href="menu.html" class="nav-link flex flex-col items-center justify-center text-slate-400 w-full py-1" data-page="menu">
                <span class="material-symbols-outlined">dashboard</span>
                <span class="font-manrope text-[10px] font-medium">Panel</span>
            </a>
            <a href="inicio.html" class="nav-link flex flex-col items-center justify-center text-slate-400 w-full py-1" data-page="inicio">
                <span class="material-symbols-outlined">analytics</span>
                <span class="font-manrope text-[10px] font-medium">Gestión</span>
            </a>
            <a href="pacientes.html" class="nav-link flex flex-col items-center justify-center text-slate-400 w-full py-1" data-page="pacientes">
                <span class="material-symbols-outlined">group</span>
                <span class="font-manrope text-[10px] font-medium">Pacientes</span>
            </a>
            <a href="ordenes.html" class="nav-link flex flex-col items-center justify-center text-slate-400 w-full py-1" data-page="ordenes">
                <span class="material-symbols-outlined">shopping_cart</span>
                <span class="font-manrope text-[10px] font-medium">Órdenes</span>
            </a>
        </div>
    </nav>
    `;

    // Insertar el menú al final del body
    document.body.insertAdjacentHTML('beforeend', navHTML);

    // Lógica para resaltar el botón de la página actual
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('text-primary');
            link.classList.remove('text-slate-400');
            link.querySelector('.material-symbols-outlined').style.fontVariationSettings = "'FILL' 1";
            link.querySelector('span:last-child').classList.replace('font-medium', 'font-bold');
        }
    });
}

document.addEventListener('DOMContentLoaded', cargarNavegacion);
