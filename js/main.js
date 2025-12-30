import { changeLanguage } from './i18n.js';
import { state, setUnlocked } from './state.js';
import { loadAllData } from './data.js';
import { renderConsoleButtons, renderContent } from './ui.js';
import { DOM, DELAYS } from './config.js';

let consolesCreated = false;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function unlockSequence() {
  DOM.subscribeBtn.style.display = 'none';
  await delay(DELAYS.showLoading);
  
  DOM.loadingText.innerHTML = document.getElementById('loadingText').innerHTML; // mantener idioma actual
  DOM.loading.style.display = 'flex';

  await delay(DELAYS.showContent);

  const success = await loadAllData();
  DOM.loading.style.display = 'none';

  if (!success) {
    DOM.subscribeBtn.style.display = 'block';
    return;
  }

  setUnlocked(true);
  DOM.consoleSearchContainer.style.display = 'flex';

  if (!consolesCreated) {
    renderConsoleButtons();
    consolesCreated = true;
  }

  // Opcional: mostrar la primera categoría por defecto
  // renderContent('switch');
}

document.addEventListener('DOMContentLoaded', () => {
  // Idioma inicial
  changeLanguage('es');

  DOM.languageSelect.addEventListener('change', e => changeLanguage(e.target.value));

  DOM.subscribeBtn.addEventListener('click', () => {
    window.open('https://www.youtube.com/channel/UCJbYmHLNcrPUUA9oyBGtsKw?sub_confirmation=1', '_blank');
    unlockSequence();
  });

  DOM.fileSearch.addEventListener('input', e => {
    // implementar búsqueda (puedes mover a ui.js también)
  });
});