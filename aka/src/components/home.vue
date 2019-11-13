<template>
  <div id="app">
	   <headerApp></headerApp>
	    <article>
	        <router-view></router-view>
	        <PanelApp></PanelApp>
	    </article>
	    <FooterApp></FooterApp>
  </div>
</template>

<script>
import HeaderApp from './header'
import PanelApp from './panel'
import FooterApp from './footer'
export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
	HeaderApp,
	PanelApp,
	FooterApp
  },
};
</script>


<style scoped>
article{
	width: 81%;
	margin: auto;
	/*padding: 10px;*/
	display: grid;
	grid-template-columns: 2.3fr 1fr;
	align-items: flex-start;
	grid-gap: 40px;
}
.non{
	display: none;
}
@media (max-width: 760px){
	article{
		display: flex;
		flex-direction: column;
	}
}
@media (max-width: 480px){
	article{
		width: 100%;
	}
}
</style>