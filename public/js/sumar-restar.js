 // Función para sumar al valor del input
    function sumar(btn) {
      const input = btn.parentElement.previousElementSibling; // Busca el input anterior al botón
      let valorActual = parseInt(input.value) || 0;
      const maximo = parseInt(input.getAttribute('max')) || Infinity;

      if (valorActual < maximo) {
        input.value = valorActual + 1;
      }
    }

    // Función para restar al valor del input
    function restar(btn) {
      const input = btn.parentElement.previousElementSibling; // Busca el input anterior al botón
      let valorActual = parseInt(input.value) || 0;
      const minimo = parseInt(input.getAttribute('min')) || 0;

      if (valorActual > minimo) {
        input.value = valorActual - 1;
      }
    }