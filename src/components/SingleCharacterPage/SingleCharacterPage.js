import md5 from 'js-md5';
import axios from 'axios';

export default {
  name: 'SingleCharacterPage',
  data(){
    return {
      id: '',
      publicKey : 'bf687835d52f6e1edbf3f57a23909ee7',
      privateKey : '9cf606ee3551955f5f31313af14b785c6dc2919c',
      character: [],
      imageUrl : '',
    }
  },
  methods : {
    requestSingleCharacter(){
      const url = this.generateUrl();
      axios.get(url)
        .then( response => {
          this.character = response.data.data.results[0];
          this.imageUrl = this.character.thumbnail.path + '.' + this.character.thumbnail.extension;
          console.log(this.character);
        }).catch( error => {
          console.log('An error ocurred: ' + error);
        })
    },
    generateUrl(){
      const now = Date.now();
      const baseUrl = 'http://gateway.marvel.com/';
      const endPoint = 'v1/public/characters/' + this.id;
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
      this.requestSingleCharacter();
    }
  },
  created(){
    this.id = this.$route.params.id;
    this.requestSingleCharacter();
  }
}