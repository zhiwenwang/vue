<template>
  <div class="container">
    <h2> {{ count }}</h2>
    Set number:
    <input type="number" v-model="num" style="width: 50px;"><br/>
    <button @click="actionIncrease(num)">+{{ num }}</button>
    <button @click="actionDecrease(num)">-{{ num }}</button>
    <button @click="actionCountReset">Reset</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      num: 0
    }
  },
  computed: mapGetters({
    count: 'getCount',
  }),
  methods: {
    ...mapActions([
      'actionIncrease',
      'actionDecrease',
      'actionCountReset'
    ])
  }
 }
</script>