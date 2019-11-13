<template>
	<div class="wrapper">
		<HeaderApp></HeaderApp>

		<div class="profile">
			<div class="pr_head">
				<div class="title active" >
					<a href="">profile</a>
				</div>
				<div class="title">
					<a href="">articles</a>
				</div>
				<div class="title">
					<a href="">profile</a>
				</div>
			</div>

			<div class="body">
				<router-view></router-view>
			</div>
		</div>
		<FooterApp></FooterApp>
	</div>
</template>

<script>
import HeaderApp from '../header'
import FooterApp from '../footer'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  components: {
	HeaderApp,
	FooterApp
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
.profile{
	width: 80%;
	margin: auto;
}
.pr_head{
	width: 100%;
	margin: auto;
	display: flex;
	/*border-bottom: 1px solid #000*/
}
.title{
	padding: 10px;
}
.title a{
	text-decoration: none;
	padding: 10px;
	font-size: 1.2em;
	font-weight: bolder;
}
.active{
	background: #fff
}
.body{
	padding: 10px;
	background: #fff
}
label{
	margin-bottom: -10px
}
</style>
