import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useClalmpStore = defineStore('clamp', () => {
  
  //For screen sizes
  const maxScreen = ref(1400)
  const minScreen = ref(320)

  //For the element's sizes
  const maxElement = ref(30)
  const minElement = ref(20)

  // const showMaxScreen = computed(() => { return })

  return {
    maxScreen,
    minScreen,
    maxElement,
    minElement,
  }
})
