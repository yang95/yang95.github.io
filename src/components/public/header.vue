<template>
    <div class="y_header">
        <div class="nav_item" v-for="item of list">
            <span @click="jump(item.href)"> {{ item.name }} </span>
        </div>

    </div>
</template>
<script>
  import request from "@/components/lib/request";

  export default {
    name: 'y_header',
    data () {
      return {
        list: [
          {
            href: 'http://yangakw.cn/',
            name: '博客',
          }
        ]
      }
    },
    mounted(){
        this.init();
    },
    methods: {
      jump(href){
        this.$emit("jump", href);
      },
      init(){
        let $this = this;
        let href = "http://dingnotice.yangakw.cn/?r=nav_index";
        request.get(href, (resp) => {
          if (resp.error == 0) {
            $this.list = resp.data;
          }
        });
      }
    }
  }
</script>
<style>
    .y_header {
        height: 38px;
        width: 100%;
        background: #000;
        color: #FFF;
        overflow-y:scroll ;
    }

    .nav_item {
        height: 38px;
        line-height: 38px;
        margin: 0 15px;
        float: left;
    }
</style>
