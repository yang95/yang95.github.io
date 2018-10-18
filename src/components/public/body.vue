<template>
  <div class="container">
      <iframe :src="src"></iframe>
  </div>
</template>
<script>
export default {
  props: ['src'],
  name: 'y_body',
  data () {
    return {

    }
  }
}
</script>
<style>
  iframe{
    border:0px;
    width:100%;
    height:100%;
  }
</style>
