
<template>
	<div class="wrapper">
		<div class="menu">
			<div class="title">
				<div class="title_text">
					Потоки
				</div>
			</div>
			<div class="content">
				<div class="artTitle">Разработка</div>
			</div>
			<div class="content">
				<div class="artTitle">Дизайн</div>
			</div>
			<div class="content">
				<div class="artTitle">Маркетинг</div>
			</div>
			<div class="content">
				<div class="artTitle">Разное</div>
			</div>
		</div>

		<div class="menu">
			<div class="title">
				<div class="title_text">
					Популярное
				</div>
			</div>
			<div class="content">
				<div class="artTitle">
					<div class="artt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
					<div class="ds">
						<i class="el-icon-star-on favi"></i> 5  
						<i class="el-icon-s-comment mr"></i> 5
					</div>
				</div>
			</div>
			<div class="content">
				<div class="artTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
			</div>
		</div>
	</div>
</template>


<script>
export default {
  name: 'panel',

  data() {
    return {

    };
  },
};
</script>


<style lang="css" scoped>
	.wrapper{
		width: 100%;
		margin-top: 10px;
		height: 100%
	}
	.menu {
		border-top: 2px solid #e06149;
		margin-bottom: 20px;
		background: #f7f7f7;
		position: sticky;
	}
	.title{
		position: relative;
		font-weight: bolder;
		font-size: 1.3em
	}
	.title_text{
		padding: 10px;
		border-bottom: 2px solid #F2F2F2;
	}
	.artTitle{
		padding: 10px;
		border-bottom: 2px solid #F2F2F2;
	}
	.artt{
		cursor: pointer;
		color: #662035
	}
	.artt:hover{
		color: #024B4F
	}
	.ds{
		margin-top: 5px;
	}
	.ds i{
		font-size: 1.2em
	}
	.mr{
		margin-left: 10px;
		color: #E6A23C;
		/*font-size: 1.1em*/
	}
	.favi{
		color: #a0cfff;
		font-size: 1.4em
	}
	@media (max-width: 48px){
		
	}
</style>