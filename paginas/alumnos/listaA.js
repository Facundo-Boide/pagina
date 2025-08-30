// Recuperar reservas del localStorage
const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
const tbody = document.getElementById("reservasBody");

if (reservas.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4">No hay reservas de aulas registradas.</td></tr>`;
} else {
    reservas.forEach((r, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${r.usuario}</td>
            <td>${r.aula}</td>
            <td>${r.fecha}</td>
            <td><button class="btn-eliminar" data-tipo="aulas" data-index="${index}">❌</button></td>
        `;
        tbody.appendChild(fila);
    });
}

const reservasInstrumentos = JSON.parse(localStorage.getItem("reservasInstrumentos")) || [];
const tbodyInstrumentos = document.getElementById("reservasInstrumentosBody");

if (reservasInstrumentos.length === 0) {
    tbodyInstrumentos.innerHTML = `<tr><td colspan="4">No hay reservas de instrumentos registradas.</td></tr>`;
} else {
    reservasInstrumentos.forEach((r, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${r.usuario}</td>
            <td>${r.instrumento}</td>
            <td>${r.fecha}</td>
            <td><button class="btn-eliminar" data-tipo="instrumentos" data-index="${index}">❌</button></td>
        `;
        tbodyInstrumentos.appendChild(fila);
    });
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-eliminar")) {
        const tipo = e.target.dataset.tipo; // "aulas" o "instrumentos"
        const index = e.target.dataset.index;

        if (tipo === "aulas") {
            let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
            reservas.splice(index, 1);
            localStorage.setItem("reservas", JSON.stringify(reservas));
        } else if (tipo === "instrumentos") {
            let reservasInstrumentos = JSON.parse(localStorage.getItem("reservasInstrumentos")) || [];
            reservasInstrumentos.splice(index, 1);
            localStorage.setItem("reservasInstrumentos", JSON.stringify(reservasInstrumentos));
        }

        location.reload(); // refresca la tabla
    }
});