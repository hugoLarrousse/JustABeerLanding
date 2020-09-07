<template>
 <div class="liquid">
      <div class="bubble bubble1"> </div>
      <div class="bubble bubble2"> </div>
      <div class="bubble bubble3"> </div>
      <div class="bubble bubble4"> </div>
      <div class="bubble bubble5"> </div>
      <div class="bubble bubble6"> </div>
      <div class="bubble bubble7"> </div>
      <div class="bubble bubble8"> </div>
      <div class="bubble bubble9"> </div>
      <div class="bubble bubble10"> </div>
      <div class="bubble bubble11"> </div>
      <div class="bubble bubble12"> </div>
      <div class="bubble bubble13"> </div>
      <div class="bubble bubble14"> </div>
      <div class="bubble bubble15"> </div>
      <div class="bubble bubble16"> </div>
      <div class="bubble bubble17"> </div>
      <div class="bubble bubble18"> </div>
      <div class="bubble bubble19"> </div>
      <div class="bubble bubble20"> </div>
    </div>
</template>

<script>
export default {
  name: 'Bubbles',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.liquid {
  /* position: fixed;
  width: 100%;
  height: 100%; */
}

.liquid .bubble {
  animation-name: bubble;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: rgba(255, 255, 255, 0);
  bottom: 0;
  border-radius: 10px;
  height: 20px;
  width: 20px;
  position: fixed;
}

@-webkit-keyframes bubble {
  0% {
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.4);
  }

   50% {
     background-color: rgba(255, 255, 255, 0.2);
      bottom: 50%;
   }

   100% {
     background-color: rgba(255, 255, 255, 0);
      bottom: 90%;
   }
}

.bubble1 {
  left: 40px;
  animation-delay: 200ms;
  animation-duration: 4000ms;
}

.bubble2 {
  left: 90px;
  animation-delay: 700ms;
  animation-duration: 3000ms;
}

.bubble3 {
  left: 100px;
  animation-delay: 1200ms;
  animation-duration: 6000ms;
}

.bubble4 {
  left: 180px;
  animation-delay: 1100ms;
  animation-duration: 4500ms;
}

.bubble5 {
  left: 280px;
  animation-delay: 1300ms;
  animation-duration: 3000ms;
}

.bubble6 {
  left: 300px;
  animation-delay: 1000ms;
  animation-duration: 4000ms;
}

.bubble7 {
  left: 360px;
  animation-delay: 600ms;
  animation-duration: 3000ms;
}

.bubble8 {
  left: 420px;
  animation-delay: 1200ms;
  animation-duration: 6000ms;
}

.bubble9 {
  left: 540px;
  animation-delay: 100ms;
  animation-duration: 4500ms;
}

.bubble10 {
  left: 600px;
  animation-delay: 200ms;
  animation-duration: 5500ms;
}

.bubble11 {
  left: 770px;
  animation-delay: 80ms;
  animation-duration: 3500ms;
}

.bubble12 {
  left: 850px;
  animation-delay: 700ms;
  animation-duration: 3000ms;
}

.bubble13 {
  left: 990px;
  animation-delay: 1200ms;
  animation-duration: 6000ms;
}

.bubble14 {
  left: 1010px;
  animation-delay: 1100ms;
  animation-duration: 4500ms;
}

.bubble15 {
  left: 1200px;
  animation-delay: 1300ms;
  animation-duration: 3000ms;
}

.bubble16 {
  left: 1320px;
  animation-delay: 300ms;
  animation-duration: 3100ms;
}

.bubble17 {
  left: 1350px;
  animation-delay: 600ms;
  animation-duration: 3000ms;
}

.bubble18 {
  left: 1500px;
  animation-delay: 1200ms;
  animation-duration: 6000ms;
}

.bubble19 {
  left: 1590px;
  animation-delay: 100ms;
  animation-duration: 4500ms;
}

.bubble20 {
  left: 1700px;
  animation-delay: 2000;
  animation-duration: 3200ms;
}
</style>
