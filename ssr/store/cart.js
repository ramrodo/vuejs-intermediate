export const state = () => {
  return {
    items: [],
    loading: true,
  };
};

export const actions = {
  addItemToCart: ({ commit }, value) => {
    commit("addItem", value);
  },
  removeItemFromCart: ({ commit }, value) => {
    commit("removeItem", value);
  },
  fetchLocalStorage: ({ commit }) => {
    const newItems = JSON.parse(localStorage.getItem('cart'));
    commit('setCart', newItems);
    commit('setLoading', false);
  },
};

export const mutations = {
  setCart: (state, value) => {
    state.items = value;
  },
  setLoading: (state, value) => {
    state.loading = value;
  },
  addItem: (state, value) => {
    state.items.push(value);
    localStorage.setItem("cart", JSON.stringify(state.items));
  },
  removeItem: (state, value) => {
    const itemIndex = state.items.indexOf(value);
    if (itemIndex > -1) {
      // remove the element
      state.items.splice(itemIndex, 1);
      localStorage.setItem("cart", JSON.stringify(state.items));
    }
  }
};

export const getters = {
  groupedItems: state => {
    return state.items.reduce((acum, item) => {
      if (!acum[item]) {
        acum[item] = 0;
      }
      acum[item]++;
      return acum;
    }, {});
  },
  numItems: (state, getters) => {
    return state.items.length;
  }
};
