<template>
  <div id="app">
    <div class="HomeContainer">
      <Home/>
    </div>
    <div>
      <h1>Your Progress</h1>
      <Itemlist/>
    </div>
  </div>
</template>

<script>
import Home from './components/Home'
import Itemlist from './components/Itemlist'

export default {
  name: 'App',
  components: {
    Home,
    Itemlist
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-image: url("../src/assets/bg.png");
  background-attachment: fixed;
  background-size: 100%;
}
.HomeContainer {
  margin-top: 8em;
}
</style>
