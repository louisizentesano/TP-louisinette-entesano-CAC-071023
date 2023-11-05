    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const correoInput = document.getElementById('correo');
    const cantidadInput = document.getElementById('cantidad');
    const categoriaSelect = document.getElementById('categoria');
    const totalInput = document.getElementById('total');

    // Agrega un evento de clic al botón "Resumen"
    document.getElementById('resumen').addEventListener('click', function (e) {
        e.preventDefault(); 

        // Obtiene los valores ingresados por el usuario
        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const correo = correoInput.value;
        const cantidad = parseInt(cantidadInput.value);
        const categoria = categoriaSelect.value;

        const precioOriginal = 200;

        // Realiza el cálculo del total en función de la cantidad y la categoría
        let total = 0;
        if (categoria === 'opcion1') {
            // Estudiante (80% de descuento)
            total = (precioOriginal - (0.8 * precioOriginal)) * cantidad;
        } else if (categoria === 'opcion2') {
            // Trainee (50% de descuento)
            total = (precioOriginal - (0.5 * precioOriginal)) * cantidad;
        } else if (categoria === 'opcion3') {
            // Junior (15% de descuento)
            total = (precioOriginal - (0.15 * precioOriginal)) * cantidad;
        }

        // Muestra el total en el campo "Total a Pagar"
        totalInput.value = `Total a Pagar: $${total}`;
    });

