<template>
  <div class="wrapper">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm" label-position="top">

        <div class="flex">
          <div class="avatar">
            <el-avatar shape="square" :size="100" src=""></el-avatar>
          </div>
          <el-form-item class="username_in" prop="username">
            <label for="username">Username</label>
            <el-input v-model="ruleForm.username" id="username"></el-input>
          </el-form-item>
        </div>
        
        <el-form-item prop="email">
          <label for="email">Email</label>
          <el-input v-model="ruleForm.email" id="email"></el-input>
        </el-form-item>

        <el-form-item prop="first_name">
          <label for="first_name">Firstname</label>
          <el-input v-model="ruleForm.first_name" id="first_name"></el-input>
        </el-form-item>

        <el-form-item prop="last_name">
          <label for="Lastname">Lastname</label>
          <el-input v-model="ruleForm.last_name" id="Lastname"></el-input>
        </el-form-item>

        <el-form-item required prop="date1">
            <label for="birth_date">Birth date</label>
            <el-date-picker id="birth_date" type="date" placeholder="Pick a date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>

        <el-form-item prop="gender">
          <label for="Gender">Gender</label>
          <el-radio-group id="Gender" v-model="ruleForm.gender">
            <el-radio label="Male"></el-radio>
            <el-radio label="Female"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">Create</el-button>
        </el-form-item>
      </el-form>     
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
          username: '',
          email: '',
          first_name: '',
          last_name: '',
          date2: '',
          gender: ''
        },
        rules: {
          username: [
            { required: true, message: 'Please input username', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          email: [
            { required: true, message: 'Please input email', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          gender: [
            { required: true, message: 'Please select gender', trigger: 'change' }
          ],
          first_name: [
            { required: true, message: 'Please input firstname', trigger: 'blur' }
          ],
          last_name: [
            { required: true, message: 'Please input lastname', trigger: 'blur' }
          ],
        }
    }
  },

  methods: {
    submitForm() {
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            alert('submit!');
          }else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
};
</script>

<style lang="css" scoped>
#Gender{
  margin-left: 10px;
}
.flex{
  display: flex;
  align-items: center;
}
.avatar{
  margin-right: 10px;
}
.username_in{
  width: 100%;
}
</style>
