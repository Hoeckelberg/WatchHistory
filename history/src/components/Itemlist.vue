<template>
<div id="app">
  <div class="container">
    <div class="trippleRow">
      <div class="card text-white bg-dark">
        <img src="../assets/Slime-4k.jpg" alt="Image" class="card-img-top img-fluid">
        <div class="card-body">
            <h4 class="card-title"><b>That Time I Got Reincarnated as a Slime</b></h4>
            <p class="card-text">Test paragraph</p>
            <a href="#" class="btn btn-primary">Click!</a>
        </div>
      </div>
      <div class="card text-white bg-dark">
        <img src="../assets/Jujutsu-4k.jpg" alt="Image" class="card-img-top img-fluid">
        <div class="card-body">
            <h4 class="card-title"><b>JUJUTSU KAISEN</b></h4>
            <p class="card-text">Test paragraph</p>
            <a href="#" class="btn btn-primary">Click!</a>
        </div>
      </div>
      <div class="card text-white bg-dark">
        <img src="../assets/OP-4k.jpg" alt="Image" class="card-img-top img-fluid">
        <div class="card-body">
            <h4 class="card-title"><b>One Piece</b></h4>
            <p class="card-text">Test paragraph</p>
            <a href="#" class="btn btn-primary">Click!</a>
        </div>
      </div>
    </div>
    <div class="trippleRow">
      <div class="card text-white bg-dark">
        <img src="../assets/BlackClover-4k.jpg" alt="Image" class="card-img-top img-fluid">
        <div class="card-body">
            <h4 class="card-title"><b>Test</b></h4>
            <p class="card-text">Test paragraph</p>
            <a href="#" class="btn btn-primary">Click!</a>
        </div>
      </div>
      <div class="card text-white bg-dark">
        <img src="../assets/7Sins-4k.jpg" alt="Image" class="card-img-top img-fluid">
        <div class="card-body">
            <h4 class="card-title"><b>Test</b></h4>
            <p class="card-text">Test paragraph</p>
            <a href="#" class="btn btn-primary">Click!</a>
        </div>
      </div>
      <div class="card text-white bg-dark">
        <img src="../assets/DemonSlayer-4k.jpg" alt="Image" class="card-img-top img-fluid">
        <div class="card-body">
            <h4 class="card-title"><b>Test</b></h4>
            <p class="card-text">Test paragraph</p>
            <a href="#" class="btn btn-primary">Click!</a>
        </div>
      </div>
    </div>
    <div class="trippleRow">
      <div class="card text-white bg-dark">
        <img src="../assets/Castlevania.jpg" alt="Image" class="card-img-top img-fluid">
        <div class="card-body">
            <h4 class="card-title"><b>Test</b></h4>
            <p class="card-text">Test paragraph</p>
            <a href="#" class="btn btn-primary">Click!</a>
        </div>
      </div>
      <div class="card text-white bg-dark">
        <img src="../assets/Overlord-4k.jpg" alt="Image" class="card-img-top img-fluid">
        <div class="card-body">
            <h4 class="card-title"><b>Test</b></h4>
            <p class="card-text">Test paragraph</p>
            <a href="#" class="btn btn-primary">Click!</a>
        </div>
      </div>
      <div class="card text-white bg-dark">
        <img src="../assets/Dr.Stone.jpg" alt="Image" class="card-img-top img-fluid">
        <div class="card-body">
            <h4 class="card-title"><b>Test</b></h4>
            <p class="card-text">Test paragraph</p>
            <a href="#" class="btn btn-primary">Click!</a>
        </div>
      </div>
    </div>
    <div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      
    </div>
  </div>
  
</div>
</template>

<script>
export default {

}
</script>

<style>
.card {
    width: 20rem;
    margin: 0 auto;
    margin: 1em;
    transition: 0.5s;
    overflow: auto;
    scrollbar-width: none;
}
.card-body {
  padding: 1em;
}
.trippleRow {
  display: flex;
  margin-top: 2em;
  margin-right: 5em;
  margin-left: 5em;
}
.card-img-top {
  height: 60%;
  min-height: 60%
}
/* X-Small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { 
  .trippleRow{
    flex-direction: column;
  }
  .card {
    max-height: 300px !important;
    max-width: 280px !important;
    margin-top: 2em;
  }
}

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) { 
  .trippleRow{
    flex-direction: column;
  }
  .card {
    max-height: 300px !important;
    max-width: 280px !important;
    margin-top: 2em;
  }
}

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
  .trippleRow{
    flex-direction: column;
  }
  .card {
    max-height: 300px !important;
    max-width: 280px !important;
    margin-top: 2em;
  }
}  

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) { 
  .trippleRow{
    flex-direction: column;
    margin: 0;
  }
  .card {
    max-height: 300px !important;
    max-width: 280px !important;
    margin: 0 auto;
    margin-top: 2em;
  }
}

</style>