<template>
	<div class="wrapper">
    <div class="footer">
      <div class="col1">
        <div class="title">
          Account
        </div>
        <div>
          <a href="">News</a>
        </div>
        <div>
          <a href="">Register</a>
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
    </div>
		
	</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    
  },
};
</script>

<style lang="css" scoped>
.wrapper{
  width: 100%;
  height: 100%;
  background: #343434;
  
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
</style>
