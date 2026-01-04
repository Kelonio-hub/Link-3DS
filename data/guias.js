// guias.js - Lógica del modal de guía + generación dinámica del HTML

// Crear el modal de guía dinámicamente (para rebajar código en index.html)
function crearModalGuia() {
  const guiaModal = document.createElement('div');
  guiaModal.id = 'guiaModal';
  guiaModal.innerHTML = `
    <div class="guia-content">
      <span class="guia-close" id="guiaClose">×</span>
      
      <h2 class="guia-titulo" id="guiaTitulo"></h2>
      
      <div class="guia-grid">
        <div>
          <div class="guia-descripcion-corta" id="guiaDescripcionCorta"></div>
          
          <div class="guia-seccion-titulo guia-pasos-titulo">Pasos a Seguir</div>
          <div class="guia-pasos note" id="guiaPasos"></div>
        </div>
        
        <div class="guia-derecha">
          <div class="video-wrapper" id="videoWrapper">
            <iframe id="guiaVideo" src="" allowfullscreen allow="autoplay"></iframe>
          </div>
          
          <div class="guia-archivo-btn" id="btnDescargarGuia">
            <img src="https://raw.githubusercontent.com/Kelonio-hub/Link-3DS/main/Logo%20Zip.png" alt="Archivo RAR">
            Descargar Archivos
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(guiaModal);

  // Referencias ahora disponibles
  const guiaTitulo = document.getElementById('guiaTitulo');
  const guiaDescripcionCorta = document.getElementById('guiaDescripcionCorta');
  const guiaPasos = document.getElementById('guiaPasos');
  const guiaVideo = document.getElementById('guiaVideo');
  const btnDescargarGuia = document.getElementById('btnDescargarGuia');
  const guiaClose = document.getElementById('guiaClose');

  // Función principal
  window.mostrarModalGuia = function(item, consoleId) {
    guiaTitulo.textContent = item.label[idiomaActual] || item.label.es || item.label.en;

    const descCorta = item.descripcionCorta?.[idiomaActual] || item.descripcionCorta?.es || '';
    guiaDescripcionCorta.innerHTML = descCorta.replace(/\n/g, '<br>');

    const pasos = item.pasos?.[idiomaActual] || item.pasos?.es || '';
    guiaPasos.innerHTML = '<ol>' + 
      pasos.split('\n')
        .filter(l => l.trim() !== '')
        .map(l => `<li>${l}</li>`)
        .join('') + 
      '</ol>';

    if (item.videoYoutubeId) {
      guiaVideo.src = `https://www.youtube.com/embed/${item.videoYoutubeId}?rel=0&modestbranding=1&autoplay=1`;
      document.getElementById('videoWrapper').style.display = 'block';
    } else {
      guiaVideo.src = '';
      document.getElementById('videoWrapper').style.display = 'none';
    }

    btnDescargarGuia.onclick = () => {
      guiaModal.style.display = 'none';
      if (item.url) {
        mostrarModalDonacion(item.url, consoleId);
      }
    };

    guiaModal.style.display = 'flex';
  };

  // Cerrar modal
  guiaClose.onclick = () => {
    guiaModal.style.display = 'none';
    guiaVideo.src = '';
  };

  guiaModal.onclick = (e) => {
    if (e.target === guiaModal) {
      guiaModal.style.display = 'none';
      guiaVideo.src = '';
    }
  };
}

// Crear el modal al cargar guias.js
crearModalGuia();