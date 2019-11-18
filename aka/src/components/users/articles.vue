<template>
	<div class="wrapper">
		<article>
			<div class="article">
				<div class="img">
					
				</div>
				<div class="text">
					<div class="date">10.09.2019</div>
					<router-link class="title" :to="{name: 'article', params: { id: '1' }}" tag="div">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</router-link>
					<div class="tags">tags, it, python, jquery</div>
					<div class="content">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, harum. Debitis deleniti cum distinctio facilis optio quod quia deserunt. Vitae laborum nam reiciendis! Necessitatibus ab inventore voluptatum voluptatem eius. Iste.
					</div>
				</div>
			</div>
			<div class="artInfo">
				<div class="like"><el-button class="ic" icon="el-icon-star-off" type="primary" size="mini" plain>10</el-button></div>
				<div v-show="islike" class="islike"><el-button class="ic" icon="el-icon-star-on" type="primary" size="mini" plain><span>10</span></el-button></div>
				<div class="count"><el-button class="ic" icon="el-icon-chat-square" type="warning" size="mini" plain>5</el-button></div>
			</div>
		</article>
		<article>
			<div class="article">
				<div class="img">
					
				</div>
				<div class="text">
					<div class="date">10.09.2019</div>
					<div class="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
					<div class="tags">tags, it, python, jquery</div>
					<div class="content">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, harum. Debitis deleniti cum distinctio facilis optio quod quia deserunt. Vitae laborum nam reiciendis! Necessitatibus ab inventore voluptatum voluptatem eius. Iste.
					</div>
				</div>
			</div>
			<div class="artInfo">
				<div class="like"><el-button class="ic" icon="el-icon-star-off" type="primary" size="mini" plain>10</el-button></div>
				<div v-show="islike" class="islike"><el-button class="ic" icon="el-icon-star-on" type="primary" size="mini" plain><span>10</span></el-button></div>
				<div class="count"><el-button class="ic" icon="el-icon-chat-square" type="warning" size="mini" plain>5</el-button></div>
			</div>
		</article>
		<article>
			<div class="article">
				<div class="img">
					
				</div>
				<div class="text">
					<div class="date">10.09.2019</div>
					<div class="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
					<div class="tags">tags, it, python, jquery</div>
					<div class="content">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, harum. Debitis deleniti cum distinctio facilis optio quod quia deserunt. Vitae laborum nam reiciendis! Necessitatibus ab inventore voluptatum voluptatem eius. Iste.
					</div>
				</div>
			</div>
			<div class="artInfo">
				<div class="like"><el-button class="ic" icon="el-icon-star-off" type="primary" size="mini" plain>10</el-button></div>
				<div v-show="islike" class="islike"><el-button class="ic" icon="el-icon-star-on" type="primary" size="mini" plain><span>10</span></el-button></div>
				<div class="count"><el-button class="ic" icon="el-icon-chat-square" type="warning" size="mini" plain>5</el-button></div>
			</div>
		</article>

		<div class="fl">
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
				  :total="100">
				</el-pagination>
				<el-pagination 
				  v-else
				  :page-size="15"
				  @current-change="handleCurrentChange"
				  background
				  layout="prev, pager, next"
				  :total="100">
				</el-pagination>
 			</div>
			

		</div>
		
	</div>
</template>


<script>
export default {
  name: 'articles',

  data() {
    return {
      islike: false,
      showPagination: false,
      smallPag: false,
    };
  },
  created(){
	window.addEventListener('resize', this.resize)
  },
  destroyed () {
    window.removeEventListener('resize', this.resize);
  },
  beforeCreate() {
  	let uid = sessionStorage.getItem('uid')
  	this.$http.get('articles/?author='+uid)
  		.then(r => {
  			return r.json()
  		})
  		.then(r => {
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
  }
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
		justify-content: center;
		flex-wrap: wrap;
		align-items: center;
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
	.tags{
		color: #4E6680;
		font-size: 0.8em;
		padding: 0 0 3px 0;
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