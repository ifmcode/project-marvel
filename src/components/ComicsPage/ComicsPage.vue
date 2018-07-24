<template>
  <div class="comicspage-wrapper">
    <Searcher @searchRequestDone="saveSearchValue" />
    <ResultList :searchResult="searchResult" :totalPages="totalPages" :currentPage="currentPage" />
    <Pagination :totalPages="totalPages" :currentPage="currentPage"/>
  </div>
</template>

<script src="./ComicsPage.js"></script>
<style scoped src="./ComicsPage.css"></style>

