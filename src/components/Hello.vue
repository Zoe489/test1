<template>
  <div class="hello">
    <input type="text" class="form-control" id="inputusername" placeholder="username" v-model="username">
    <input type="password" class="form-control" id="inputpassword" placeholder="password" v-model="password">
    <button type="submit" class="btn btn-default" v-on:click="login">login</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      // msg: 'Welcome to Your Vue.js App',
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log('this.$http', this.$http);
      this.$http.get('/api/login/getUser')
      .then((response) => {
        console.log(response);
        const params = {
          username: this.username,
          password: this.password,
        };
        return this.$http.post('/api/login/createUser', params);
      })
      .then((response) => {
        console.log(response);
      })
      .catch((reject) => {
        console.log(reject);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
