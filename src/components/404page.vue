<template>
  <div>
    <headerApp></headerApp>
    <div id="app">
      <img src=".././assets/404.png" alt="" >
    </div>
    <FooterApp></FooterApp>
  </div>
</template>


<script>
import HeaderApp from './header'
import FooterApp from './footer'
export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    HeaderApp,
    FooterApp
  },
};
</script>


<style scoped>
#app{
  width: 100%;
  min-height: 65vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app img{
  width: 65%;

}
</style>