<template>
	<div class="wrapper">
		<HeaderApp/>
		<div class="art">
			<router-view></router-view>
			<PanelApp/>
		</div>
	</div>
</template>

<script>
import HeaderApp from './header'
import PanelApp from './panel'

export default {
  name: 'AppLayaout',
  components: {
  	HeaderApp,
  	PanelApp
  },
  data() {
    return {
        upHere: false,
        shows: false
    }
  },
  methods: {
    
  },
};
</script>

<style lang="css" scoped>
	.art{
		width: 81%;
		margin: 20px auto; 
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-gap: 20px;
	}
</style>
