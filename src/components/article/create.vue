<template>
	<div class="wrapper">
		<div>
			<el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
			  <el-form-item label="Title" prop="title">
			    <el-input v-model="ruleForm.title"></el-input>
			  </el-form-item>

			  <el-form-item label="Content" prop="content">
				 <editor 
                    :value="editorText"
                    :options="editorOptions"
                    :html="editorHtml"
                    :visible="editorVisible"
                    previewStyle="vertical"
                    height="500px"
                    mode="wysiwyg"
                    ref="tuiEditor"
                 />
			  </el-form-item>

			  <el-form-item label="Tags" prop="tags">
			    <el-input v-model="ruleForm.tags"></el-input>
			  </el-form-item>

        <el-form-item>
          <el-radio-group v-model="radio">
            <el-radio :label="1">Blog</el-radio>
            <el-radio :label="2">Questions</el-radio>
            <el-radio :label="3">News</el-radio>
          </el-radio-group>
        </el-form-item>

			  <el-form-item>
			    <el-button type="primary" @click="submitForm">Create</el-button>
			    <el-button @click="resetForm">Reset</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</div>
</template>


<script>
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import { Editor } from '@toast-ui/vue-editor'

export default {
  components: {
    'editor': Editor
  },
  data() {
    return {
        radio: 1,
        editorText: '',
        editorHTML: '',
        editorOptions: {
            minHeight: '200px',
            language: 'en_US',
            useCommandShortcut: true,
            useDefaultHTMLSanitizer: true,
            usageStatistics: true,
            hideModeSwitch: false,
            toolbarItems: [
                'heading',
                'bold',
                'italic',
                'strike',
                'divider',
                'hr',
                'quote',
                'divider',
                'ul',
                'ol',
                'task',
                'indent',
                'outdent',
                'divider',
                'table',
                'image',
                'link',
                'divider',
                'code',
                'codeblock'
            ]
        },
        editorHtml: '',
        editorVisible: true,
        ruleForm: {
        	title: '',
        	// content: '',
        	tags: ''
        },
        rules: {
          title: [
            {required: true, message: 'Please input title', trigger: 'blur' },
          ],
          // content: [
          // 	{required: true, message: 'Please input text', trigger: 'blur' },
          // ],
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
        	this.create()
        } else {
        	console.log('error submit!!');
        	return false;
        }
      });
	},
	resetForm() {
      this.$refs['ruleForm'].resetFields();
    },
    getHtml() {
        let html = this.$refs.tuiEditor.invoke('getHtml');
        return html
    },
    create(){
    	let headers = {
    		'Authorization': 'Token ' + sessionStorage.getItem('token')
        }
    	let data = {
    		'title': this.ruleForm.title,
    		'text': this.getHtml(),
    		'tags': [this.ruleForm.tags]
      }
      if (this.radio == 1){
        data['is_blog'] = true,
        data["is_q"] = false,
        data['is_news'] = false
      }
      else if(this.radio == 2){
        data['is_blog'] = false,
        data["is_q"] = true,
        data['is_news'] = false
      }
      else{
        data['is_blog'] = false,
        data["is_q"] = false,
        data['is_news'] = true
      }
      console.log(data)
    	this.$http.post('articles/', data, {headers})
    	  .then(r => {
    	  	return r.json()
    	  })
    	  .then(r => {
    	  	console.log(r)
    	  }, r => {
    	  	console.log(r)
    	  })
    },
  },
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