<template>
  <div id="app">
    <div id="nav">
      <a-button @click="add" id="add" shape="circle" size="large">+添加</a-button>
      <router-link to="/">noob-list</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>

// import axios from "axios";
export default {
  name: "app",
  components: {
    
  },
  created: function() {
    this.$store.dispatch("getPackage");
  },
  methods:{
    add:function(){
      this.$router.push("/add")
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#add{
    background-color: #3d03ff; 
font-size: 10px;
}
</style>
