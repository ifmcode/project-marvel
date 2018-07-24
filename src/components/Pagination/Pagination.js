
export default {
  name: 'Pagination',
  components : {},
  props : ['totalPages', 'currentPage'],
  data(){
    return {
      availablePages : [],
    }
  },
  methods : {
    getAvailablePages(){
      this.availablePages = [this.currentPage -2, this.currentPage - 1, Number(this.currentPage), Number(this.currentPage) +1, Number(this.currentPage) +2];
    }
  },
  created(){
    this.getAvailablePages();
  },
  watch : {
    currentPage(){
      this.getAvailablePages();
    }
  }
}