<template>
	<div class="wrapperAuth">
		<div class="logForm">
			<form class="form" @submit.prevent="submit">
				<h1 class="title">Вход</h1>
				<div class="inpDiv">
					<label :class="{errorL:$v.ch_form.username.$invalid}" for="username">E-mail</label>
					<input :class="{errorI:$v.ch_form.username.$invalid}" type="text" id="username" v-model="ch_form.username" @blur="$v.ch_form.username.$touch()">
					<div class="errorM" v-if="!$v.ch_form.username.required">username is required</div>
					<div class="errorM" v-if="!$v.ch_form.username.minLength">username minlegth 4</div>
				</div>
				<div class="inpDiv">
					<label :class="{errorL:$v.ch_form.password.$invalid}" for="password">Пароль</label>
					<input :class="{errorI:$v.ch_form.password.$invalid}" type="password" id="password" v-model="ch_form.password" @blur="$v.ch_form.password.$touch()">
					<div class="errorM" v-if="!$v.ch_form.password.required">password is required</div>
					<div class="errorM" v-if="!$v.ch_form.password.minLength">passowrd minlength 6</div>
				</div>
				<div class="inpDiv">
					<el-button type="primary" :disabled="$v.ch_form.$invalid" @click="login">Войти</el-button>
				</div>
				<el-link type="primary">Забыли пароль?</el-link>
			</form>
			<div class="regDiv">
				Ещё нет аккаунта? 
				<router-link tag="el-link" :to="{name: 'reg'}"><el-link class="regf" type="primary">Зарегистрируйтесь</el-link></router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'login',
  data() {
    return {
      ch_form: {
        username: '',
        password: ''
      }
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
    submit() {
      this.$v.ch_form.$touch()
      if (this.$v.ch_form.$invalid) {
        return
      } 
    },
    login() {
      let data ={
        'username': this.ch_form.username,
        'password': this.ch_form.password
      }
      this.$http.post('rest-auth/login/', data)
        .then(r => {
          return r.json()
        })
        .then(r => {
          console.log(r)
          sessionStorage.setItem('auth', r.key)
          if (r.key){
            this.$router.push('/') 
          }
        }, r => {
          console.log(r)
        })

    }
  }
};
</script>

<style lang="css">
	.wrapperAuth{
		position: absolute;
		z-index: 9999;
		top: 0;
		left: 0;
		width: 100%;
		background: #f4f4f4;
		display: flex;
		min-height: 100%;
		justify-content: center;
		align-items: center;
	}
	.form, .regDiv{
		background: #fff;
		padding: 20px 40px;
		box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
		border-radius: 5px;
	}
	.regDiv{
		margin-top: 20px;
		text-align: center;
	}
	.regform{
		margin-top: 10%;
	}
	.regdivv{
		margin-bottom: 10%;
	}
	.logForm{
		width: calc(50vw - 80px);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.inpDiv{
		padding: 20px 0 10px 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.inpDiv input{
		padding: 10px;
		margin-top: 5px;
		border: 1px solid silver;
		outline: none;
	}
	.regf{
		font-size: 1.03em
	}
	.errorI, .errorM, .errorL{
		color: #F56C6C
	}
	.errorI{
		border-color: #F56C6C!important;
		animation: animate 0.2s linear 2;
	}
	@keyframes animate{
		25%{
			transform: translateX(-5px);
		}
		50%{
			transform: translateX(0);
		}
		75%{
			transform: translateX(5px);
		}
		100%{
			transform: translateX(0);
		}
	}
	@media (max-width: 1024px){
		.logForm{
			width: calc(60vw - 80px);
		}	
	}
	@media (max-width: 840px){
		.logForm{
			width: calc(70vw - 80px);
		}	
	}
	@media (max-width: 700px){
		.logForm{
			width: calc(80vw - 80px);
		}	
	}
	@media (max-width: 480px){
		.wrapperAuth{
			align-items: flex-start;
		}
		.logForm{
			width: 100%;
			top: 0;
			left: 0;
			transform: translate(0, 0);
		}	
		.regform{
			margin-top: 0%;
		}
		.regdivv{
			margin-bottom: 15%;
		}
		.form, .regDiv{
			padding: 20px 15px;
		}

	}
	@media (max-width: 360px){
		
	}
</style>
