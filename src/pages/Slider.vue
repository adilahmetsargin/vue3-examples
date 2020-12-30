<template>
  <div style="font-size: 30px" class="flex w-full flex-wrap relative">
    <div class="w-full absolute" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
      <div
        v-if="currentSlide == index"
       
        :class="color"
        style="height: 550px"
      ></div>
      </transition>
    </div>
    <div class=" w-full" style="height: 350px">
        <div class="absolute bottom-0 w-full flex justify-center">
        <div v-for="(slider,index) in sliders" :key="slider"
        @click="makeActive(index)"
         class="w-4 mx-2 h-4 rounded-full cursor-pointer shadow-md" :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"></div>
    </div></div>
    <div class="my-10 flex w-full">
      <div class="m-auto">
          <transition name="fade">
        <h1 v-if="isTitleShowing">Slider Carousel</h1>
        </transition>
        <button
          @click="isTitleShowing = !isTitleShowing"
          class="px-2 rounded border"
        >
          Toogle Text
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: ["bg-green-600", "bg-yellow-600", "bg-blue-600"],
      interval: "",
      isTitleShowing: true,
    };
  },
methods: {
    makeActive(index){
        this.currentSlide = index;
    }
},


  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide++ + 1;
      if (this.currentSlide === 2) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease;
}

.fade-enter-form{
     opacity: 0 ;
    transform: translateX(-100%);
}
.fade-leave-to{
    opacity: 0 ;
    transform: translateX(100%);
}


</style>