<template>
  <div class="comicsview-wrapper">
    <Searcher @searchRequestDone="sendSearchValue" />
    <ComicList :searchValue="searchValue" />
  </div>
</template>

<script src="./ComicsPage.js"></script>
<style src="./ComicsPage.css"></style>
