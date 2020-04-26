<template>
	<div class="wrapper">
		<div class="article">
            <div class="text">
                <div class="date">{{ date | dataform }}</div>
                <router-link class="title" :to="{name: 'article', params: { id: id }}" tag="div">{{ title }}</router-link>
                <div class="tags">
                    <span v-for="tag, i in tags.split(' ')" v-bind:key="i">
                        <router-link class="title" :to="{name: 'tag', params: {tags: tag}}" tag="a">{{tag}} </router-link>
                    </span>
                </div>
                <div class="content" v-html="text">
                    
                </div>
            </div>
        </div>
        <div class="artInfo">
            <div class="like">
                <el-button v-if="(token) && (favorite.indexOf(parseInt(uid)) != -1)" class="ic" icon="el-icon-star-off" type="primary" size="mini" @click="addFav(id)">
                    {{favorite.length}}
                </el-button>
                <el-button v-else-if="(token) && (favorite.indexOf(parseInt(uid)) == -1)" class="ic" icon="el-icon-star-off" type="primary" size="mini" plain  @click="addFav(id)">
                    {{favorite.length}}
                </el-button>
                <el-button v-else class="ic" icon="el-icon-star-off" type="primary" size="mini" disabled >
                    {{favorite.length}}
                </el-button>
            </div>
            <div class="count">
                <el-button class="ic" icon="el-icon-s-comment" type="warning" size="mini" plain>
                    <router-link :to="'article/'+id+'#comment'" tag="span">{{ comment.length }}</router-link>
                </el-button>
            </div>
        </div>
		
	</div>
</template>


<script>
export default {
  name: 'art',
  props: [
      "id", "title", "date", "text", "tags", "favorite", "comment"
  ],

  data() {
    return {
      islike: false,
	  uid: sessionStorage.getItem('uid'),
      token: sessionStorage.getItem('token'),
    };
  },
  created() {
  },
  methods: {
	addFav(id) {
		let headers = {
        	'Authorization': 'Token ' + sessionStorage.getItem('token')
    	}
    	let data = {
    		'id': id
    	}
    	this.$http.post('article/add/', data, {headers})
    	  .then(r => {
    	  	return r.json()
    	  })
    	  .then(r => {
			console.log(r)
                if (r.status == "post add fav"){
                    this.favorite.push(this.uid)
                }else{
                    const index = this.favorite.indexOf(this.uid);
                    if (index > -1) {
                        this.favorite.splice(index, 1)
                    }
                    
                }
                console.log(this.favorite)
    	  }, r => {
    	  	console.log(r)
    	  })
	}    
  }
};
</script>


<style lang="css" scoped>
	.wrapper{
		margin: 10px 0;
		width: 100%;
	}
	.article{
		display: flex;
		/*justify-content: center;*/
		flex-wrap: wrap;
		/*align-items: center;*/
		color: rgba(0,0,0,0.5);

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
	.content{
		height: auto;
		max-height: 500px;
		/* display: block;*/
		overflow: hidden;
	}
	.content >>> *{
		width: 100%;
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