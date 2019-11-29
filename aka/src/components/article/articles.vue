<template>
	<div class="wrapper">
		<div class="container">
			<el-tabs>
			  <el-tab-pane label="Все подряд">
					<article v-for="d in data" v-bind:key="d.id">
						<div class="article">
							<div class="text">
								<div class="date">{{ d.date | dataform }}</div>
								<router-link class="title" :to="{name: 'article', params: { id: d.id }}" tag="div">{{ d.title }}</router-link>
								<div class="tags">
									<span v-for="tag, i in d.tags.split(' ')" v-bind:key="i">
										<router-link class="title" :to="{name: 'tag', params: {tags: tag}}" tag="a">{{tag}} </router-link>
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
			  </el-tab-pane>
			  <el-tab-pane label="Лучшие">
					<article v-for="d in sData" v-bind:key="d.id">
						<div class="article">
							<div class="text">
								<div class="date">{{ d.date | dataform }}</div>
								<router-link class="title" :to="{name: 'article', params: { id: d.id }}" tag="div">{{ d.title }}</router-link>
								<div class="tags">
									<span v-for="tag, i in d.tags.split(' ')" v-bind:key="i">
										<router-link class="title" :to="{name: 'tag', params: {tags: tag}}" tag="a">{{tag}} </router-link>
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
								<el-button v-else-if="(token) && (d.favorite.indexOf(parseInt(uid)) == -1)" class="ic" icon="el-icon-star-off" type="primary" size="mini" plain @click="addFav(d.id)">
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
							  :total="sData.length">
							</el-pagination>
							<el-pagination 
							  v-else
							  :page-size="15"
							  @current-change="handleCurrentChange"
							  background
							  layout="prev, pager, next"
							  :total="sData.length">
							</el-pagination>
			 			</div>
					</div>
			  </el-tab-pane>
			</el-tabs>
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
      islike: false,
      showPagination: false,
      smallPag: false,
      data: [],
      date: '2019-11-23 11:19:00',
      sData: []
    };
  },
  created(){
	window.addEventListener('resize', this.resize)
  },
  destroyed () {
    window.removeEventListener('resize', this.resize);
  },
  beforeCreate() {
  	this.$http.get('articles/')
  		.then(r => {
  			return r.json()
  		})
  		.then(r => {
  			this.data = r
  			this.sData = [...r]
  			for (let i in this.sData){
  				let a = this.sData[i]['favorite'].length + this.sData[i]['comment'].length
  				this.sData[i]['srt'] = a
  			}
  			this.sData.sort(function(a, b){
				return b.srt - a.srt
			})
  			console.log(r)
  		}, r => {
  			console.log(r)
  		})
  },
  mounted() {
  	this.sData.sort(function(a, b){
		return b.srt - a.srt
	})
  },
  methods: {
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
    	  }, r => {
    	  	console.log(r)
    	  })
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
		padding: 10px;
		width: calc(100% - 30px);
		margin: 20px auto;
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