import { CATEGORIES } from './config.js';
import { state, setCategory } from './state.js';
import { currentLanguage } from './i18n.js';

export function renderConsoleButtons() {
  const container = document.getElementById('consoleSelector');
  container.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const btn = document.createElement('div');
    btn.className = 'console-button';
    btn.innerHTML = `<img src="${cat.icon}"><span>${cat.label}</span>`;
    btn.addEventListener('click', () => {
      setCategory(cat.id);
      renderContent(cat.id);
    });
    container.appendChild(btn);
  });
}

export function renderContent(categoryId) {
  const section = document.getElementById('filesSection');
  section.innerHTML = '';
  section.style.display = 'flex';

  // Limpiar imagen de consola anterior
  document.getElementById('consoleImageContainer').innerHTML = '';

  const cat = CATEGORIES.find(c => c.id === categoryId);
  if (cat) {
    const img = document.createElement('img');
    img.src = cat.icon;
    img.style.width = '100%';
    document.getElementById('consoleImageContainer').appendChild(img);
  }

  const items = (categoryId === 'amazon') 
    ? state.amazonProducts 
    : state.mediaFiles[categoryId] || [];

  items.forEach(item => appendFileCard(item, section));
}

function appendFileCard(item, container) {
  const card = document.createElement('div');
  card.className = 'file-card';
  const title = item.label?.[currentLanguage] ?? 'Sin título';
  const thumb = item.img || 'https://raw.githubusercontent.com/Kelonio-hub/Link-3DS/main/Logo%20Zip.png';

  card.innerHTML = `<img src="${thumb}" loading="lazy"><br>${title}`;
  card.addEventListener('click', () => window.open(item.url, '_blank'));
  container.appendChild(card);
}

export function updateTitleAndFooter() {
  document.title = currentLanguage === 'es' 
    ? "Archivos Nintendo | La Presa" 
    : "Nintendo Files | La Presa";
  // Actualizar textos de footer si es necesario
}