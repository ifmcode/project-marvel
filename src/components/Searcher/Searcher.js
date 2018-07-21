export default {
  name: 'Searcher',
  data(){
    return {
      title : 'Buscador de comics',
      searcherInputValue : '',
      searcherSelectValue : 'comics',
    }
  },
  methods : {
    sendSearchValue(){
      this.$emit('searchRequestDone', this.searcherInputValue);
    }
  }
}