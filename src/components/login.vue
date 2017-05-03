<template lang="html">
  <div>
    <input type="text" class="form-control" id="inputusername" placeholder="username" v-model="username">
    <input type="password" class="form-control" id="inputpassword" placeholder="password" v-model="password">
    <button type="submit" class="btn btn-default" v-on:click="login">login</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    login: function() {
      this.$http.get('/api/login/getUsername')
      .then((response) => {
        console.log(response);
        let params = {
          username: this.username,
          password: this.password
        };
        return this.$http.post('/api/login/createUser', params);
      })
      .then((response) => {
        console.log(response)
      })
      .catch((reject) => {
        console.log(reject)
      })
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
