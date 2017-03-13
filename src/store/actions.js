import Vue from 'vue'
import mutations from'./mutations.js'
import * as types from './mutations_type.js'

export const actionIncrease = ({ commit }, num) => {
  console.log('actionIncrease', num);
  commit(types.INCREASE, num);
}

export const actionDecrease = ({ commit }, num) => {
  console.log('actionDecrease', num);
  commit(types.DECREASE, num);
}

export const actionCountReset = ({ commit }) => {
  console.log('actionCountReset');
  commit(types.COUNT_RESET);
}