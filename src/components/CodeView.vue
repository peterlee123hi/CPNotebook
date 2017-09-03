<template>
  <div class="codeView">
    <div class="row">
      <div class="col-sm-12 col-md-3 algorithms">
        <input v-for="algorithm in algorithms[category]" type="button" class="algorithm" v-bind:class="{ selected: isSelected(algorithm) }"  v-bind:value="algorithm" v-on:click="select" />
      </div>
      <div class="col-sm-12 col-md-9 codeEditorContainer">
        <codeEditor v-bind:algorithm="selected"></codeEditor>
      </div>
    </div>
  </div>
</template>

<script>
import CodeEditor from './CodeEditor.vue'
export default {
  name: 'codeView',
  components: { CodeEditor },
  props: {
    category: {
      type: String,
      default: 'Templates'
    }
  },
  data () {
    return {
      selected: 'C++',
      isSelected: function (algorithm) {
        return this.selected === algorithm
      },
      algorithms: {
        'Templates': ['C++', 'Java'],
        'Data Structures': ['Union Find', 'Segment Tree', 'Fenwick Tree'],
        'Dynamic Programming': ['Max 1D Range Sum', 'Max 2D Range Sum', 'Longest Increasing Subsequence', 'Knapsack', 'Coin Change'],
        'Graph Algorithms': ['Breadth First Search', 'Depth First Search', 'Dijkstra\' SP', 'Bellman-Ford\'s SP', 'Warshall\'s APSP'],
        'Math': ['Sieve\'s Prime'],
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
.algorithms,
.codeEditorContainer {
  margin: 0;
  padding: 0;
}

.algorithms {
  padding: 1em;
}

.algorithm {
  width: 100%;
  margin: 0 0 0.5em 0;

  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.2rem;
  font-weight: 300;

  outline: none;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  transition: top 0.25s, background-color 0.2s;
}

.selected {
  background-color: #283593 !important;
  color: white;
  font-weight: 400;
}

.code-editor {
  text-align: left;
}
</style>
