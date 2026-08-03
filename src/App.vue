<script setup lang="ts"></script>

<template>
  <h1 class="text-frosted text-center text-header">Fluid Clamp</h1>

  <section class="mt-5 bg-surface-300 w-full rounded-2xl *:text-frosted">
    Welcome in our <span>Fluid Clamp</span> website. <br>
    Its goal is to make the design responsivness a bit easier for developpers.
    It's always annoying how we have to change the value of an element (either its width, height, gap, text's size) so that it looks clean on all screen sizes <br> <br> <br>

    <span>How it works : </span> <br> <br>

    <span>* </span> The values on which the calculation is based is expressed only in pixels. <br> <br>

    <span>* </span> You first pick the maximum and the minimum screen size for your web app. <br> To be more specific, above the maximum (you chose) on which the look of the website won't change and same for under the minimum <br> <br>  

    <span>* </span> You then pick the element'size corresponding to the maximum and then the minimum screen size <br> <br>

    <span>* </span> Click on the clamp button, the clamp value will be given to you, copy it, give it to the element and its size will adjust across the screen sizes you chose

  </section>
</template>

<style scoped></style>
