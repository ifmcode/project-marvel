<template>
  <div class="comic-wrapper">
    <div class="title-container mask">
      <p>{{ data.title }}</p>
    </div>
    <div class="image-container">
      <img v-if="!data.thumbnail.path.includes('image_not_available')" :src="data.thumbnail.path
        + '.' + data.thumbnail.extension " alt="">
      <img v-else src="/static/images/not-found.jpg" alt="">
    </div>
  </div>
</template>

<script src="./Comic.js"></script>
<style scoped src="./Comic.css"></style>
