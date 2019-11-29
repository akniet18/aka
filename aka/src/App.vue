<template>
  <div id="app">
     <router-view></router-view>
     <vue-progress-bar></vue-progress-bar>
  </div>
</template>


<script>
export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
  },
};
</script>


<style scoped>
	#app{
    padding: 0;
    margin: 0;
		/*font-family:"Comic Sans MS", cursive, sans-serif;*/
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		overflow: hidden;
    height: 100%;
		background: #F6F6F6
	}
</style>