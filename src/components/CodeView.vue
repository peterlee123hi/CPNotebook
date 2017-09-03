<template>
  <div class="codeView">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <input v-for="algorithm in algorithms[category]" type="button" class="algorithm" v-bind:class="{ selected: isSelected(algorithm) }"  v-bind:value="algorithm" v-on:click="select" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'codeView',
  props: {
    category: {
      type: String,
      default: 'None'
    }
  },
  data () {
    return {
      selected: 'None',
      isSelected: function (algorithm) {
        return this.selected === algorithm
      },
      algorithms: {
        'None': [],
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
.col-md-3{
  margin-top: 20px;
  border-right: 1px solid #BBB;
  padding: 0 30px;
}

.algorithm {
  width: 100%;
  padding: 12px 20px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  transition: top 0.25s, background-color 0.2s;
  outline: none;
  background-color: #FFF;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

.selected {
  background-color: #283593 !important;
  color: white;
  font-weight: 400;
}
</style>
