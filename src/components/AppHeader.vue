<template>
<nav class="w-full px-4 py-4 text-white bg-gradient-to-r from-green-800 to-green-600">
    <router-link v-for="item in list" :key="item.to" class="mx-4" :to="item.to" style="font-size: 40px;">{{item.title}}</router-link>
    <button style="font-size: 40px;" v-if="isLoggedIn" @click="logout" class="mx-2">Logout</button>
    <button style="font-size: 40px;" v-else @click="openLogin" class="mx-2">Login</button>
    
</nav>
</template>

<script>
import firebase from '../utilities/firebase'
export default {
 data(){
     return{
         list: [
             {title: "Persons", to:"/persons"},
             {title: "Calendar", to:"/calendar"},
             {title: "Markdown", to:"/markdown"},
             {title: "Slider", to:"/slider"},
             {title: "Calculator", to:"/calculator"},
             {title: "Chat", to:"/chat"},
             {title: "Userlistfromapi", to:"/userlistfromapi"},
             {title: "Tensorflow", to:"/tensorflow"},

             


         ],
       
     }
 },
 computed:{
     isLoggedIn(){
         return this.$store.state.isLoggedIn;
     }
 },
 methods:{
     logout(){
         firebase.auth().signOut()      
     },
     openLogin(){
         this.$store.commit("setLoginModal", true);
     }
 }
 
};
</script>

<style>
</style>