import md5 from 'js-md5';
import axios from 'axios';

export default {
  name: 'SingleComicPage',
  data(){
    return {
      id: '',
      publicKey : 'bf687835d52f6e1edbf3f57a23909ee7',
      privateKey : '9cf606ee3551955f5f31313af14b785c6dc2919c',
      comic: [],
      imageUrl : '',
    }
  },
  methods : {
    requestSingleComic(){
      const url = this.generateUrl();
      axios.get(url)
        .then( response => {
          this.comic = response.data.data.results[0];
          this.imageUrl = this.comic.thumbnail.path + '.' + this.comic.thumbnail.extension;
          console.log(this.comic);
        }).catch( error => {
          console.log('An error ocurred: ' + error);
        })
    },
    generateUrl(){
      const now = Date.now();
      const baseUrl = 'http://gateway.marvel.com/';
      const endPoint = 'v1/public/comics/' + this.id;
      const ts = '?ts=' + now;
      const apikey = '&apikey=' + this.publicKey;
      const hash = '&hash=' + md5(now + this.privateKey + this.publicKey);
      return baseUrl + endPoint + ts + apikey + hash;
    },
    goBack(){
      this.$router.go(-1);
    }
  },
  watch : {
    '$route' () {
      this.id = this.$route.params.id;
      this.requestSingleComic();
    }
  },
  created(){
    this.id = this.$route.params.id;
    this.requestSingleComic();
  }
}