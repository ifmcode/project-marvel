<template>
  <div class="resultlist-wrapper">
    <ul class="list-wrapper">
      <li
          v-for="comicOrCharacter in searchResult"
          :key="comicOrCharacter.id">

          <router-link
            :to="{ name: 'SingleComicPage', params: { id : comicOrCharacter.id } }"
            v-if="$router.currentRoute.fullPath.includes('comics')"
            >
            <Comic :data="comicOrCharacter"/>
          </router-link>

          <router-link
            :to="{ name: 'SingleCharacterPage', params: { id : comicOrCharacter.id } }"
            v-if="$router.currentRoute.fullPath.includes('characters')"
            >
            <Character :data="comicOrCharacter"/>
          </router-link>


      </li>
    </ul>
  </div>
</template>

<script src="./ResultList.js"></script>
<style scoped src="./ResultList.css"></style>

