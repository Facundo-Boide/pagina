    // Buscar todos los botones de reservar
    document.querySelectorAll(".btn-reservar").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const usuario = localStorage.getItem("usuarioLogueado");
            if (!usuario) {
                alert("Debes iniciar sesión para reservar.");
                return;
            }

            // Buscar el nombre del aula correspondiente
            const instrumentoEl = btn.closest(".aula").querySelector("h2");
            const instrumento = (instrumentoEl?.textContent || "").trim() || "Instrumento";  

            // Crear objeto reserva
            const reserva = {
                usuario,
                instrumento,
                fecha: new Date().toLocaleString()
            };

            // Guardar en localStorage (como lista)
            let reservasInst = JSON.parse(localStorage.getItem("reservasInstrumentos")) || [];
            reservasInst.push(reserva);
            localStorage.setItem("reservasInstrumentos", JSON.stringify(reservasInst));

            alert("Reserva realizada en " + instrumento + " a nombre de " + usuario);
        });
    });