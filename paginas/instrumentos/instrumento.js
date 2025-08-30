document.querySelectorAll(".btn-reservar").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const usuario = localStorage.getItem("usuario"); // usuario logueado
        const instrumentos = ["Proyector portátil", "Notebook", "Otro instrumento"];
        
        const reserva = {
            usuario: usuario || "Invitado",
            instrumento: instrumentos[index],
            fecha: new Date().toLocaleDateString()
        };

        // Guardar en localStorage
        const reservas = JSON.parse(localStorage.getItem("reservasInstrumentos")) || [];
        reservas.push(reserva);
        localStorage.setItem("reservasInstrumentos", JSON.stringify(reservas));

        alert(`¡Reserva exitosa! Guardada para ${reserva.instrumento}`);
    });
});