<script setup>
import appHeader from './components/app-header.vue'
import appFooter from './components/app-footer.vue'
</script>

<template>
  <section class="main-layout">
    <app-header />
    <router-view></router-view>
    <app-footer />
  </section>
</template>
