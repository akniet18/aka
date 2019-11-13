<template>
	<div class="wrapperAuth">
		<div class="logForm">
			<div class="form regform">
				<h1 class="title">Регистрация</h1>
				<div class="inpDiv">
					<label :class="{errorL:$v.reg_form.email.$invalid}" for="email">E-mail</label>
          			<el-input
						:class="{errorI:$v.reg_form.email.$invalid}"
						id="email"
						v-model="reg_form.email"
						@blur="$v.reg_form.email.$touch()"
						clearable
						>
					</el-input>
					<div class="errorM" v-if="!$v.reg_form.email.required">email is required</div>
					<div class="errorM" v-if="!$v.reg_form.email.email">not email</div>
				</div>
				<div class="inpDiv">
					<label :class="{errorL:$v.reg_form.username.$invalid}" for="username">Никнейм</label>
          			<el-input
						:class="{errorI:$v.reg_form.username.$invalid}"
						id="username"
						v-model="reg_form.username"
						@blur="$v.reg_form.username.$touch()"
						clearable
						>
					</el-input>
					<div class="errorM" v-if="!$v.reg_form.username.required">username is required</div>
					<div class="errorM" v-if="!$v.reg_form.username.minLength">username minlegth 4</div>
				</div>
				<div class="inpDiv">
					<label :class="{errorL:$v.reg_form.password.$invalid}" for="password">Пароль</label>
          			<el-input
						:class="{errorI:$v.reg_form.password.$invalid}"
						id="password"
						v-model="reg_form.password"
						@blur="$v.reg_form.password.$touch()"
						clearable
            			show-password
						>
					</el-input>
					<div class="errorM" v-if="!$v.reg_form.password.required">password is required</div>
					<div class="errorM" v-if="!$v.reg_form.password.minLength">password minlegth 6</div>
				</div>
				<div class="inpDiv">
					<label :class="{errorL:$v.reg_form.password2.$invalid}" for="password2">Пароль ещё раз</label>
          			<el-input
						:class="{errorI:$v.reg_form.password2.$invalid}"
						id="password2"
						v-model="reg_form.password2"
						@blur="$v.reg_form.password2.$touch()"
						clearable
            			show-password
						>
					</el-input>
					<div class="errorM" v-if="!$v.reg_form.password2.required">password is required</div>
					<div class="errorM" v-if="!$v.reg_form.password2.sameAsPassword">passwords don`t match</div>
				</div>
				<div class="inpDiv">
					<el-button type="primary" :disabled="$v.reg_form.$invalid" @click="register">Зарегистрироваться</el-button>
				</div>
			</div>
			<div class="regDiv regdivv">
				Уже зарегистрированы? 
				<router-link tag="el-link" :to="{name: 'login'}"><el-link class="regf" type="primary">Войдите</el-link></router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
  name: 'reg',
  data() {
    return {
      reg_form:{
        username: '',
        password: '',
        email: '',
        password2: '',
      },
    }
  },
  validations: {
    reg_form: {
       username: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6)
      },
      password2: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    register() {
      let data = {
        'username': this.reg_form.username,
        'email': this.reg_form.email,
        'password1': this.reg_form.password,
        'password2': this.reg_form.password2
      }
      console.log(data)
      this.$http.post('rest-auth/registration/', data)
        .then(r => {
           console.log(r)
           if (r.statusText == 'Created'){
           	 this.$router.push({name: 'login'})
           }
        }, r => {
          console.log(r)
        })
    }
  }
};
</script>

<style lang="css" scoped>
</style>
