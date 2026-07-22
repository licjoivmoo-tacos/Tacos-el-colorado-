// ticket.js
// Muestra un resumen tipo "ticket digital" a pantalla completa cuando se pide la cuenta.
// Para cambiar el diseño o la información mostrada, solo se edita ESTE archivo.

function mostrarTicket(datos) {
    // datos = { origen, mesero, cantidadTacos, cantidadBebidas, total }

    const overlay = document.createElement('div');
    overlay.id = 'ticket-overlay';
    overlay.className = 'fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4';

    overlay.innerHTML = `
        <div class="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full max-w-sm space-y-4 text-center">
            <p class="text-3xl">🧾</p>
            <h2 class="text-xl font-extrabold">Cuenta pedida</h2>
            <p class="text-gray-400 text-sm">${datos.origen}</p>
            <p class="text-gray-400 text-sm">Mesero: <span class="text-gray-200 font-semibold">${datos.mesero}</span></p>

            <div class="border-t border-gray-700 my-2"></div>

            <div class="flex justify-between text-sm text-gray-300">
                <span>🌮 Tacos</span>
                <span>${datos.cantidadTacos}</span>
            </div>
            <div class="flex justify-between text-sm text-gray-300">
                <span>🥤 Bebidas</span>
                <span>${datos.cantidadBebidas}</span>
            </div>

            <div class="border-t border-gray-700 my-2"></div>

            <div class="flex justify-between text-lg font-extrabold">
                <span>Total</span>
                <span>$${datos.total}</span>
            </div>

            <button id="btn-cerrar-ticket" class="w-full bg-purple-700 hover:bg-purple-600 rounded-xl py-3 font-bold mt-2">
                Aceptar
            </button>
        </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById('btn-cerrar-ticket').addEventListener('click', () => {
        overlay.remove();
    });
}