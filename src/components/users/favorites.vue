<template>
	<div class="wrapper">
		<article v-for="d in data" v-bind:key="d.id">
			<ArticleDetail :date="d.date" :id="d.id" :title="d.title" 
							:text="d.text" :tags="d.tags" :favorite="d.favorite" 
							:comment="d.comment"/>
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
</template>


<script>
import ArticleDetail from '../article/articledetail'

export default {
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
      data: [],
      date: '2019-11-23 11:19:00'
    };
  },
  created(){
	window.addEventListener('resize', this.resize)
  },
  destroyed () {
    window.removeEventListener('resize', this.resize);
  },
  beforeCreate() {
  	let headers = {
        'Authorization': 'Token ' + sessionStorage.getItem('token')
    }
  	let data = {
  		'id': sessionStorage.getItem('uid')
  	}
  	this.$http.post('favs/', data, {headers})
  		.then(r => {
  			return r.json()
  		})
  		.then(r => {
  			this.data = r.posts
  			console.log(r)
  		}, r => {
  			console.log(r)
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