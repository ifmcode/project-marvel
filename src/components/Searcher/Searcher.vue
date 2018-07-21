<template>
  <div class="searcher-wrapper">
    <input @keyup.enter="sendSearchValue()" type="text" v-model="searcherInputValue">
    <select v-model="searcherSelectValue">
      <option value="comics">comics</option>
      <option value="characters">characters</option>
    </select>
  </div>
</template>

<script src="./Searcher.js"></script>
<style src="./Searcher.css"></style>

