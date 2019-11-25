<template>
	<div class="wrapper">
		<div>
			<el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
			  <el-form-item label="Title" prop="title">
			    <el-input v-model="ruleForm.title"></el-input>
			  </el-form-item>

			  <el-form-item label="Content" prop="content">
					<ckeditor :editor="editor" v-model="ruleForm.content" :config="editorConfig"></ckeditor>
			  </el-form-item>

			  <el-form-item label="Tags" prop="tags">
			    <el-input v-model="ruleForm.tags"></el-input>
			  </el-form-item>

			  <el-form-item>
			    <el-button type="primary">Create</el-button>
			    <el-button @click="resetForm">Reset</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</div>
</template>


<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import HeaderApp from '../header'
export default {
  components: {
	HeaderApp,
  },
  data() {
    return {
        editor: ClassicEditor,
        editorData: '',
        editorConfig: {
            // The configuration of the editor.
        },
        ruleForm: {
        	title: '',
        	content: '',
        	tags: ''
        },
        rules: {
			title: [
				{required: true, message: 'Please input title', trigger: 'blur' },
			],
			content: [
				{required: true, message: 'Please input text', trigger: 'blur' },
			],
			tags: [
				{required: true, message: 'Please input tags', trigger: 'blur' },
			],
		},
    };
  },
  methods: {
    submitForm() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
        	alert('submit!');
        } else {
        	console.log('error submit!!');
        	return false;
        }
      });
	},
	resetForm() {
      this.$refs['ruleForm'].resetFields();
    },
    create(){
    	let headers = {
    		'Authorization': 'Token ' + sessionStorage.getItem('token')
        }
    	let data = {
    		'title': this.title,
    		'text': this.content,
    		'tags': this.tags
    	}
    	this.$http.post('articles/', data, {headers})
    	  .then(r => {
    	  	return r.json()
    	  })
    	  .then(r => {
    	  	console.log(r)
    	  }, r => {
    	  	console.log(r)
    	  })
    }
  }
};
</script>


<style lang="css" scoped>
	.wrapper{
		margin-top: 10px;
		background: #fff;
		padding: 10px 15px
	}
	.el-form--label-top, .el-form-item__label{
		margin-bottom: -10px;
	}
	@media (max-width: 48px){
		
	}
</style>