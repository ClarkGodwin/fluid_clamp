import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useClalmpStore = defineStore('clamp', () => {
  
  //For screen sizes
  const maxScreen = ref(1400)
  const minScreen = ref(320)

  //For the element's sizes
  const maxElement = ref(0)
  const minElement = ref(0)

  return {
    maxScreen,
    minScreen,
    maxElement,
    minElement,
  }
})
