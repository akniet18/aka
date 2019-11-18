<template>
  <div class="container">
    <div>
      <button @click="create()">phone</button>
      <input type="text" v-model="code">
      <button @click="register()">register</button>
    </div>
    <div>
      <input type="file" id="file">
      <input type="file" id="file2">
      <button @click="change()">change</button>
    </div>
    <div>
      <button  @click="getUser()">get user</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: ''
    }
  },
  created(){
    let socket = new WebSocket('wss://delprod.herokuapp.com/maps/order/');
    socket.onopen = function(e) {
      console.log(e)
    };
    socket.onmessage = function(event) {
      console.log(`[message] Данные получены с сервера: ${event.data}`);
    };
    socket.onerror = function(error) {
      console.log(`[error] ${error.message}`);
    };
  },
  methods: {
    create(){
      let data = {
        'phone': '77473513102'
      }
      this.$http.post('http://localhost:8000/users/phone/', data)
      .then(res => {
        console.log(res)
      })
      .catch(res=>{
        console.log(res)
      })
    },
    register(){
      let data = {
        'phone': '77473513102',
        'code': this.code
      }
      console.log(data)
      this.$http.post('http://localhost:8000/users/register/', data)
      .then(res => {
        console.log(res)
      })
      .catch(res=>{
        console.log(res)
      })
    },
    change(){
      let data = new FormData()
      let f = document.querySelector('#file')
      let f2 = document.querySelector('#file')
      data.append('avatar', f.files[0])
      data.append('passport', f2.files[0])
      data.append('gender', 0)
      data.append('nickname', 'akniet18')
      console.log(data)
      let headers = {
        'Authorization': 'Token fe3843fdfb76a52f63f19bb06798d62b7a8d10ea',
        'Content-Type': 'multipart/form-data',
      }
      this.$http.put('http://delprod.herokuapp.com/users/2/', data, {headers})
      .then(res => {
        console.log(res)
      })
      .catch(res=>{
        console.log(res)
      })
    },
    getUser(){
      let headers = {
        'Authorization': 'Token fe3843fdfb76a52f63f19bb06798d62b7a8d10ea',
      }
      this.$http.get('http://delprod.herokuapp.com/users/change/', {headers})
      .then(res => {
        console.log(res)
      })
      .catch(res=>{
        console.log(res)
      })
    }
  }
};
</script>

<style>

</style>
