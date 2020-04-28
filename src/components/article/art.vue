<template>
	<div class="wrapper">
		<div class="art">
			<div class="date">{{data.date | dataform}}</div>
			<div class="title">{{data.title}}</div>
			<div class="text" v-html="data.text">
				
			</div>
			<div class="tags">
				<div class="t_title">Теги:</div>
				<div class="tag">
					<span v-for="tag, i in data.tags.split(' ')" v-bind:key="i">
						<router-link :to="{name: 'tag', params: {tags: tag}}" tag="a">{{tag}}  </router-link>
					</span>
				</div>
			</div>
			<div class="info">
				<div class="like">
					<el-button v-if="(token) && (data.favorite.indexOf(parseInt(uid)) != -1)" class="ic" icon="el-icon-star-off" type="primary" size="mini" @click="addFav(data.id)">
						{{data.favorite.length}}
					</el-button>
					<el-button v-else-if="(token) && (data.favorite.indexOf(parseInt(uid)) == -1)" class="ic" icon="el-icon-star-off" type="primary" size="mini" plain @click="addFav(data.id)">
						{{data.favorite.length}}
					</el-button>
					<el-button v-else class="ic" icon="el-icon-star-off" type="primary" size="mini" disabled >
						{{data.favorite.length}}
					</el-button>
				</div>
				<div class="count"><el-button class="ic" icon="el-icon-s-comment" type="warning" size="mini" plain>{{data.comment.length}}</el-button></div>
			</div>
		</div>
		<div class="comD" id="comment">
			<div class="comD_title">Комментарии <span>{{data.comment.length}}</span></div>

			<el-form v-if="token" :model="form" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm wd" size="mini">
				<el-form-item prop="comment" size="medium">
			      <el-input type="textarea" v-model="form.comment"></el-input>
			    </el-form-item>
			    <el-form-item>
			      <el-button type="primary" @click="submitForm">Create</el-button>
			      <el-button @click="resetForm">Reset</el-button>
			    </el-form-item>
			</el-form>

			<div v-else class="wd center_div">
				<div>
					<router-link :to="{name: 'login'}">
						Войдите чтобы оставить комментарии	
					</router-link>
				</div>
			</div>

			<!-- <div class="commentD" v-for="c in comments" v-bind:key="c.id">
				<div class="commentInfo">
					<div class="c_auth">{{c.author.username}}</div>
					<div class="c_date">{{c.date | dataform}}</div>
				</div>
				<div class="com_text">
					{{c.text}}
				</div>
			</div> -->
		</div>

		<div>
			<Tree v-for="(c,i) in comments.children" :key="i" :data="c"></Tree>
		</div>
	</div>
</template>


<script>
import Tree from '../tree'
export default {
  name: 'art',
  components: {
	  Tree
  },
  data() {
    return {
      islike: false,
	  id: this.$route.params.id,
	  uid: sessionStorage.getItem('uid'),
      token: sessionStorage.getItem('token'),
      form: {
		comment: '',
      },
      rules: {
		comment: [
			{required: true, message: 'Please input comment', trigger: 'blur' },
		],
	  },
	  data: [],
	  comments: {'children': []}
    };
  },
  created() {
  	this.$http.get('articles/'+this.id+'/')
  		.then(r => {
  			return r.json()
  		})
  		.then(r => {
  			this.data = r
  			console.log(r)
  		}, r => {
  			console.log(r)
  		})
  	this.getComments()
  },
  methods: {
  	getComments(){
  		this.$http.get('comments/?article='+this.id)
	  	  .then(r=>{
	  	  	return r.json()
	  	  })
	  	  .then(r=>{
	  	  	this.comments.children = JSON.parse(JSON.stringify(r))
	  	  	console.log(r)
	  	  }, r => {
	  	  	console.log(r)
	  	  })
  	},
    submitForm() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
        	this.comment()
        } else {
        	console.log('error submit!!');
        	return false;
        }
      });
	},
	resetForm() {
      this.$refs['ruleForm'].resetFields();
    },
    comment(){
    	let headers = {
    		'Authorization': 'Token ' + sessionStorage.getItem('token')
    	}
    	// console.log(headers)
    	let data = {
    		'text': this.form.comment,
    		'article': this.$route.params.id,
    		'parent': null
    	}
    	console.log(data)
    	this.$http.post('comments/', data, {headers})
    	  .then(r => {
    	  	return r.json()
    	  })
    	  .then(r => {
    	  	console.log(r)
    	  	this.getComments()
    	  }, r => {
    	  	console.log(r)
    	  })
	},
	addFav(id) {
		let headers = {
        	'Authorization': 'Token ' + sessionStorage.getItem('token')
    	}
    	let data = {
    		'id': id
    	}
    	this.$http.post('article/add/', data, {headers})
    	  .then(r => {
    	  	return r.json()
    	  })
    	  .then(r => {
			console.log(r)
			for (let i in this.posts){
				if (this.posts[i].id == id){
					if (r.status == "post add fav"){
						this.posts[i].favorite.push(this.uid)
					}else{
						const index = this.posts[i].favorite.indexOf(this.uid);
						if (index > -1) {
							this.posts[i].favorite.splice(index, 1)
						}
						
					}
					console.log(this.posts[i].favorite)
				}
				
			}		
    	  }, r => {
    	  	console.log(r)
    	  })
	}    
  }
};
</script>


<style lang="css" scoped>
.wrapper{
	margin: 10px 0;
	width: 100%;
}
.art{
	padding: 10px;
	box-shadow: 0 0 5px 2px rgba(0,0,0,.2);
	background: #fff;
	/*width: 100%;*/
}
.title{
	font-size: 1.7em;
	padding:20px 0; 
	font-weight: bolder;
}
.date{
	font-size: 0.8em;
}
.tags{
	margin-top: 20px;
	display: flex;
	align-items: center;
}
.tag{
	color: #4E6680
}
.t_title{
	font-weight: bolder;
	margin-right: 10px;
}
.info{
	margin-top: 20px;
	display: flex;
	align-items: center;
}
.info div{
	margin-right: 10px;
}
.comD{
	height: 100%;
	margin-top: 10px;
	background: #fff;
	height: 100%;
	box-shadow: 0 0 5px 2px rgba(0,0,0,.2);
	padding-bottom: 20px;
}
.comD_title{
	font-size: 1.8em;
	padding: 10px;
	border-bottom: 1px solid #000;
}
.comD_title span{
	color: #4E6680 
}
.commentD{
	padding: 20px 20px 0 20px;
}
.ic{
	font-size: 1.1em;
}
.wd{
	width: 96%;
	margin: 10px auto;
}
.center_div {
	display: flex;
	justify-content: center;
	align-items: center;
	background: #F6F6F6;
	padding: 20px 0;
}
.center_div a{
	text-decoration: none;
	color: #409EFF
}
.center_div a:hover{
	text-decoration: underline;
}
.tags a{
	color: #4E6680;
	font-size: 0.8em;
	padding: 0 0 3px 0;
	text-decoration: none;
}
.tags a:hover{
	text-decoration: underline;
}
.text{
	width: 100%;
	height: auto;
}
.text >>> *{
	width: 100%;
	height: auto;		
}
/*.text{
	width: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
}
.art p, .art img, .text div{
	width: 95%;
	margin: auto;
}*/
@media (max-width: 480px){
	.art{
		padding: 20px 15px;
	}
	.title{
		font-size: 1.2em
	}
	.info{
		font-size: 0.9em
	}
	.comD{
		padding: 15px 10px;
	}
	.comD_title{
		font-size: 1.3em
	}
	.commentD{
		padding: 7px;
	}
	.wd{
		width: 98%;
	}
	.center_div{
		text-align: center;
	}
}
</style>