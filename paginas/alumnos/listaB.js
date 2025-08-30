// Recuperar reservas del localStorage
const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
const tbody = document.getElementById("reservasBody");

if (reservas.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3">No hay reservas de aulas registradas.</td></tr>`;
} else {
    reservas.forEach((r, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${r.usuario}</td>
            <td>${r.aula}</td>
            <td>${r.fecha}</td>
        `;
        tbody.appendChild(fila);
    });
}

const reservasInstrumentos = JSON.parse(localStorage.getItem("reservasInstrumentos")) || [];
const tbodyInstrumentos = document.getElementById("reservasInstrumentosBody");

if (reservasInstrumentos.length === 0) {
    tbodyInstrumentos.innerHTML = `<tr><td colspan="3">No hay reservas de instrumentos registradas.</td></tr>`;
} else {
    reservasInstrumentos.forEach((r, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${r.usuario}</td>
            <td>${r.instrumento}</td>
            <td>${r.fecha}</td>
        `;
        tbodyInstrumentos.appendChild(fila);
    });
}