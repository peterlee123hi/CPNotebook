<template>
  <div class="selector">
    <h1>{{ selected }}</h1>
  </div>
</template>

<script>
export default {
  name: 'selector',
  data () {
    return {
      selected: 'None',
      buttons: [
        'Templates',
        'Data Structures',
        'Dynamic Programming',
        'Graph Algorithms',
        'Math',
        'String Processing'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.selector {
  background-color: #ddd;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
