<script setup lang="ts">
import { Settings, CirclePlay } from '@lucide/vue';
</script>

<template>
  <header id="header" class="my-5 text-frosted text-center text-header flex gap-home justify-center items-center">
    <RouterLink :to="{name: 'home'}">Fluid Clamp</RouterLink>
    
    <RouterLink :to="{ name: 'clamp'}">
      <CirclePlay class="size-(--text-header)"/>
    </RouterLink>

    <RouterLink :to="{ name: 'settings'}">
      <Settings class="size-(--text-header)"/>
    </RouterLink>

  </header>

  <RouterView/>

</template>

<style scoped></style>
