<template>
<div v-if="isLoginOpen">
  <section
    @click="close"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow">
        <div class="p-2 border">
          <h1 class="text-2xl text-center">Login</h1>
        <loginWithGoogle @close-login-from-google="close"/>
          
          <p class="my-3 text-center">Or</p>
          <form class="p-2 my-2" @submit.prevent="submit">
            <div class="my-4">
              <label> Email or Username </label>
              <input
                v-model="email"
                class="rounded shadow p-2 w-full"
                placeholder="Enter email or username"
              />
            </div>
            <div>
              <label> Password </label>
              <input
                v-model="password"
                placeholder="Enter password"
                class="rounded shadow p-2 w-full"
                type="password"
              />
            </div>
            <div class="my-4">
              <button
                type="submit"
                class="w-full rounded shadow-md bg-gradient-to-r from-green-500 to-green-900 text-white p-2"
              >
                <span v-if="!isLoading">Login</span>
                <span v-else>loading</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
import '../components/Login/LoginWithGoogle';
import loginWithGoogle from './Login/LoginWithGoogle.vue';
export default {
    components: { loginWithGoogle },
    computed: {
        isLoginOpen(){
            return this.$store.state.isLoginOpen;
        }
    },
    
 data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch((e) => {
          console.log(e);
          this.isLoading = false;
        });
    },
    close() {
      this.$store.commit("setLoginModal", false);
    },
   
        

  },
};
</script>

<style>
</style>