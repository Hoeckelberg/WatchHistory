<template>
  <div>
    <nav class="navbar fixed-top navbar-dark bg-dark">
        <div class="container-fluid">
             <div class="icon" v-on:click="click">
                <div class="icon__element"></div>
                <div class="icon__element"></div>
                <div class="icon__element"></div>   
            </div>
            <ul class="sidebar is-active">
              <div class="flex">
                <a class="sidebar__item" href="#section">HOME</a> 
                <a class="sidebar__item" href="#section2">2</a> 
                <a class="sidebar__item" href="#section3">3</a> 
                <a class="sidebar__item" href="#section4">4</a>
                <a class="sidebar__item 2" v-on:click="click"> <i class="fas fa-arrow-left"></i> </a> 
              </div>
            </ul>
            <a class="navbar-brand" href="#">
            <img src="../assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
            Platzhalter
            </a>
            <ul class="navbar-nav">
              <div class="flex2">
                <li class="nav-item"><a href="#" class="nav-link"><i class="bi bi-person"></i></a></li>
                <li class="nav-item"><a href="#" class="nav-link">Register</a></li>
              </div>
            </ul>
        </div>  
    </nav>
  </div>
</template>

<script>

export default {
methods: {
    click: function () {
      const bar = document.getElementsByClassName('sidebar');
      const bar2 = document.getElementsByClassName('2');
      bar[0].classList.toggle('is-active');
      bar2[0].classList.toggle('is-active');
    }
  }

}
</script>

<style>
.sidebar {
  margin: 0 auto;
  height: 100%; 
  width: 160px; 
  position: fixed;
  top: 0;
  left: 0;
  background-color: #111; 
  overflow-x: hidden; 
  padding-top: 8em;
  padding-left: 0em;
  transition: 0.3s;
  opacity: 0;
}
.sidebar.is-active { 
  opacity: 0.6;  
}
.sidebar__item {
  list-style: none;
  margin: 0 auto;
  font-size: 1.1em;
  color: white;
  transition: 0.2s;
  margin-top: 2em;
  text-decoration: none;
  letter-spacing: 0.1em;
}
.sidebar__item:hover {
  color: gray;
  text-decoration: none;
  transform: scale(1.1);
  text-shadow: 1px 1px 1px #000, 
                3px 3px 5px black;
  cursor: pointer;
}
.flex {
  display: flex;
  flex-direction: column;
}
.flex2 {
  display: flex;
  flex-direction: row;
}
.icon {
  margin-right: 2em;
  position: sticky;
  z-index: 1;
  height: 28px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.icon:hover {
  transform: scale(1.1);
}
.icon__element {
  background-color: white;
  border-radius: 0.8em;
  height: 20%;
  width: 100%;
  box-shadow: 0 0.001em 0.61em -0.125em;
}


</style>