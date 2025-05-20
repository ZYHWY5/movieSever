<script setup>
import Nav from '@/components/nav.vue';
import searchInput from '@/components/search-input.vue';
</script>

<template>
  <div class="bg">
    <div class="nav">
      <Nav></Nav>
    </div>
    <div class="search_input">
      <searchInput></searchInput>
    </div>
    <div class="ani">
      <div class="ani_1"></div>
      <div class="ani_1 ani_2"></div>
      <div class="ani_1 ani_2 ani_3"></div>
    </div>
  </div>
</template>

<style scoped>
.bg{
  position: relative;
}
.nav{
  position: fixed;
  top: 0;
  z-index: 10;
}
.search_input{
  position: absolute;
  left: 5%;
  top: -100px;
  z-index: 0;
}
.ani{
  width: 36px;
  height: 36px;
  margin: 350px auto 0 auto;
  position: relative;
  z-index: -999;
}
.ani_1{
  width: 100%;
  height: 100%;
  border: 1.2px solid blueviolet;
  border-radius: 51% 45% 54% 31% / 39% 70% 51% 87%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all, 0.5s;
  animation: rotateAni 6s linear infinite;
}
.ani_2{
  border: 1.2px solid #3E71FE;
  border-radius: 35% 26% 33% 27% / 41% 30% 36% 39%;
  top: 2%;
  left: 2%;
  animation: rotateAni 4s linear infinite;
}
.ani_3{
  border: 1.2px solid #5F5AFB;
  border-radius: 32% 50% 69% 43% / 48% 32% 50% 55%;
  top: 5%;
  left: 5%;
  animation: rotateAni2 6s linear infinite;
}

@keyframes rotateAni{
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
}
@keyframes rotateAni2{
  0%{
    transform: rotate(360deg);
  }
  100%{
    transform: rotate(0);
  }
}
</style>
