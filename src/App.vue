<template>
  <the-header> </the-header>
    <div id="app">
      <router-view> </router-view> 
    </div>
  <the-footer> </the-footer>
</template>

<script>
// Data
import {articles} from './data/articles'

import TheHeader from './components/header/TheHeader.vue'
import TheFooter from './components/footer/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  },
  provide: {
    allArticles: articles
  }
}
</script>


<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
}

</style>
