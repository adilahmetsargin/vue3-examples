<template>
    <div class="m-auto" style="font-size: 30px;">
  <h1 style="font-size: 40px;" class="text-4x text-center"> Persons</h1>
  <ul>
    <li  class="flex justify-between" v-for="(person, index) in persons" :key="person.name">
     <div> {{ person["name"] }} </div>
          <button v-on:click="removePerson(index)">x</button> 
          
    </li>
  </ul>
  <form class="mt-10" @submit.prevent="addPerson">
    <input class="border rounded" v-model="newPerson" placeholder="Person name here" ref="newPersonRef"/>
    <button class="border rounded bg-gradient-to-r from-green-700 to-green-500  text-white" type="submit">Add Person</button>
  </form>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
    
    setup(){
        const newPersonRef = ref("");
       const newPerson = ref("");
        const persons = ref([
        { name: "John" },
        { name: "Doe" },
        { name: "Emma" },
        { name: "Spark" },
      ]);

      onMounted(()=>{
        newPersonRef.value.focus();
      })
     function removePerson(index){
       persons.value = persons.value.filter((person,i) => i != index);
    }

    function addPerson() {
      if (this.newPerson.value != "") {
        this.persons.value.push({ name: this.newPerson.value });
        this.newPerson.value = "";
      }
    }

      return { persons, newPerson, removePerson, addPerson, newPersonRef };
    },

  
}
</script>

<style>

</style>