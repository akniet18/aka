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
		border-top: 2px solid #e06149;
		margin-bottom: 20px;
		background: #f7f7f7
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
		cursor: pointer;
		color: #662035
	}
	.artTitle:hover{
		color: #024B4F
	}
	@media (max-width: 480px){
		.title{
			font-size: 1em
		}
		.artTitle{
			font-size: 0.9em
		}
	}
</style>