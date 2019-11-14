<template>
	<div class="wrapper">
		<header ref="head">
			<div class="header">
				<div class="l_col">
					<i class="el-icon-s-unfold sicon" v-if="hide" @click="showMenu"></i>
					<i class="el-icon-s-fold sicon" v-else @click="showMenu"></i>
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
						
						<el-dropdown v-if="token">
							<el-button class="icon log el-dropdown-link" type="primary" icon="el-icon-user"></el-button>
							
							<el-dropdown-menu class="dropdownS" slot="dropdown">
						        <el-dropdown-item icon="el-icon-user-solid">
						        	<router-link :to="{name: 'login'}">login</router-link>
								</el-dropdown-item>
						        <el-dropdown-item icon="el-icon-user">
						        	<router-link :to="{name: 'reg'}">Register</router-link>
						        </el-dropdown-item>
						    </el-dropdown-menu>
						</el-dropdown>
						
						<el-dropdown v-else>
							<el-button class="icon log el-dropdown-link" type="primary" icon="el-icon-user"></el-button>
							
							<el-dropdown-menu class="dropdownS" slot="dropdown">
						        <el-dropdown-item icon="el-icon-user-solid">
						        	<router-link :to="{name: 'login'}">login</router-link>
								</el-dropdown-item>
						        <el-dropdown-item icon="el-icon-user">
						        	<router-link :to="{name: 'reg'}">Register</router-link>
						        </el-dropdown-item>
						    </el-dropdown-menu>
						</el-dropdown>
						
					</div>
				</div>
			</div>
			<div class="menu" ref="menu">
				<el-menu
			      default-active="2"
			      class="el-menu-vertical-demo"
			      @open="handleOpen"
			      @close="handleClose"
			      background-color="#343434"
			      text-color="#fff">
			      <el-submenu index="1">
			        <template slot="title">
			          <i class="el-icon-location"></i>
			          <span>Navigator One</span>
			        </template>
			        <el-menu-item-group title="Group One">
			          <el-menu-item index="1-1">item one</el-menu-item>
			          <el-menu-item index="1-2">item one</el-menu-item>
			        </el-menu-item-group>
			        <el-menu-item-group title="Group Two">
			          <el-menu-item index="1-3">item three</el-menu-item>
			        </el-menu-item-group>
			        <el-submenu index="1-4">
			          <template slot="title">item four</template>
			          <el-menu-item index="1-4-1">item one</el-menu-item>
			        </el-submenu>
			      </el-submenu>
			      <el-menu-item index="2">
			        <i class="el-icon-menu"></i>
			        <span>Navigator Two</span>
			      </el-menu-item>
			      <el-menu-item index="3" disabled>
			        <i class="el-icon-document"></i>
			        <span>Navigator Three</span>
			      </el-menu-item>
			      <el-menu-item index="4">
			        <i class="el-icon-setting"></i>
			        <span>Navigator Four</span>
			      </el-menu-item>
			    </el-menu>
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
        token: sessionStorage.getItem('token'),
        hide: true
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
    },
    showMenu(){
    	this.hide = !this.hide
    	this.$refs.menu.classList.toggle('showMenu')
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
	.dropdownS a{
		text-decoration: none;
		color: #409EFF;
	}
	.sicon{
		font-size: 2em;
		color: #e06149;
	}
	.log{
		padding: 12.5px;
		background: #e06149
	}
	.l_col{
		display: none;
	}
	header{
		/*font-family:"Comic Sans MS", cursive, sans-serif;*/
		width: 100%;
		position: fixed;
		top: 0%;
		left: 50%;
		transform: translateX(-50%);
		background: #343434;
		padding: 1px;
		z-index: 9
	}
	.menu{
		position: absolute;
		top: 100%;
		left: -100%;
		height: 100%;
		width: 100%;
		transition: .2s;
		z-index: 99;
	}
	.showMenu{
		left: 0;
	}
	.header{
		width: 80%;
		margin: 0px auto;
		padding: 10px;
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
		display: flex;
		align-items: center;
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
		padding: 13px 10px;
		margin-right: 5px
	}
	.searchI{
		margin-top: -1px;
		color: #e06149;
		margin-right: 10px;
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
		/*top: 0;*/
		/*padding: 5px 10px;*/
		border-bottom: 1px solid silver;
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
			width: 90%
		}
		.searchI{
			display: none
		}
		.logo span{
			font-size: 2em
		}
		.l_col{
			display: block;
		}
		.log{
			padding: 10px;
			background: #e06149
		}
	}
</style>
