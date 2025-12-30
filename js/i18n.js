import { DOM } from './config.js';

export const translations = {
  es: {
    pageTitle: "Archivos Nintendo | La Presa",
    mainText: "¡Suscríbete para acceder al contenido!",
    instructions: "1. Haz clic en el botón de suscripción.<br>2. Confirma la suscripción en YouTube.<br>3. Espera hasta que se verifique la suscripción.<br>4. Selecciona la consola y los archivos que deseas descargar.",
    subscribe: "Suscribirse",
    loadingText: "Desbloqueando<br>magia ancestral...",
    searchPlaceholder: "Buscar archivos...",
    privacyText: "Política de Privacidad",
    termsText: "Términos del Servicio"
  },
  en: {
    pageTitle: "Nintendo Files | La Presa",
    mainText: "Subscribe to access content!",
    instructions: "1. Click the subscribe button.<br>2. Confirm subscription on YouTube.<br>3. Wait until the subscription is verified.<br>4. Select the console and the files you want to download.",
    subscribe: "Subscribe",
    loadingText: "Unlocking<br>ancient magic...",
    searchPlaceholder: "Search files...",
    privacyText: "Privacy Policy",
    termsText: "Terms of Service"
  }
};

export let currentLanguage = 'es';

export function changeLanguage(lang) {
  if (!translations[lang]) return;
  
  currentLanguage = lang;
  
  DOM.mainText.innerHTML = translations[lang].mainText;
  DOM.instructions.innerHTML = translations[lang].instructions;
  DOM.subscribeBtn.textContent = translations[lang].subscribe;
  DOM.fileSearch.placeholder = translations[lang].searchPlaceholder;
  
  if (DOM.loading.style.display !== 'none') {
    DOM.loadingText.innerHTML = translations[lang].loadingText;
  }

  DOM.pageTitle.textContent = translations[lang].pageTitle;
  DOM.privacyText.textContent = translations[lang].privacyText;
  DOM.termsText.textContent = translations[lang].termsText;
}