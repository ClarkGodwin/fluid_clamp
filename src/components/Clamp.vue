<script setup lang="ts">
import { useClalmpStore } from '@/stores/clamp';
import { ClipboardCheck, Clipboard } from '@lucide/vue';
import { useClipboard } from '@/utils/useClipboard';

const clamp = useClalmpStore()

const clipboard = useClipboard()

</script>

<template>
    <section class="mb-7 bg-surface-300 py-py-section px-px-section text-home">
        <div>
            <span class="text-frosted font-bold">Information : </span>
            The min value can't go beyond its max value - 1 and the max value can't go under its min + 1
        </div> <br>

        <div class="text-frosted font-bold">Result : </div>

        <!-- Result's display -->
        <div class="flex items-center gap-8 text-home">
            <input type="text" readonly class=" w-full" v-model="clamp.clamp">
            <Clipboard @click="clipboard.copy(clamp.clamp)" v-if="!clipboard.isCopied.value" class="size-(--text-header) inline cursor-pointer"/>
            <ClipboardCheck v-else class="size-(--text-header) inline cursor-pointer"/>

        </div>
    </section>


    <!-- Input of the required datas to start the calculation -->
     
    <!-- First the screen sizes -->
    <section class=" mb-7 bg-surface-300 text-[14px] sm:text-clamp rounded-2xl flex flex-col gap-5 sm:gap-3 sm:flex-row justify-between items-center py-py-section px-px-section">
        <h2 class="text-frosted w-full">Screen Sizes : </h2>
        <span class="input-container">
            <label for="">Max </label>
            <input type="number" name="" id="" :min="clamp.minScreen + 1" v-model="clamp.maxScreen">
        </span>
        <span class="input-container">
            <label for="">Min </label>
            <input type="number" name="" id="" min="0" :max="clamp.maxScreen - 1" v-model="clamp.minScreen">
        </span>
    </section>

    <!-- And right after, the element's sizes -->
    <section class="bg-surface-300 text-[14px] sm:text-clamp rounded-2xl py-py-section px-px-section">
        <div class="flex flex-col gap-5 sm:gap-3 sm:flex-row justify-between items-center ">
            <h2 class="text-frosted w-full">Element Sizes : </h2>
            <span class="input-container">
                <label for="">Max </label>
                <input type="number" name="" id="" :min="clamp.minElement + 1" v-model="clamp.maxElement">
            </span>
            <span class="input-container">
                <label for="">Min </label>
                <input type="number" name="" id="" min="0" :max="clamp.maxElement - 1" v-model="clamp.minElement">
            </span>
        </div>

        <!-- to add different lines of element's sizes based on the same screen sizes -->
        <div class="flex justify-self-end items-start mt-3 pr-pr-button sm:pr-0">
            <button class="bg-frosted  text-white text-[20px] w-8.75 font-bold cursor-pointer rounded-lg">+</button>
        </div>
    </section>
    
</template>
