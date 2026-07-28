function mostrarTicket(datos) {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:#0f172a;z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;';

    const tacosLineas = Object.entries(datos.tacosPorTipo || {})
        .filter(([_, cant]) => cant > 0)
        .map(([tipo, cant]) => `<div style="display:flex;justify-content:space-between;font-size:14px;padding:4px 0;"><span style="text-transform:capitalize;">${tipo}</span><span>${cant}</span></div>`)
        .join('');

    const bebidasLineas = Object.entries(datos.bebidasPorTipo || {})
        .filter(([_, cant]) => cant > 0)
        .map(([tipo, cant]) => `<div style="display:flex;justify-content:space-between;font-size:14px;padding:4px 0;"><span style="text-transform:capitalize;">${tipo.replace('_', ' ')}</span><span>${cant}</span></div>`)
        .join('');

    overlay.innerHTML = `
        <div style="background:#1e293b;border-radius:24px;max-width:400px;width:100%;padding:24px;color:#f1f5f9;">
            <div style="text-align:center;font-size:48px;">🧾</div>
            <h2 style="text-align:center;font-size:24px;font-weight:800;margin:8px 0 4px;">Cuenta pedida</h2>
            <p style="text-align:center;color:#94a3b8;margin-bottom:4px;">${datos.origen}</p>
            <p style="text-align:center;color:#cbd5e1;margin-bottom:2px;">Mesero que abrió: <strong>${datos.mesero}</strong></p>
            <p style="text-align:center;color:#cbd5e1;margin-bottom:16px;">Cuenta solicitada por: <strong>${datos.solicitadoPor}</strong></p>
            <hr style="border-color:#334155;margin:12px 0;">
            <p style="font-weight:700;margin-bottom:4px;">🌮 Tacos</p>
            ${tacosLineas || '<p style="color:#64748b;font-size:14px;">Sin tacos</p>'}
            <p style="font-weight:700;margin:12px 0 4px;">🥤 Bebidas</p>
            ${bebidasLineas || '<p style="color:#64748b;font-size:14px;">Sin bebidas</p>'}
            <hr style="border-color:#334155;margin:12px 0;">
            <div style="display:flex;justify-content:space-between;font-size:20px;font-weight:800;">
                <span>Total</span><span>$${datos.total}</span>
            </div>
            <button id="btn-cerrar-ticket" style="width:100%;margin-top:20px;background:#7e22ce;padding:14px;border-radius:16px;font-weight:700;border:none;color:white;">Aceptar</button>
        </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector('#btn-cerrar-ticket').addEventListener('click', () => overlay.remove());
}