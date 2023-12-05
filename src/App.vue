<template>
<Narbar/>
<Heaader/>
<router-view />
<FooterVue/>
</template>


<script>
import Narbar from './components/Narbar.vue';
import Heaader from './components/Header.vue';
import FooterVue from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Narbar,Heaader,FooterVue
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
