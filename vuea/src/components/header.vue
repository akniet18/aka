<template>
	<div class="wrapper">
		<div class="wave"></div>
		<header ref="head">
			<div class="header">
				<div class="title" @scroll="onSCroll">
					<router-link tag="div" class="logo" :to="{name: 'home'}"><span ref="title">AKA</span></router-link>
					<div class="divH" ref="divH">
						<div>News</div>
						<div>Articles</div>
					</div>
				</div>
				
				<div class="r_col">
					<div class="searchD">
						<div class="sDiv" v-show="shows">
							<input class="searchInput"  type="text" placeholder="search...">
							<i class="el-icon-close close" @click="shows=!shows"></i>
						</div>
						<el-button class="icon searchI" @click="shows=!shows" icon="el-icon-search" plain></el-button>
						<router-link :to="{name: 'login'}"><el-button class="icon log" type="info" icon="el-icon-user"></el-button></router-link>
					</div>
				</div>
			</div>
		</header>
		<div class="dotter"></div>
	</div>
</template>

<script>
export default {
  name: 'header',

  data() {
    return {
        upHere: false,
        shows: false
    }
  },
  methods: {
    onSCroll () {
       if (window.scrollY > 10){
          this.$refs.divH.classList.add('flex');
          this.$refs.title.style.fontSize = "2em";
          this.$refs.head.classList.add("fix");
       }
       else{
          this.$refs.divH.classList.remove('flex');
          this.$refs.title.style.fontSize = "4em";
          this.$refs.head.classList.remove("fix");
       }
    }
  },
  created () {
    window.addEventListener('scroll', this.onSCroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.onSCroll);
  }
};
</script>

<style lang="css" scoped>
	.icon{
		font-size: 1.2em;
		padding: 10px;
	}
	.log{
		margin-left: 10px
	}
	header{
		font-family:"Comic Sans MS", cursive, sans-serif;
		width: calc(100% - 20px);
		position: absolute;
		top: 2%;
		left: 50%;
		transform: translateX(-50%);
		background: #fff;
		padding: 10px;
		z-index: 9
	}
	.header{
		width: calc(80% + 20px);
		margin: 0px auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.title{
		display: flex;
		align-items: center;
	}
	.title div{
		position: relative;
		color: rgba(0,0,0,0.6);
		cursor: pointer;
	}
	.logo{
		margin-right: 20px;
	}
	.logo span{
		font-size: 4em;
		transition: .5s
	}
	.searchD{
		position: relative;
	}
	.sDiv{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 50%;
	}
	.searchD input{
		outline: none;
		width: 45vw;
		border: 1px solid silver;
		border-radius: 5px;
		padding: 12px 10px;
	}
	.close{
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
	}
	.dotter{
		width: calc(80% + 15px);
		margin:20px auto;
		margin-top: 15%;
		border-top: 5px dotted silver;
	}
	.flex{
		display: flex;
	}
	.flex div{
		margin-right: 10px;
	}
	.fix{
		position: fixed;
		top: 0;
		padding: 5px 10px;
		border-bottom: 1px solid silver;
	}
</style>
