    // Recuperar reservas del localStorage
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    const lista = document.getElementById("listaReservas");

    if (reservas.length === 0) {
        lista.innerHTML = "<li>No hay reservas registradas.</li>";
    } else {
        reservas.forEach(r => {
            const li = document.createElement("li");
            li.textContent = `${r.usuario} reservó ${r.aula} el ${r.fecha}`;
            lista.appendChild(li);
        });
    }