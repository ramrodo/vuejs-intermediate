export const state = () => {
  return {
    items: []
  };
};

export const actions = {
  getLocalStorageCart: ({ commit }) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    commit("setCart", cart);
  },
  addItemToCart: ({ commit }, value) => {
    commit("addItem", value);
  },
  removeItemFromCart: ({ commit }, value) => {
    commit("removeItem", value);
  }
};

export const mutations = {
  addItem: (state, value) => {
    state.items.push(value);
    localStorage.setItem("cart", JSON.stringify(state.items));
  },
  removeItem: (state, value) => {
    const itemIndex = state.items.indexOf(value);
    if (itemIndex > -1) {
      // remove the element
      state.items.splice(itemIndex, 1);
    }
    localStorage.setItem("cart", JSON.stringify(state.items));
  },
  setCart: (state, value) => {
    state.items = value;
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
