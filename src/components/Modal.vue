<template>
 <div class="modal-screen-container" v-on:click="closeModal()">
   <div v-on:click.stop class="modal-container" v-bind:class="validated && 'spin'">
     <img v-on:click.stop src="@/assets/logoModal.png" alt="Just A Beer logo bière amitié">
     <input v-show="!validated" v-model="firstname" class="input input1" type="text" placeholder="Prénom" autocomplete="firstname"/>
     <input v-show="!validated" v-model="email" class="input input2" type="email" placeholder="Email" autocomplete="email" inputmode="email"/>
     <button v-show="!validated" @click="sendForm()" class="button-modal bg-white"> Pré-inscription </button>
     <div v-show="!validated" class="error-message"> {{errorMessage}} </div>
     <div class="validated" v-show="validated">
       <div> Pré-inscription validée </div>
       <img class="tick" src="@/assets/tick.svg" alt="Just A Beer validation"/>

     </div>
   </div>
    </div>
</template>

<script>
import { validEmail, sendToIfttt } from '../utils';

export default {
  name: 'Modal',
  data() {
    return {
      email: '',
      firstname: '',
      validated: '',
      errorMessage: '',
    };
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    sendForm() {
      this.errorMessage = '';
      if (!this.firstname) {
        this.errorMessage = 'T\'as oublié ton prénom?';
        return;
      }
      if (!validEmail(this.email)) {
        this.errorMessage = 'Adresse Email invalide';
        return;
      }
      sendToIfttt('data_landing_sent', this.firstname, this.email);
      // send
      this.validated = true;
      setTimeout(() => {
        this.$emit('closeModal');
      }, 2000);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .modal-screen-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    filter: none;
  }
  .modal-container {
    position: relative;
    width: 300px;
    height: 400px;
    opacity: 1;
  }

  .input {
    border-radius: 8px;
    padding: 0 1rem;
    height: 25px;
    font-size: 12px;
    width: 55%;
    left: 46px;
    position: absolute;
    font-family: Inter;
    outline: none;
  }

  .input1 {
    top: 165px;
  }

  .input2 {
    top: 205px;
  }

  .button-modal {
    position: absolute;
    left: 116px;
    top: 255px;
    border-radius: 40px;
    color: #FFC00C;
    font-size: 10px;
    padding: 0.20rem 0.75rem;
    transition: transform 0.2s ease-in-out;
    outline: none;
  }
  .button-modal:hover {
    transform: scale(1.1);
  }

  .error-message {
    position: absolute;
    color: red;
    font-size: 10px;
    top: 285px;
    left: 100px;
  }

  .validated {
    position: absolute;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    color: white;
    top: 205px;
    left: -15px;
    width: 100%;
    height: 50px;
    font-size: 14px;
  }

  .tick {
    width: 30px
  }

  .spin {
    animation: spin 2000ms linear forwards;
  }

  @keyframes spin {
    0% {
        transform:rotate(0deg) scale(1);
    }
    20% {
        transform:rotate(360deg) scale(0.8) translate(-250px, -100px);
    }
    40% {
        transform:rotate(720deg) scale(0.6) translate(250px, -100px);
    }
    60% {
        transform:rotate(1080deg) scale(0.4) translate(250px, 100px);
    }
    80% {
        transform:rotate(1440deg) scale(0.2) translate(-250px, 100px);
    }
    100% {
        transform:rotate(1800deg) scale(0) translate(0px, 0px);
    }
}
</style>
