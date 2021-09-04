import { createStore } from 'vuex';

const store = createStore({
  state: {
    card: {
      showMaskEditMode: false
    }
  },
  mutations: {
    changeCardState(state, newValue) {
      state.card.showMaskEditMode = newValue;
    }
  }
});

export default store;