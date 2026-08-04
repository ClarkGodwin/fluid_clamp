import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useClalmpStore = defineStore('clamp', () => {

  //For screen sizes
  const maxScreen = ref(1400)
  const minScreen = ref(320)

  //For the element's sizes
  const maxElement = ref(30)
  const minElement = ref(20)

  //to return the clamp, check the README.md file to understand the logic of this calculation
  const clamp = computed(() => {
    const obj_diff = maxElement.value - minElement.value
    const screen_diff = maxScreen.value - minScreen.value;
    const ratio = obj_diff / screen_diff * 100;
    const fixed_base = minElement.value - (ratio * minScreen.value / 100.0);

    return "clamp(" + Math.round(minElement.value / 16 * 1000) / 1000 + "rem," + Math.round(fixed_base / 16 * 1000) / 1000 + "rem + " + Math.round(ratio * 1000) / 1000 + "vw," + Math.round(maxElement.value / 16 * 1000) / 1000 + "rem)"

  })

  return {
    maxScreen,
    minScreen,
    maxElement,
    minElement,
    clamp,
  }
})
