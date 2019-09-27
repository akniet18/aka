<template>
	<div class="wrapper">
		<div class="menu">
			<div class="title">
				<div class="title_text">
					Lorem ipsum
				</div>
			</div>
			<div class="content">
				<div class="artTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
			</div>
			<div class="content">
				<div class="artTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
			</div>
		</div>

		<div class="menu">
			<div class="title">
				<div class="title_text">
					Lorem ipsum 2
				</div>
			</div>
			<div class="content">
				<div class="artTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
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
		margin-top: 10px;
	}
	.menu {
		margin-bottom: 20px;
		background: #f7f7f7
	}
	.title{
		position: relative;
		border-top: 7px solid #024B4F;
	}
	.title_text{
		padding: 10px;
		border-bottom: 2px solid silver;
	}
	.artTitle{
		padding: 10px;
		border-bottom: 2px solid #F2F2F2;
		cursor: pointer;
		color: #662035
	}
	.artTitle:hover{
		color: #024B4F
	}
	@media (max-width: 48px){
		
	}
</style>