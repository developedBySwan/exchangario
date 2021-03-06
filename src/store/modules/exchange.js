import { db } from "../../db";
import { getDocs, query, collectionGroup } from "firebase/firestore";

export default {
  namespaced: true,
  // state like data
  state() {
    return {
      exchanges: [],
    };
  },
  // Actions like method but should not return **data**
  actions: {
    async getExchanges({ commit }) {
      // Get Data from FireBase
      const exchangeQuery = query(collectionGroup(db, "exchanges"));
      const snapshot = await getDocs(exchangeQuery);

      const exchanges = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      commit("setExchanges", exchanges);
    },
  },
  //  mutations is to change the state data
  mutations: {
    setExchanges(state, exchanges) {
      state.exchanges = exchanges;
    },
  },
};
