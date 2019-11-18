<template>
  <div id="app">
        <router-view></router-view>
        <TestApp/>
  </div>
</template>


<script>
import TestApp from './components/test'
export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  components: {
  	TestApp
  },
};
</script>


<style scoped>

</style>