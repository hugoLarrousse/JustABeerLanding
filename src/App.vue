<template>
  <div id="app" class="w-full h-screen jab-min-width overflow-x-hidden">
    <!-- full width container -->
  <Modal v-if="openModal" @closeModal="onClickCloseModal"/>
  <Header v-bind:class="openModal && 'blue'"/>
  <Bubbles v-bind:class="openModal && 'display-stop'"/>
  <div class="main-container" v-bind:class="openModal && 'blur'">
    <div class="container-left text-white">
      <div class="title-container flex">
        <h1 class="title uppercase">Just a beer</h1>
        <img class="myLogo" src="@/assets/myLogo.png" alt="Just A Beer logo">
      </div>
      <h2 class="punchline flex font-semibold">Let's be<p class="text-beer2-200">er</p>, friends !</h2>
      <h3 class="description font-semibold">Rejoignez une table et faites des rencontres amicales sans pression</h3>
      <div class="button-container">
        <button @click="onClickChangeStatusModal" class="button bg-white text-beer2-500 jab-rounded"> Pré-inscription </button>
        <a href="https://www.buymeacoffee.com/justabeer"
          target="_blank" class="button bg-white text-beer2-500 jab-rounded" rel="noopener"> Offrez-nous une bière 🍻</a>
      </div>
    </div>
    <div class="container-right">
      <img class="example" src="@/assets/example.png" alt="Just A Beer exemple">
    </div>
    </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Bubbles from './components/Bubbles.vue';
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Header,
    Bubbles,
    Modal,
  },
  data() {
    return {
      openModal: false,
    };
  },
  methods: {
    onClickChangeStatusModal() {
      this.openModal = !this.openModal;
    },
    onClickCloseModal() {
      this.openModal = false;
    },
  },
};
</script>

<style>
/* @font-face {
  font-family: "Inter";
  src: local("Inter"),
   url(./fonts/Inter-VariableFont_slnt,wght.ttf) format("truetype");
} */

@font-face {
  font-family: "Inter";
  src: local("Inter"),
   url(./fonts/Inter-Regular-slnt=0.ttf) format("truetype");
}

@font-face {
  font-family: "Inter";
  src: local("Inter"),
   url(./fonts/Inter-SemiBold-slnt=0.ttf) format("truetype");
  font-weight: semi-bold;
}

@font-face {
  font-family: "BebasNeue";
  src: local("BebasNeue"),
   url(./fonts/BebasNeue-Regular.ttf) format("truetype");
}

html, body {
  width: 100%;
  min-height: 100%;
  font-family: Inter;
  background: rgb(250,201,64);
  background: linear-gradient(90deg, rgba(250,201,64,1) 13%, rgba(255,192,12,1) 72%, rgba(236,164,37,1) 97%);
}

.blur {
  filter: blur(3px)
}

.display-stop {
  display: none;
}

.main-container {
  display: flex;
  height: max-content;
  align-items: center;
  justify-content: space-around;
}

.container-left {
  width: 66%;
}

.title {
  font-family: 'BebasNeue';
  line-height: 1;
}

.button {
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  margin-top: 30px;
  text-align: center;
}

.button:hover {
  transform: scale(1.1);
}

.button:focus {
  outline: none;
}

.button-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  flex-wrap: wrap;
}

.example {
  position: fixed;
  bottom: 0;
}

@media only screen and (max-width: 639px) {
  .main-container {
    flex-flow: column;
    margin-top: 25px;
  }

  .container-left {
    width: 90%;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .title-container {
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 7rem;
    margin-right: 0.7rem;
  }

  .myLogo {
    margin-top: 10px;
    height: 100px;
  }

  .punchline {
    font-size: 2rem;
  }

  .description {
  margin-top: 35px;
  font-size: 14px;
  text-align: center;
}

.button-container {
  max-width: 550px;
  margin: 3.5rem 0 3.5rem;
}

.button {
  padding: 0.5rem 0;
  width: 13rem;
  font-size: 12px;
}

.example {
  position: initial;
  right: -55px;
  height: 320px;
}

}

@media only screen and (max-width: 600px) {
  .title {
    font-size: 6rem;
    margin-right: 0.7rem;
  }

  .myLogo {
    margin-top: 5px;
    height: 85px;
  }

  .button-container {
    flex-flow: column;
    margin: 1rem 0 1rem;
    width: 100%;
  }

  .button {
    padding: 0.5rem 0;
    width: 13rem;
    font-size: 12px;
  }
}

@media only screen and (max-width: 500px) {
  .title {
    font-size: 4rem;
    margin-right: 0.7rem;
  }

  .myLogo {
    margin-top: 0;
    height: 60px;
  }

  .punchline {
    font-size: 1.25rem;
  }

  .description {
    margin-top: 35px;
    font-size: 12px;
    text-align: center;
  }
}

@media only screen and (max-width: 400px) {
  .title {
    font-size: 3.75rem;
    margin-right: 0.6rem;
  }

  .myLogo {
    margin-top: 0;
    height: 55px;
  }

  .punchline {
    font-size: 1.25rem;
  }

  .description {
    margin-top: 35px;
    font-size: 12px;
  }
}

@media only screen and (min-width: 640px) {
  .main-container {
    margin-top: 40px;
  }

  .title {
    font-size: 6rem;
    margin-right: 0.7rem;
  }

  .myLogo {
    margin-top: 10px;
    height: 80px;
  }

  .punchline {
    font-size: 1.25rem;
  }

  .description {
  margin-top: 35px;
  font-size: 10px;
}

.button-container {
  max-width: 500px;
  margin: 3.5rem 0 3.5rem;
  width: 92%;

}

.button {
  padding: 0.5rem 0;
  width: 12rem;
  font-size: 10px;
}

.example {
  right: -55px;
  height: 320px;
}

}

@media only screen and (min-width: 768px) {
  .main-container {
    margin-top: 40px;
  }

  .title {
    font-size: 6.75rem;
    margin-right: 0.75rem;
  }

  .myLogo {
    margin-top: 10px;
    height: 90px;
  }

  .punchline {
    font-size: 1.5rem;
  }

  .description {
  margin-top: 40px;
  font-size: 12px;
}

.button-container {
  max-width: 450px;
  margin-top: 5rem;
}

.button {
  padding: 0.5rem 0;
  width: 13rem;
  font-size: 10px;
}

.example {
  right: -55px;
  height: 430px;
}

}

@media only screen and (min-width: 1000px) {
  .main-container {
    margin-top: 40px;
  }

  .title {
    font-size: 8rem;
    margin-right: 1rem;
  }

  .myLogo {
    margin-top: 10px;
    height: 110px;
  }

  .punchline {
    font-size: 2rem;
  }

  .description {
  margin-top: 40px;
  font-size: 16px;
}

.button-container {
  max-width: 525px;
  margin-top: 5rem;
}

.button {
  padding: 0.5rem 0;
  width: 15rem;
  font-size: 0.75rem;
}

.example {
  right: -55px;
  height: 550px;
}

}

@media only screen and (min-width: 1220px) {
  .main-container {
    margin-top: 10px;
  }

  .title {
    font-size: 10rem;
    margin-right: 1.5rem;
  }

  .myLogo {
    margin-top: 10px;
    height: 140px;
  }

  .punchline {
    font-size: 3rem;
  }

  .description {
  margin-top: 40px;
  font-size: 18px;
}

.button-container {
  max-width: 700px;
  margin-top: 5rem;
}

.button {
  padding: 0.70rem 0;
  width: 17rem;
  font-size: 1rem;
}

.example {
  right: -55px;
  height: 600px;
}
}

@media only screen and (min-width: 1550px) {
  .main-container {
    margin-top: 10px;
  }

  .title {
    font-size: 13rem;
    margin-right: 1.75rem;
  }

  .myLogo {
    margin-top: 10px;
    height: 180px;
  }

  .punchline {
    font-size: 5rem;
  }

  .description {
  margin-top: 40px;
  font-size: 22px;
}

.button-container {
  max-width: 875px;
  margin-top: 5rem;
}

.button {
  padding: 0.70rem 0;
  width: 20rem;
  font-size: 1rem;
}

.example {
  right: -55px;
  height: 700px;
}
}
</style>
