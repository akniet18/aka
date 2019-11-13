<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>


<script>
import HeaderApp from './components/header'
import PanelApp from './components/panel'
export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
	HeaderApp,
	PanelApp,
  },
};
</script>


<style scoped>
	#app{
    padding: 0;
    margin: 0;
		/*font-family:"Comic Sans MS", cursive, sans-serif;*/
		font-family: "Trebuchet MS", Helvetica, sans-serif;
		overflow: hidden;
    height: 100%;
		background: #F6F6F6
	}
</style>