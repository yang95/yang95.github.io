<template>
  <div class="container">
  	<y_header @jump="jump"></y_header>
  	<y_body :src="src"></y_body>
  </div>
</template>

<script>
import y_header from '@/components/public/header';
import y_body from '@/components/public/body';
export default {
  name: 'index',
  data () {
    return {
      src: 'http://yangakw.cn'
    }
  },
  components: {
    y_header,y_body
  },
  methods:{
    jump(href){
      this.src = href;
    }
  }
}
</script>

<style>

  .container{
    width:100%;
    height:100%;
  }

</style>
