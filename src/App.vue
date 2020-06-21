<template>
  <div id="app">
    <Header></Header>
    <keep-alive>
      <router-view/>
    </keep-alive>
      <Side></Side>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./components/header"
  import Footer from "./components/footer"
  import Side from "./components/side"
  export default {
      name:"App",
      components:{
        Header,
        Footer,
        Side
      },
      mounted() {
        this.$store.commit("setformflag",true);
      }
  }
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
</style>
