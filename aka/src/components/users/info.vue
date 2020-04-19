<template>
  <div class="wrapper">
    <div class="section">
      <div class="avatar">
        <el-avatar shape="square" :size="70" :src="ruleForm.avatar"></el-avatar>
      </div>
      <div>
        <span class="usrname">{{ruleForm.username}}</span>
      </div>
      <div v-if="token">
        <el-button style="padding: 5px; margin-left: 10px;" type="primary" plain icon="el-icon-setting" @click="dialogFormVisible = true">edit</el-button>
      </div>
    </div>

    <div class="name">
      {{ruleForm.last_name}} {{ruleForm.first_name}}
    </div>

    <div class="brthdate">
      {{ruleForm.birth_date | dataform}}
    </div>
    
    <div class="about">
      {{ruleForm.about}}
    </div>

    <div class="tag">
      <h2>Подписан на: </h2>
      <el-tag
        class="ttgg"
        v-for="tag in tags"
        :key="tag.name"
        closable
        :type="tag.type">
        {{tag.name}} 
      </el-tag>
    </div>
    
    <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm" label-position="top">
        <div class="flex">

          <div class="avatar">
            <div class="avadiv" >
              <el-avatar v-if="ruleForm.avatar" class="avatar2" shape="square" :size="100" :src="ruleForm.avatar"></el-avatar>
              <input type="file" data-max-file-size="3MB" class="fileinput" @change="previewFiles"  data-max-files="1">
            </div>
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

        <el-form-item prop="birth_date">
            <label for="birth_date">Birth date</label>
            <el-date-picker id="birth_date" type="date" placeholder="Pick a date" v-model="ruleForm.birth_date" style="width: 100%;"></el-date-picker>
        </el-form-item>

        <el-form-item>
          <label for="about">About</label>
          <el-input v-model="ruleForm.about" id="about" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="submitForm">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      token: sessionStorage.getItem('token'),
      ruleForm: {
          username: '',
          email: '',
          first_name: '',
          last_name: '',
          birth_date: '',
          about: ''
        },
        dialogFormVisible: false,
        rules: {
          username: [
            { required: true, message: 'Please input username', trigger: 'blur' },
            { min: 3, max: 15, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          email: [
            { required: true, message: 'Please input email', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ],
          birth_date: [
            { required: true, message: 'Please pick a time', trigger: 'blur' }
          ],
          first_name: [
            { required: true, message: 'Please input firstname', trigger: 'blur' }
          ],
          last_name: [
            { required: true, message: 'Please input lastname', trigger: 'blur' }
          ],
        },
      tags: [
        { name: 'Tag 1', type: '' },
        { name: 'Tag 2', type: 'success' },
        { name: 'Tag 3', type: 'info' },
        { name: 'Tag 4', type: 'warning' },
        { name: 'Tag 5', type: 'danger' }
      ],
      file: null
    }
  },
  created() {
    let headers = {
        'Authorization': 'Token ' + sessionStorage.getItem('token')
    }
    this.$http.get('users/' + sessionStorage.getItem('uid') + '/', {headers})
      .then(r => {
        return r.json()
      })
      .then(r => {
        this.ruleForm.username = r.username
        this.ruleForm.email = r.email
        this.ruleForm.birth_date = r.birth_date
        this.ruleForm.first_name = r.first_name
        this.ruleForm.last_name = r.last_name
        this.ruleForm.avatar = r.avatar
        this.ruleForm.about = r.about
        console.log(r)
      }, r => {
        console.log(r)
      })
  },
  methods: {
    submitForm() {
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            this.dialogFormVisible = false
            this.changeI()
          }else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    changeI(){
      let headers = {
        'Authorization': 'Token ' + sessionStorage.getItem('token'),
        'Content-Type' : 'multipart/form-data'
      }
      var a = moment(String(this.ruleForm.birth_date)).format('YYYY-MM-DD')
      let data = new FormData()
      if (this.file != null){
        data['avatar'] = this.file  
      }
      data.append('username', this.ruleForm.username)
      data.append('email', this.ruleForm.email)
      data.append('birth_date', a)
      data.append('first_name', this.ruleForm.first_name)
      data.append('last_name', this.ruleForm.last_name)
      data.append('about', this.ruleForm.about)
      console.log(data)
      this.$http.put('users/'+sessionStorage.getItem('uid')+'/', data, {headers})
        .then(r => {
          return r.json()
        })
        .then(r => {
          console.log(r)
          this.ruleForm.username = r.username
          this.ruleForm.email = r.email
          this.ruleForm.birth_date = r.birth_date
          this.ruleForm.first_name = r.first_name
          this.ruleForm.last_name = r.last_name
          this.ruleForm.avatar = r.avatar
          this.ruleForm.about = r.about
        }, r=> {
          console.log(r)
        })
    },
    previewFiles(event) {
      this.file = event.target.files[0];
      var reader = new FileReader();
      var imgtag = document.querySelector(".avatar2 img");
    
      reader.onload = function(event) {
        imgtag.src = event.target.result;
      };
      reader.readAsDataURL(this.file);
   }
  }
};
</script>

<style lang="css" scoped>
.ttgg{
  margin-right: 5px;
}
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
.section{
  display: flex;
  align-items: center;  
}
.usrname{
  font-size: 1.5em;
  color: #e06149
}
.name{
  margin-top: 10px;
  font-size: 1.2em;
}

.avadiv{
  position: relative;
}
.fileinput{
  position: absolute;
  top: 0;
  opacity: 0;
  left: 0;
  width: 100px;
  height: 100px;
}
</style>
