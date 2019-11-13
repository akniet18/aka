<template>
  <div class="wrapper">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm" label-position="top">
        <el-form-item label="Username" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>

        <el-form-item label="Email" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>

        <el-form-item label="Firstname" prop="first_name">
          <el-input v-model="ruleForm.first_name"></el-input>
        </el-form-item>

        <el-form-item label="Lastname" prop="last_name">
          <el-input v-model="ruleForm.last_name"></el-input>
        </el-form-item>

        <!-- <el-form-item label="Activity zone" prop="region">
          <el-select v-model="ruleForm.region" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item> -->

        <el-form-item label="birth date" required prop="date1">
            <el-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>

       <!--  <el-form-item label="Activity type" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="Online activities" name="type"></el-checkbox>
            <el-checkbox label="Promotion activities" name="type"></el-checkbox>
            <el-checkbox label="Offline activities" name="type"></el-checkbox>
            <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item> -->

        <el-form-item label="Gender" prop="gender">
          <el-radio-group v-model="ruleForm.gender">
            <el-radio label="Male"></el-radio>
            <el-radio label="Female"></el-radio>
          </el-radio-group>
        </el-form-item>

        <!-- <el-form-item label="Activity form" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item> -->

        <el-form-item>
          <el-button type="primary" @click="submitForm">Create</el-button>
          <el-button @click="resetForm">Reset</el-button>
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
      resetForm() {
        this.$refs['ruleForm'].resetFields();
      }
  }
};
</script>

<style lang="css" scoped>
label{
  margin-bottom: -10px
}
</style>
