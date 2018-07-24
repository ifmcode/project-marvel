import Comic from '../Comic/Comic.vue';
import Character from '../Character/Character.vue';


export default {
  name: 'ResultList',
  props: ['searchResult','currentPage','totalPages'],
  components : {
    Comic,
    Character,
  },
  data(){
    return {
      
    }
  },
  methods : {},
  watch : {},
  created(){
    
  }
}