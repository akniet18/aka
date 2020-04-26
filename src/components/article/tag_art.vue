<template>
	<div class="wrapper">
		<article v-for="d in data" v-bind:key="d.id">
			<div class="article">
				<div class="text">
					<div class="date">{{ d.date | dataform }}</div>
					<router-link class="title" :to="{name: 'article', params: { id: d.id }}" tag="div">{{ d.title }}</router-link>
					<div class="tags">
						<span v-for="tagi, i in d.tags.split(' ')" v-bind:key="i">
							<router-link class="title" :to="{name: 'tag', params: {tags: tag}}"  tag="a"><span @click="changetag(tagi)">{{tagi}} </span></router-link>
						</span>
					</div>
					<div class="content" v-html="d.text.slice(0, 150)">

					</div>
				</div>
			</div>
			<div class="artInfo">
				<div class="like">
					<el-button v-if="(token) && (d.favorite.indexOf(parseInt(uid)) != -1)" class="ic" icon="el-icon-star-off" type="primary" size="mini" @click="addFav(d.id)">
						{{d.favorite.length}}
					</el-button>
					<el-button v-else-if="(token) && (d.favorite.indexOf(parseInt(uid)) == -1)" class="ic" icon="el-icon-star-off" type="primary" size="mini" plain  @click="addFav(d.id)">
						{{d.favorite.length}}
					</el-button>
					<el-button v-else class="ic" icon="el-icon-star-off" type="primary" size="mini" disabled >
						{{d.favorite.length}}
					</el-button>
				</div>
				<div class="count">
					<el-button class="ic" icon="el-icon-s-comment" type="warning" size="mini" plain>
						<router-link :to="'article/'+d.id+'#comment'" tag="span">{{ d.comment.length }}</router-link>
					</el-button>
				</div>
			</div>
		</article>
		<div class="fl" v-if="data.length > 15">
			<el-switch v-model="showPagination">
 			</el-switch>
 			<div v-if="showPagination"></div>
 			<div v-else>
 				<el-pagination
 				  v-if="smallPag"
 				  small
				  :page-size="15"
				  @current-change="handleCurrentChange"
				  background
				  layout="prev, pager, next"
				  :total="data.length">
				</el-pagination>
				<el-pagination 
				  v-else
				  :page-size="15"
				  @current-change="handleCurrentChange"
				  background
				  layout="prev, pager, next"
				  :total="data.length">
				</el-pagination>
 			</div>
		</div>
		</div>
	</div>
</template>


<script>

export default {
  name: 'articles',

  data() {
    return {
      uid: sessionStorage.getItem('uid'),
      token: sessionStorage.getItem('token'),
      tag: this.$route.params.tags,
      islike: false,
      showPagination: false,
      smallPag: false,
      data: [],
      date: '2019-11-23 11:19:00'
    };
  },
  watch: {
	  tag: function(oldTag, newTag){
		  this.getTags()
	  }
  },
  created(){
	window.addEventListener('resize', this.resize)
  },
  destroyed () {
    window.removeEventListener('resize', this.resize);
  },
  beforeCreate() {
  	let data = {
			'tag': this.$route.params.tags
		}
		console.log(data)
		this.$http.post('tags/', data)
			.then(r => {
				return r.json()
			})
			.then(r => {
				this.data = r.articles
				console.log(r)
			}, r => {
				console.log(r)
			})
  },
  methods: {
	getTags() {
		let data = {
			'tag': this.tag
		}
		console.log(data)
		this.$http.post('tags/', data)
			.then(r => {
				return r.json()
			})
			.then(r => {
				this.data = r.articles
				console.log(r)
			}, r => {
				console.log(r)
			})
	},
  	handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`current page: ${val}`);
    },
    resize(){
      	if (window.innerWidth < 481){
      		console.log(window.innerWidth)
      		this.smallPag = true
      	}
      	else{
      		this.smallPag = false
      	}
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
	},
	changetag(tagi){
		console.log(tagi)
	  this.tag = tagi
  }
  },
  
};
</script>


<style lang="css" scoped>
	.fl{
		display: flex;
		align-items: center;
	}
	article{
		background: #fff;
		/*border-top: 3px solid #024B4F;*/
		margin-bottom: 20px;
		padding: 10px;
		width: calc(100% - 20px);
		box-shadow: 0 0 5px 2px rgba(0,0,0,.2);
	}
	.wrapper{
		/*margin-top: 10px;*/
	}
	.article{
		display: flex;
		/*justify-content: center;*/
		flex-wrap: wrap;
		/*align-items: center;*/
		color: rgba(0,0,0,0.5);

	}
	.article{
		/*padding: 10px;*/
	}
	.artInfo{
/*		padding: 3px 10px;*/
		padding-top: 10px;
		display: flex;
		align-items: center;
	}
	.artInfo div{
		margin-right: 10px;
	}
	.date{
		font-size: 0.8em;
	}
	.title{
		font-size: 1.6em;
		color: #e06149;
		padding: 5px 0;
		cursor: pointer;
	}
	.title:hover{
		color: #024B4F;
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
	.ic{
		font-size: 1.1em;

	}
	.commentI{
		color: #65a3be
	}
	@media (max-width: 480px){
		.content{
			display: none;
		}
		.title{
			font-size: 1.1em
		}
		.ic{
			font-size: 0.8em
		}
		.fl{
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>