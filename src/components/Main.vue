<template>
  <div class="main">
    <h1>{{ title }}</h1>
    <selector></selector>
  </div>
</template>

<script>
import Selector from './Selector.vue'
export default {
  name: 'main',
  components: { Selector },
  data () {
    return {
      title: 'Competitive Programming Notebook'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
</style>
