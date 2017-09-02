<template>
  <div class="selector">
    <input v-for="button in buttons" type="button" v-bind:class="{ selected: isSelected(button) }" class="primary category"  v-bind:value="button" v-on:click="select" />
    <p>{{ selected }}</p>
  </div>
</template>

<script>
export default {
  name: 'selector',
  data () {
    return {
      selected: 'None',
      isSelected: function (button) {
        return this.selected === button
      },
      buttons: [
        'Templates',
        'Data Structures',
        'Dynamic Programming',
        'Graph Algorithms',
        'Math',
        'String Processing'
      ],
      algorithms: {
        'Templates': ['C++', 'Java'],
        'Data Structures': ['Union Find', 'Segment Tree', 'Fenwick Tree'],
        'Dynamic Programming': ['Max 1D Range Sum', 'Max 2D Range Sum', 'Longest Increasing Subsequence', 'Knapsack', 'Coin Change'],
        'Graph Algorithms': ['Breadth First Search', 'Depth First Search', 'Dijkstra\' SP', 'Bellman-Ford\'s SP', 'Warshall\'s APSP'],
        'Math': ['Sieve\'s Prime Algorithm'],
        'String Processing': ['KMP Algorithm']
      }
    }
  },
  methods: {
    select: function (event) {
      this.selected = event.target.value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.selector {
  background-color: #eee;
  padding-top: 10px;
  padding-bottom: 10px;
}

.category {
  position: relative;
  top: 0;
  padding: 12px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.2rem;
  font-weight: 900;
  transition: top 0.5s, background-color 0.5s;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.category:hover {
  top: -4px;
}
</style>
