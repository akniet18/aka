<template>
	<div class="wrapper">

    <footer>
      © Almaty 2020
    </footer>
  

    <!-- <div class="footer">
      <div class="col1" v-if="token">
        <div class="title">
          Account
        </div>
        <div>
          <router-link :to="{name: 'profile', params: {uid: uid}}">Profile</router-link>
        </div>
        <div>
          <router-link :to="{name: 'article_create'}">Create post</router-link>
        </div>  
      </div>
      <div class="col1" v-else>
        <div class="title">
          Account
        </div>
        <div>
          <router-link :to="{name: 'login'}">Login</router-link>
        </div>
        <div>
          <router-link :to="{name: 'reg'}">login</router-link>
        </div>  
      </div>

      <div class="col2">
        <div class="title">
          Sections
        </div>
        <div><a href="">News</a></div>
        <div><a href="">Article</a></div>
      </div>
      <div class="col3">
        <div class="title">
          Title
        </div>
        <div></div>
        <div></div>
      </div>
    </div> -->
		
	</div>
</template>

<script>
export default {
  data() {
    return {
      token: sessionStorage.getItem('token'),
    }
  },
  methods: {
    
  },
};
</script>

<style lang="css" scoped>
footer{
  color: #e06149;
  padding: 20px 0;
}
.wrapper{
  width: 100%;
  height: auto;
  background: #343434;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer{
  width: 80%;
  margin: 20px auto ;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  justify-content: space-between;
  grid-gap: 10px;
  align-items: center;
  color: #fff;
  padding: 20px 0 30px 0;
  margin-bottom: 0;
}
.title{
  border-bottom: 2px solid #e06149;
}
.footer a{
  color: #fff;
  text-decoration: none;
}
.footer a:hover{
  text-decoration: underline;
}
.footer div div{
  padding: 10px;
}
@media (max-width: 760px){
  
}
@media (max-width: 480px){
  .footer{
    width: 95%;
  }
  .footer div div{
    font-size: 0.9em
  }
}
</style>
