// ================== INSTRUMENTOS ==================
const reservasInstrumentos = JSON.parse(localStorage.getItem("reservasInstrumentos")) || [];
const tbodyInstrumentos = document.getElementById("reservasInstrumentosBody");

if (reservasInstrumentos.length === 0) {
    tbodyInstrumentos.innerHTML = `<tr><td colspan="3">No hay reservas de instrumentos registradas.</td></tr>`;
} else {
    reservasInstrumentos.forEach(r => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${r.usuario}</td>
            <td>${r.instrumento}</td>
            <td>${r.fecha}</td>
        `;
        tbodyInstrumentos.appendChild(fila);
    });
}