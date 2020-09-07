<template>
  <div class="header">
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
    <div class="circle circle-medium"></div>
    <div class="circle circle-large"></div>
    <div class="circle circle-small"></div>
</div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: relative;
  width: fit-content;
  min-width: 100%;
  height: 150px;
  display: flex;
  top: -35px;
  overflow: hidden;
}

.circle {
  border-radius: 50%;
  margin-left: -40px;
  background: white;
}

.circle-small {
    height: 100px;
    width: 100px;
    border-radius: 50%;
}
.circle-medium {
    height: 120px;
    width: 120px;
    border-radius: 50%;
}

.circle-large {
    height: 140px;
    width: 140px;
    border-radius: 50%;
}
</style>
