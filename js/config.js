export const CATEGORIES = [
  { id: 'switch', icon: 'https://raw.githubusercontent.com/Kelonio-hub/Link-3DS/main/Logo%20Switch.png', label: 'SWITCH' },
  { id: 'nds',    icon: 'https://raw.githubusercontent.com/Kelonio-hub/Link-3DS/main/Logo%20NDS.png',    label: 'NDS' },
  { id: '3ds',    icon: 'https://raw.githubusercontent.com/Kelonio-hub/Link-3DS/main/Logo%203DS.png',    label: '3DS' },
  { id: 'wii',    icon: 'https://raw.githubusercontent.com/Kelonio-hub/Link-3DS/main/Logo%20Wii.png',    label: 'WII / WIIU' },
  { id: 'SD',     icon: 'https://raw.githubusercontent.com/Kelonio-hub/Link-3DS/main/Logo%20SD.png',     label: 'SD' },
  { id: 'amazon', icon: 'https://raw.githubusercontent.com/Kelonio-hub/Link-3DS/main/Logo%20productos.png', label: 'AMAZON' }
];

export const DOM = {
  mainText: document.getElementById('mainText'),
  instructions: document.getElementById('instructions'),
  subscribeBtn: document.getElementById('subscribeBtn'),
  loading: document.getElementById('loading'),
  loadingText: document.getElementById('loadingText'),
  consoleSearchContainer: document.getElementById('consoleSearchContainer'),
  consoleSelector: document.getElementById('consoleSelector'),
  filesSection: document.getElementById('filesSection'),
  fileSearch: document.getElementById('fileSearch'),
  consoleImageContainer: document.getElementById('consoleImageContainer'),
  languageSelect: document.getElementById('language-select'),
  privacyText: document.getElementById('privacyText'),
  termsText: document.getElementById('termsText')
};

export const DELAYS = {
  hideButton: 29000,
  showLoading: 30000,
  showContent: 60000
};