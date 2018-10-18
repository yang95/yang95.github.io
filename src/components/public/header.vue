<template>
  <div class="y_header">
    <div class="nav_item">
      <span @click="jump('http://yangakw.cn/')"> 博客 </span>
    </div>
    <div class="nav_item">
      <span @click="jump('http://qiniu.yangakw.cn/')"> 图床 </span>
    </div>
    <div class="nav_item">
      <span @click="jump('http://ocr.yangakw.cn/')"> ocr </span>
    </div>
    <div class="nav_item">
      <span @click="jump('http://json.cn/')"> json </span>
    </div>
    <div class="nav_item">
      <span @click="jump('https://tool.lu/coderunner/')"> 代码运行 </span>
    </div>
    <div class="nav_item">
      <span @click="jump('https://tool.lu/base64image/')"> 图片base64 </span>
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
