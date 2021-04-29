<template>
  <div id="app">
    <div class="CarouselContainer">
      <Carousel/>
    </div>
    <div class="HomeContainer">
      <Home/>
    </div>
    <div>
      <div class="title-container">
        <h1 class="title">Anime</h1>
      </div>
      <Itemlist/>
    </div>
  </div>
</template>

<script>
import Home from './components/Home'
import Itemlist from './components/Itemlist'
import Carousel from './components/Carousel'

export default {
  name: 'App',
  components: {
    Carousel,
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
.title-container {
  text-align: center;
  margin: 0 auto;
  margin-right: 3em;
}
</style>
