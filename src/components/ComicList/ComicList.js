export default {
  name: 'ComicList',
  props: ['searchValue'],
  data(){
    return {
      title : 'Lista de comics',

    }
  },
  methods : {

  },
  watch : {
    shearchValues(){
      console.log(this.searchValue);
    }
  }
}