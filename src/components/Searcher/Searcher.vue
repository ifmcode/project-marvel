<template>
  <div class="searcher-wrapper">
    <input @keyup.enter="sendSearchValue()" type="text" v-model="searcherInputValue" placeholder="Name or title starts with...">
    <div @click="searcherButtonIsClicked" class="select-button">
      <p>{{ searcherSelected }}</p>
      <ul @mouseleave="listOfSearchersShowed = false" :class="{ 'visible' : this.listOfSearchersShowed }">
        <li @click="switchSearcher()">
          <p>{{nameOfOtherSearch}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./Searcher.js"></script>
<style src="./Searcher.css"></style>



