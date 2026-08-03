<script setup lang="ts"></script>

<template>
    <section class=" mb-7 bg-surface-300 text-[14px] sm:text-clamp rounded-2xl flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between items-center py-py-section px-px-section">
        <h2 class="text-frosted">Screen Sizes : </h2>
        <span>
            <label for="">Max </label>
            <input type="number" name="" id="" value="1400">
        </span>
        <span>
            <label for="">Min </label>
            <input type="number" name="" id="" min="0" value="320">
        </span>
    </section>

    <section class="bg-surface-300 text-[14px] sm:text-clamp rounded-2xl flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between items-center py-py-section px-px-section">
        <h2 class="text-frosted">Element Sizes : </h2>
        <span>
            <label for="">Max </label>
            <input type="number" name="" id="" value="0">
        </span>
        <span>
            <label for="">Min </label>
            <input type="number" name="" id="" min="0" value="0">
        </span>
    </section>
</template>
