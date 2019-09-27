<template>
	<div class="wrapper">
		<article>
			<div class="article">
				<div class="img">
					
				</div>
				<div class="text">
					<div class="date">10.09.2019</div>
					<router-link class="title" :to="{name: 'art'}" tag="div">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</router-link>
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
	</div>
</template>


<script>
export default {
  name: 'articles',

  data() {
    return {
      islike: false
    };
  },
};
</script>


<style lang="css" scoped>
	article{
		background: #fff;
		border-top: 3px solid #024B4F;
		margin-bottom: 20px;
	}
	.wrapper{
		margin-top: 10px;
	}
	.article{
		display: flex;
		justify-content: center;
		align-items: center;
		color: rgba(0,0,0,0.5);
	}
	.article{
		padding: 10px;
	}
	.artInfo{
		padding: 3px 10px;
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
		color: #000;
		cursor: pointer;
	}
	.title:hover{
		color: #024B4F;
	}
	.tags{
		color: #4E6680;
		font-size: 0.8em
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
		.article{
			padding: 20px 15px;
		}
	}
</style>