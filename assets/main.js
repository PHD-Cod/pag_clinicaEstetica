document.addEventListener('click', function(event) {
      if (event.target.classList.contains('palavra-clicavel')) {
        const textoParaExibir = event.target.dataset.texto;
        const elementoDestino = document.getElementById('texto-destino');
        if (elementoDestino) {
          elementoDestino.textContent = textoParaExibir;
        }
      }
    });