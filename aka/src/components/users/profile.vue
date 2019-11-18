<template>
	<div class="wrapper">
		<HeaderApp></HeaderApp>
		
		<div class="container">
			<el-tabs type="border-card">
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
import { required, minLength } from 'vuelidate/lib/validators'
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
      form: {
        username: null,
        password: null
      },
      formError: false
    }
  },
  validations: {
    ch_form: {
       username: {
        required,
        minLength: minLength(4)
      },
      password: {
        required,
        minLength: minLength(6)
      }
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
}
</style>
