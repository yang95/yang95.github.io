<template>
  <div class="y_header">
    <div class="nav_item">
      <span> 山山水水 </span>
    </div>
    <div class="nav_item">
      <span> 山山水水 </span>
    </div>
    <div class="nav_item">
      <span @click="jump('https://3v4l.org/')"> PHP运行 </span>
    </div>
    <div class="nav_item">
      <span @click="jump('http://yangakw.cn/')"> 博客 </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'y_header',
  data () {
    return {

    }
  },
  methods:{
    jump(href){
       this.$emit("jump",href);
    }
  }
}
</script>
<style>
  .y_header{
    height:38px;
    min-width:100%;
    background:#000;
    color:#FFF;
  }
  .nav_item{
      height:38px;
      line-height:38px;
      margin:0 15px;
      float:left;
  }
</style>
