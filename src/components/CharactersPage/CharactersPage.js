import Searcher from '../Searcher/Searcher.vue';
import ResultList from '../ResultList/ResultList.vue';
import Pagination from '../Pagination/Pagination.vue';
import axios from 'axios';
import md5 from 'js-md5';

export default {
  name: 'CharactersPage',
  components : {
    Searcher,
    ResultList,
    Pagination,
  },
  data(){
    return {
      searchValue : '',
      searchResult : '',
      publicKey : 'bf687835d52f6e1edbf3f57a23909ee7',
      privateKey : '9cf606ee3551955f5f31313af14b785c6dc2919c',
      charactersPerPage : 10,
      currentPage : 0,
      totalPages : 0,
    }
  },
  methods : {
    saveSearchValue(searcherInputValue){
      this.searchValue = searcherInputValue;
      this.requestCharacters();
    },
    requestCharacters(){
      const url = this.generateUrl();
      axios.get(url)
        .then( response => {
          this.searchResult = response.data.data.results;
          this.totalPages = Math.ceil(response.data.data.total / this.charactersPerPage);
        }).catch( error => {
          console.log('An error ocurred: ' + error);
        })
    },
    generateUrl(){
      const now = Date.now();
      const baseUrl = 'http://gateway.marvel.com/';
      const endPoint = 'v1/public/characters';
      const offset = '&offset=' + (this.currentPage - 1) * this.charactersPerPage;
      const limit = '&limit=' + this.charactersPerPage;
      const apikey = '&apikey=' + this.publicKey;
      const hash = '&hash=' + md5(now + this.privateKey + this.publicKey);

      if(this.searchValue !== ''){
        const searchingTitle = '?nameStartsWith=' + this.searchValue;
        const ts = '&ts=' + now;
        return baseUrl + endPoint + searchingTitle + ts + offset + limit + apikey + hash;
      }else{
        const ts = '?ts=' + now;
        return baseUrl + endPoint + ts + offset + limit + apikey + hash;
      }
    }
  },
  created(){
    this.currentPage = this.$route.params.page;
    if(this.$route.path === '/characters') this.currentPage = 1;
    this.requestCharacters();
  },
  watch: {
    '$route' () {
      this.currentPage = this.$route.params.page;
      if(this.$route.path === '/characters') this.currentPage = 1;
      this.requestCharacters();
    }
  }
}
