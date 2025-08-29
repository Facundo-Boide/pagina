    // Buscar todos los botones de reservar
    document.querySelectorAll(".btn-reservar").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const usuario = localStorage.getItem("usuarioLogueado");
            if (!usuario) {
                alert("Debes iniciar sesión para reservar.");
                return;
            }

            // Buscar el nombre del aula correspondiente
            const instrumento = btn.closest(".aula").querySelector("h2").textContent;

            // Crear objeto reserva
            const reserva = {
                usuario: usuario,
                aula: instrumento,
                fecha: new Date().toLocaleString()
            };

            // Guardar en localStorage (como lista)
            let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
            reservas.push(reserva);
            localStorage.setItem("reservas", JSON.stringify(reservas));

            alert("Reserva realizada en " + instrumento + " a nombre de " + usuario);
        });
    });