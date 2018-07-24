<template>
  <div class="characterspage-wrapper">
    <Searcher @searchRequestDone="saveSearchValue" />
    <ResultList :searchResult="searchResult" :totalPages="totalPages" :currentPage="currentPage"/>
    <Pagination :totalPages="totalPages" :currentPage="currentPage"/>
  </div>
</template>

<script src="./CharactersPage.js"></script>
<style scoped src="./CharactersPage.css"></style>

