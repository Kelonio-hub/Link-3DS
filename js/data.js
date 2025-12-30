import { state } from './state.js';

export async function loadAllData() {
  try {
    const [consolasRes, productosRes] = await Promise.all([
      fetch('https://raw.githubusercontent.com/Kelonio-hub/Link-3DS/main/data/consolas.json'),
      fetch('https://raw.githubusercontent.com/Kelonio-hub/Link-3DS/main/data/productos.json')
    ]);

    if (!consolasRes.ok || !productosRes.ok) throw new Error('Error cargando datos');

    state.mediaFiles = await consolasRes.json();
    state.amazonProducts = await productosRes.json();
    
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}