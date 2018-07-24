<template>
  <div class="pagination-wrapper">
    <div class="links-container">
      <router-link 
            class="previous-btn"
            :to="{ name: 'ComicsPageWithParam', params: { page : Number(currentPage) -1}}"
            v-if="currentPage > 1">
        <svg :class="{ 'visible' : currentPage > 0 }" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"> <g> <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/> </g> </svg>
      </router-link>
     
      <router-link 
            v-for="pageNumber in availablePages" 
            :key="pageNumber.id"
            :class="{ 'highlighted' : pageNumber === currentPage }"
            v-if="pageNumber > 0 && pageNumber <= totalPages"
            :to="{ name: 'ComicsPageWithParam', params: { page : pageNumber } }" >
            {{pageNumber}}
        </router-link>
        
      <router-link 
            class="next-btn"
            :to="{ name: 'ComicsPageWithParam', params: { page : Number(currentPage) + 1 }}"
            v-if="currentPage < totalPages">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"> <g> <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/> </g> </svg>
      </router-link>
    </div>
  </div>
</template>

<script src="./Pagination.js"></script>
<style scoped src="./Pagination.css"></style>
