<template>
	<div class="wrapper">
		<header ref="head">
			<div class="header">
				<div class="l_col">
					<i class="el-icon-s-unfold sicon"></i>
					<i class="el-icon-s-fold sicon showM"></i>
				</div>

				<div class="title">
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
						<el-button class="icon searchI" type="warning" @click="shows=!shows" icon="el-icon-search" plain></el-button>
						
						<router-link v-if="token">
							
						</router-link>
						<router-link :to="{name: 'login'}" v-else>
							<el-button class="icon log el-dropdown-link" type="primary" icon="el-icon-user"></el-button>
						</router-link>
						
					</div>
				</div>
			</div>
		</header>
		<div class="dotter"></div>
	</div>
</template>

<script>
export default {
  data() {
    return {
        upHere: false,
        shows: false,
        token: sessionStorage.getItem('token')
    }
  },
  methods: {
    onSCroll () {
       if (window.scrollY > 10){
          this.$refs.divH.classList.add('flex');
          this.$refs.title.classList.add('logoLFs');
          this.$refs.head.classList.add("fix");
       }
       else{
          this.$refs.divH.classList.remove('flex');
          this.$refs.title.classList.remove('logoLFs');
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
	.sicon{
		font-size: 2em
	}
	.log{
		margin-left: 10px
	}
	.l_col{
		display: none;
	}
	header{
		font-family:"Comic Sans MS", cursive, sans-serif;
		width: calc(100% - 20px);
		position: absolute;
		top: 0%;
		left: 50%;
		transform: translateX(-50%);
		background: #343434;
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
		color: #e06149;
		cursor: pointer;
	}
	.divH div{
		color: #fff;
	}
	.logo{
		margin-right: 20px;
	}
	.logo span{
		font-size: 3.5em;
		transition: .5s
	}
	.logoLFs{
		font-size: 2em!important
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
	.searchI{
		color: #e06149;
	}
	.log{
		background: #e06149
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
		margin-top: 12%;
		/*border-top: 5px dotted silver;*/
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
	.showM{
		display: none;
	}
	@media (max-width: 760px){
		.dotter{
			margin-top: 20%;
		}
	}
	@media (max-width: 480px){
		.dotter{
			margin-top: 35%;
			border: none
		}
		.divH{
			display: none;
		}
		.header{
			width: 98%
		}
		.searchI{
			display: none
		}
		.logo span{
			font-size: 3em
		}
		.l_col{
			display: block;
		}
	}
</style>
