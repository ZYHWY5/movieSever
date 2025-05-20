<script setup>
import "../src/assess/public.css";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped></style>
