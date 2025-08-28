// Recuperar reservas del localStorage
const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
const tbody = document.getElementById("reservasBody");

if (reservas.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3">No hay reservas registradas.</td></tr>`;
} else {
    reservas.forEach(r => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${r.usuario}</td>
            <td>${r.aula}</td>
            <td>${r.fecha}</td>
        `;
        tbody.appendChild(fila);
    });
}