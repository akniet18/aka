<template>
  <div id="app">
    <headerApp></headerApp>
    <article>
        <router-view></router-view>
        <PanelApp></PanelApp>
    </article>
  </div>
</template>


<script>
import HeaderApp from './components/header'
import PanelApp from './components/panel'
export default {
  name: 'app',
  data() {
    return {
       art: this.$router.currentRoute.name,
       artc: false
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
		/*font-family:"Comic Sans MS", cursive, sans-serif;*/
		font-family: "Trebuchet MS", Helvetica, sans-serif;
		overflow-x: hidden;
	}
	article{
		width: 81%;
		margin: 20px auto;
		display: grid;
		grid-template-columns: 2fr 1fr;
		align-items: flex-start;
		grid-gap: 30px;
	}
	.non{
		display: none;
	}
</style>