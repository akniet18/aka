<template>
	<div class="wrapperAuth">
		<div class="logForm">
			<el-form :model="reg_form" :rules="rules" ref="reg_form" class="demo-ruleForm form regform">
				<h1 class="title">Регистрация</h1>
				<div class="inpDiv">
					<el-form-item prop="username">
						<label for="username">Username</label>
						<el-input
							id="username"
							v-model="reg_form.username"
							clearable
							>
						</el-input>			
					</el-form-item>		
				</div>
				<div class="inpDiv">
					<el-form-item prop="email">
						<label for="email">E-mail</label>
						<el-input
							id="email"
							v-model="reg_form.email"
							clearable
							>
						</el-input>			
					</el-form-item>	
				</div>
				<div class="inpDiv">
					<el-form-item prop="password">
						<label for="password">Password</label>
						<el-input
							id="password"
							v-model="reg_form.password"
							clearable
							show-password
							>
						</el-input>			
					</el-form-item>	
				</div>
				<div class="inpDiv">
					<el-form-item prop="password2">
						<label for="password2">Confirm Password</label>
						<el-input
							id="password2"
							v-model="reg_form.password2"
							clearable
							show-password
							>
						</el-input>			
					</el-form-item>	
				</div>
				<div class="inpDiv">
					<el-button type="primary" @click="register">Зарегистрироваться</el-button>
				</div>
			</el-form>

			<div class="regDiv regdivv">
				Уже зарегистрированы? 
				<router-link tag="el-link" :to="{name: 'login'}"><el-link class="regf" type="primary">Войдите</el-link></router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'reg',
  data() {
  	var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.reg_form.password) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
    };
    return {
      reg_form:{
        username: '',
        password: '',
        email: '',
        password2: '',
      },
      rules: {
          username: [
            { required: true, message: 'Please input username', trigger: 'blur' },
            { min: 6, max: 15, message: 'Length should be more than 6', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please input password', trigger: 'blur' },
            { min: 6, max: 15, message: 'Length should be more than 6', trigger: 'blur' }
          ],
          password2: [
          	{validator: validatePass2, trigger: 'blur'}
          ],
          email: [
          	{ required: true, message: 'Please input email address', trigger: 'blur' },
      		{ type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ]
      }
    }
  },
  methods: {
    register() {
      this.$refs['reg_form'].validate((valid) => {
          if (valid) {
            this.reg()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    reg(){
      let data = {
        'username': this.reg_form.username,
        'email': this.reg_form.email,
        'password': this.reg_form.password,
      }
      console.log(data)
	  this.$http.post('users/register/', data)
	  	.then(r=>{
			  return r.json()
		  })
        .then(r => {
           if (r.status == 'ok'){
           	 this.$router.push({name: 'login'})
           }
        }, r => {
          console.log(r)
        })
    }
  }
};
</script>
