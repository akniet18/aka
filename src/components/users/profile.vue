/* eslint-disable */
<template>
	<div class="wrapper">
		<HeaderApp></HeaderApp>
		
		<div class="container">
			<el-tabs type="border-card" class="sect">
			  <el-tab-pane label="User">
			  	<InfoApp></InfoApp>
			  </el-tab-pane>
			  <el-tab-pane label="Favourites">
			  	<FavApp></FavApp>
			  </el-tab-pane>
			  <el-tab-pane label="Articles">
			  	<ArtApp></ArtApp>
			  </el-tab-pane>
			</el-tabs>
			<!-- <el-tabs >
				<el-tab-pane label="User"><InfoApp></InfoApp></el-tab-pane>
				<el-tab-pane label="Favourites"><FavApp></FavApp></el-tab-pane>
				<el-tab-pane label="Articles"><ArtApp></ArtApp></el-tab-pane>
			</el-tabs> -->
		</div>
		
		<FooterApp></FooterApp>
	</div>
</template>

<script>
import HeaderApp from '../header'
import FooterApp from '../footer'
import InfoApp from './info'
import ArtApp from './articles'
import FavApp from './favorites'
export default {
  components: {
	HeaderApp,
	FooterApp,
	InfoApp,
	FavApp,
	ArtApp
  },
  data() {
    return {
      formError: false
    }
  },
  methods: {
    
  }
};
</script>

<style lang="css" scoped>
.container{
	width: 82%;
	margin: auto;
	margin-bottom: 50px;
}
.sect{
	min-height: 75vh;
	height: 100%;
}
</style>
