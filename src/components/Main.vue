<template>
  <div class="main">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'main',
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
