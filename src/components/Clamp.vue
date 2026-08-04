<!-- filepath: /home/sub_0/Documents/Development/Personal/Vuejs/fluid_clamp/src/components/Clamp.vue -->
<script setup lang="ts">
import { useClalmpStore } from '@/stores/clamp'
import { ClipboardCheck, Clipboard } from '@lucide/vue'
import { useClipboard } from '@/utils/useClipboard'
import { computed, ref } from 'vue'

interface ClampLine {
  key: number
  maxElement: number
  minElement: number
}

// Create the main store instance that holds the base screen and element values.
const clamp = useClalmpStore()

// Clipboard helper used for copying the generated clamp strings.
const clipboard = useClipboard()

// Controls whether the extra multi-line section is visible.
const multiLines = ref(false)

// Stores the additional custom lines created by the user.
const lines = ref<ClampLine[]>([])

// Start numbering from 2 because the main result is displayed as #1.
const lineNumber = ref(2)

/**
 * Build a CSS clamp string from the input values.
 * This logic is kept in the component so each extra line can reuse the same calculation.
 * Needed because stores don't create new instances
 */
function buildClampValue(
  minScreen: number,
  maxScreen: number,
  minElement: number,
  maxElement: number
) {
  const objDiff = maxElement - minElement
  const screenDiff = maxScreen - minScreen
  const ratio = (objDiff / screenDiff) * 100
  const fixedBase = minElement - (ratio * minScreen / 100.0)

  const roundRem = (value: number) => Math.round((value / 16) * 1000) / 1000

  return `clamp(${roundRem(minElement)}rem, ${roundRem(fixedBase)}rem + ${Math.round(ratio * 1000) / 1000}vw, ${roundRem(maxElement)}rem)`
}

/**
 * Compute the clamp string for an additional line using that line's own element values.
 */
function getLineClamp(line: ClampLine) {
  return buildClampValue(clamp.minScreen, clamp.maxScreen, line.minElement, line.maxElement)
}

/**
 * Add a new custom line and display the multi-line section.
 */
function addLine() {
  multiLines.value = true

  lines.value.push({
    key: lineNumber.value++,
    maxElement: clamp.maxElement,
    minElement: clamp.minElement,
  })
}

/**
 * Reset the component to its initial single-line state.
 * This removes all extra lines and hides the multi-line section.
 */
function resetLines() {
  multiLines.value = false
  lines.value = []
  lineNumber.value = 2
}
</script>

<template>
  <!-- Main result section -->
  <section class="mb-7 bg-surface-300 py-py-section px-px-section text-home">
    <div>
      <span class="text-frosted font-bold">Information : </span>
      The min value can't go beyond its max value - 1 and the max value can't go under its min + 1
    </div>
    <br>

    <div class="text-frosted font-bold">Result : </div>

    <div class="flex items-center gap-2 sm:gap-5">
      <!-- Show the main result as #1 only when multi-line mode is active -->
      <span v-if="multiLines" class="text-frosted font-bold">#1: </span>
      <input type="text" readonly class="w-full" :value="clamp.clamp" />
      <Clipboard
        @click="clipboard.copy(clamp.clamp)"
        v-if="!clipboard.isCopied.value"
        class="size-(--text-header) inline cursor-pointer"
      />
      <ClipboardCheck v-else class="size-(--text-header) inline cursor-pointer" />
    </div>

    <!-- Additional custom lines rendered when the user adds them -->
    <div v-if="multiLines">
      <div
        v-for="line in lines"
        :key="line.key"
        class="flex items-center gap-2 sm:gap-5 my-3"
      >
        <span class="text-frosted font-bold">#{{ line.key }}: </span>
        <input type="text" readonly class="w-full" :value="getLineClamp(line)" />
        <Clipboard
          @click="clipboard.copy(getLineClamp(line))"
          v-if="!clipboard.isCopied.value"
          class="size-(--text-header) inline cursor-pointer"
        />
        <ClipboardCheck v-else class="size-(--text-header) inline cursor-pointer" />
      </div>
    </div>
  </section>

  <!-- Screen sizes section -->
  <section
    class="mb-7 bg-surface-300 text-clamp sm:text-clamp rounded-2xl flex flex-col gap-5 sm:gap-3 sm:flex-row justify-between items-center py-py-section px-px-section"
  >
    <h2 class="text-frosted w-full">Screen Sizes : </h2>

    <span class="input-container">
      <label>Max </label>
      <input type="number" :min="clamp.minScreen + 1" v-model.number="clamp.maxScreen" />
    </span>

    <span class="input-container">
      <label>Min </label>
      <input type="number" min="0" :max="clamp.maxScreen - 1" v-model.number="clamp.minScreen" />
    </span>
  </section>

  <!-- Element sizes section -->
  <section class="bg-surface-300 text-clamp sm:text-clamp rounded-2xl py-py-section px-px-section">
    <div class="flex flex-col gap-5 sm:gap-3 sm:flex-row justify-between items-center">
      <h2 class="text-frosted w-full">Element Sizes : </h2>

      <span class="input-container">
        <label>Max </label>
        <input type="number" :min="clamp.minElement + 1" v-model.number="clamp.maxElement" />
      </span>

      <span class="input-container">
        <label>Min </label>
        <input type="number" min="0" :max="clamp.maxElement - 1" v-model.number="clamp.minElement" />
      </span>
    </div>

    <!-- Additional line editors -->
    <div v-if="multiLines">
      <div
        v-for="line in lines"
        :key="line.key"
        class="flex flex-col gap-5 sm:gap-3 sm:flex-row justify-between items-center my-3"
      >
        <h2 class="text-frosted w-full">#{{ line.key }}</h2>

        <span class="input-container">
          <label>Max </label>
          <input type="number" :min="line.minElement + 1" v-model.number="line.maxElement" />
        </span>

        <span class="input-container">
          <label>Min </label>
          <input type="number" min="0" :max="line.maxElement - 1" v-model.number="line.minElement" />
        </span>
      </div>
    </div>

    <!-- Action buttons for adding or resetting extra lines -->
    <div class="flex justify-self-end items-start mt-3 pr-pr-button sm:pr-0 gap-2">
      <button
        type="button"
        @click="resetLines()"
        class="bg-frosted text-white text-[20px] w-8.75 font-bold cursor-pointer rounded-lg"
      >
        ↺
      </button>

      <button
        type="button"
        @click="addLine()"
        class="bg-frosted text-white text-[20px] w-8.75 font-bold cursor-pointer rounded-lg"
      >
        +
      </button>
    </div>
  </section>
</template>
