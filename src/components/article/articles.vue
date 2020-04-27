<template>
	<div class="wrapper">
		<div class="container">
			<el-radio-group v-model="articleType" style="margin-bottom: 30px;">
				<el-radio-button label="blog">Blogs</el-radio-button>
				<el-radio-button label="news">News</el-radio-button>
				<el-radio-button label="questions">Questions</el-radio-button>
			</el-radio-group>
			<el-tabs>
			  <el-tab-pane label="Все подряд">
				  	
					<article v-for="d in posts" v-bind:key="d.id">
						<ArticleDetail :date="d.date" :id="d.id" :title="d.title" 
									:text="d.text" :tags="d.tags" :favorite="d.favorite"
									:comment="d.comment"/>
					</article>
					<div class="fl" v-if="posts.length > 15">
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
							  :total="posts.length">
							</el-pagination>
							<el-pagination 
							  v-else
							  :page-size="15"
							  @current-change="handleCurrentChange"
							  background
							  layout="prev, pager, next"
							  :total="posts.length">
							</el-pagination>
			 			</div>
					</div>
			  </el-tab-pane>
			  <el-tab-pane label="Лучшие">
					<article v-for="d in sData" v-bind:key="d.id">
						<ArticleDetail :date="d.date" :id="d.id" :title="d.title" :text="d.text" :tags="d.tags" :favorite="d.favorite" :comment="d.comment"/>
					</article>
					<div class="fl" v-if="posts.length > 15">
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
import ArticleDetail from './articledetail'

export default {
  name: 'articles',
  components: {
	  ArticleDetail
  },
  data() {
    return {
      uid: sessionStorage.getItem('uid'),
      token: sessionStorage.getItem('token'),
      islike: false,
      showPagination: false,
      smallPag: false,
      posts: [],
      date: '2019-11-23 11:19:00',
	  sData: [],
	  articleType: "blog"
    };
  },
  watch: {
	  articleType: function(oldType, newType){
		  this.getArticles()
	  }
  },
  created(){
	window.addEventListener('resize', this.resize)
  },
  destroyed () {
    window.removeEventListener('resize', this.resize);
  },
  mounted() {
  	this.sData.sort(function(a, b){
		return b.srt - a.srt
	})
	this.getArticles()
  },
  methods: {
	getArticles(){

		this.$http.get('get/'+this.articleType)
			.then(r => {
				return r.json()
			})
			.then(r => {
				this.posts = r
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
		width: 100%;
	}
	

</style>