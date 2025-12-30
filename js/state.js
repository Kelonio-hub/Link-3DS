export let state = {
  currentCategory: null,
  isUnlocked: false,
  mediaFiles: {},
  amazonProducts: {}
};

export function setCategory(catId) {
  state.currentCategory = catId;
}

export function setUnlocked(value) {
  state.isUnlocked = value;
}