import Searcher from '../Searcher/Searcher.vue';
import ComicList from '../ComicList/ComicList.vue';

export default {
  name: 'ComicsPage',
  components : {
    Searcher,
    ComicList,
  },
  data(){
    return {
      searchValue : '',
    }
  },
  methods : {
    sendSearchValue(searcherInputValue){
      this.searchValue = searcherInputValue;
    }
  }
}