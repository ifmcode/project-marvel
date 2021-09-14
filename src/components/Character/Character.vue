<template>
  <div class="character-wrapper">
    <div class="title-container mask">
      <p>{{ data.name }}</p>
    </div>
    <div class="image-container">
      <img v-if="!data.thumbnail.path.includes('image_not_available')" :src="data.thumbnail.path
        + '.' + data.thumbnail.extension " alt="">
      <img v-else src="/static/images/not-found.jpg" alt="">
    </div>
  </div>
</template>

<script src="./Character.js"></script>
<style scoped src="./Character.css"></style>
