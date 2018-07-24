export default {
  name: 'Searcher',
  data(){
    return {
      title : 'Buscador de comics',
      searcherInputValue : '',
      searcherSelected : this.getCurrentSearcherName(),
      nameOfOtherSearch : '',
      listOfSearchersShowed : false,
    }
  },
  methods : {
    sendSearchValue(){
      //Regular expression to replace double spaces to single space
      this.searcherInputValue = this.searcherInputValue.replace(/ +(?= )/g,'');
      if(this.searcherInputValue !== '' && this.searcherInputValue !== ' '){
        this.$emit('searchRequestDone', this.searcherInputValue);
      }
    },
    switchSearcher(){
      if(this.searcherSelected === 'comics'){
        this.$router.push({name: 'CharactersPage'});
      }else{
        this.$router.push({name: 'ComicsPage'});
      }
    },
    getCurrentSearcherName(){
      const currentUrl = this.$route.path;
      if(currentUrl.includes('comics')){
        return 'comics'
      }else{
        return 'characters'
      }
    },
    searcherButtonIsClicked(){
      this.listOfSearchersShowed = !this.listOfSearchersShowed;
    },
    getNameOfOtherSearch(){
      if(this.searcherSelected === 'comics'){
        this.nameOfOtherSearch = 'characters';
      }else{
        this.nameOfOtherSearch = 'comics';
      }
    }
  },
  watch : {
    searcherSelected(){
      this.switchSearcher();
    },
  },
  created(){
    this.getNameOfOtherSearch();
  }
}