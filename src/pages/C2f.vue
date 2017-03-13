<template>
  <div class="container">
    <h1>溫度切換</h1>
    <input id="toggleTemperature" type="checkbox" v-model="isC">
    <label for="toggleTemperature">切換: {{ toggleTemperature }}</label>

    <h2 v-if="isC">攝氏: {{ celsius }} °C</h2>
    <h2 v-if="!isC">華氏:{{ fahrenheit }} °F</h2>

    <div class="celsius">
      <span v-show="!isC">攝氏:</span>
      <span v-show="isC">華氏:</span>
      <input type="number" v-model="userInput"> °C
    </div>
    <button @click="temperatureConversion( userInput );">
      Conversion
    </button>
  </div>
</template>

<script>
export default {
   data () {
    return {
      userInput: 0,
      isC: false,
    }
  },
  computed: {
    fahrenheit () {
      return this.userInput * 9/5 + 32;
    },
    celsius () {
      return (this.userInput - 32) * 5/9;
    },
    toggleTemperature () {
      return this.isC ? "攝氏 轉換 華氏" : "華氏 轉換 攝氏";
    }
  },
  methods: {
    temperatureConversion ( val ) {
      if (this.isC) {
        alert('攝氏: ' + this.celsius );
      }
      else {
        alert('華氏: ' + this.fahrenheit );
      }
    }
  }
}
</script>

<style>
  .celsius {
    font-size: 1.5em;
  }
</style>