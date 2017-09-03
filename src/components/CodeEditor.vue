<template>
  <div class="codeEditor">
    <Highlight class="code" language="cpp">{{ codeText }}</Highlight>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import Highlight from 'vue-highlight-component'
import $ from 'jquery'
import 'highlight.js/styles/monokai-sublime.css'

var defaultCodeText = `#include <bits/stdc++.h>
using namespace std;
#define pb push_back
const int INF = 1<<29;
typedef long long ll;
typedef vector<int> vi;
typedef pair<int, int> ii;
typedef vector<ii> vii;

// Global variables here...

void input() {

}

void output() {

}

/* BEGIN SOLUTION */

void solve() {

}

/* END SOLUTION */

int main() {
    return 0;
}`

hljs.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'))

export default {
  name: 'codeEditor',
  props: {
    algorithm: {
      type: String,
      default: 'None'
    }
  },
  components: {
    Highlight
  },
  data () {
    return {
      codeText: defaultCodeText,
      baseURL: 'https://raw.githubusercontent.com/petr-lee/CompetitiveProgrammingAlgorithms/master/',
      links: {
        'C++': 'main_lite.cpp',
        'Java': 'Main.java',
        'Union Find': 'UnionFind.cpp',
        'Segment Tree': 'SegmentTree.cpp',
        'Fenwick Tree': 'FenwickTree.cpp',
        'Max 1D Range Sum': 'Max1DSum.cpp',
        'Max 2D Range Sum': 'Max2DSum.cpp',
        'Longest Increasing Subsequence': 'LIS.cpp',
        'Knapsack': 'Knapsack.cpp',
        'Coin Change': 'CoinChange.cpp',
        'Breadth First Search': 'BFS.cpp',
        'Depth First Search': 'DFS.cpp',
        'Dijkstra\'s SP': 'Dijkstra.cpp',
        'Bellman-Ford\'s SP': 'Bellman.cpp',
        'Warshall\'s APSP': 'Warshall.cpp',
        'Sieve\'s Prime': 'Sieve.cpp',
        'KMP Algorithm': 'kmp.java'
      }
    }
  },
  watch: {
    algorithm: function (value) {
      $.get(this.baseURL + this.links[value], (data) => {
        this.codeText = data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.codeEditor {
  width: 100%;
}

.code {
  text-align: left;
  font-family: 'Source Code Pro';
  padding: 0;
  margin: 0;
  border: 0;

  span {
    font-family: 'Source Code Pro';
  }

  code {
    border-radius: 0;
  }
}
</style>