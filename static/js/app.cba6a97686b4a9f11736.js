webpackJsonp([1],{"+T6t":function(t,e,n){"use strict";function a(t){n("kP5X")}var i=n("lRRi"),s=n("27en"),r=n("VU/8"),c=a,o=r(i.a,s.a,c,null,null);e.a=o.exports},"27en":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"codeEditor"},[n("Highlight",{staticClass:"code",attrs:{language:"cpp"}},[t._v(t._s(t.codeText))])],1)},i=[],s={render:a,staticRenderFns:i};e.a=s},"5inX":function(t,e){},"6F5g":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"code_background"},[n("div",{staticClass:"overlay"}),t._v(" "),n("div",{staticClass:"banner_heading"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("h2",[t._v(t._s(t.subtitle))])])]),t._v(" "),n("selector")],1)},i=[],s={render:a,staticRenderFns:i};e.a=s},"7x9R":function(t,e){},"9GlQ":function(t,e,n){"use strict";function a(t){n("7x9R")}var i=n("YrcK"),s=n("TQh6"),r=n("VU/8"),c=a,o=r(i.a,s.a,c,"data-v-2acb4594",null);e.a=o.exports},"9WVN":function(t,e){},EUsU:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s={render:a,staticRenderFns:i};e.a=s},FyhI:function(t,e){},"Jov+":function(t,e,n){"use strict";function a(t){n("yNYS")}var i=n("TTp5"),s=n("hC1h"),r=n("VU/8"),c=a,o=r(i.a,s.a,c,"data-v-41368e67",null);e.a=o.exports},M93x:function(t,e,n){"use strict";function a(t){n("9WVN")}var i=n("xJD8"),s=n("EUsU"),r=n("VU/8"),c=a,o=r(i.a,s.a,c,null,null);e.a=o.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("M93x"),s=n("YaEn");a.a.config.productionTip=!1,new a.a({el:"#app",router:s.a,template:"<App/>",components:{App:i.a}})},TJvI:function(t,e){},TQh6:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"selector"},[n("div",{staticClass:"selector-buttons"},t._l(t.buttons,function(e){return n("input",{staticClass:"primary category",class:{selected:t.isSelected(e)},attrs:{type:"button",value:e},on:{click:t.select}})})),t._v(" "),n("code-view",{attrs:{category:t.selected}})],1)},i=[],s={render:a,staticRenderFns:i};e.a=s},TTp5:function(t,e,n){"use strict";var a=n("+T6t");e.a={name:"codeView",components:{CodeEditor:a.a},props:{category:{type:String,default:"Templates"}},data:function(){return{selected:"C++",isSelected:function(t){return this.selected===t},algorithms:{Templates:["C++","Java"],"Data Structures":["Union Find","Segment Tree","Fenwick Tree"],"Dynamic Programming":["Max 1D Range Sum","Max 2D Range Sum","Longest Increasing Subsequence","Knapsack","Coin Change"],"Graph Algorithms":["Breadth First Search","Depth First Search","Dijkstra' SP","Bellman-Ford's SP","Warshall's APSP"],Math:["Sieve's Prime"],"String Processing":["KMP Algorithm"]}}},methods:{select:function(t){this.selected=t.target.value}}}},Uhku:function(t,e,n){"use strict";var a=n("9GlQ");e.a={name:"main",components:{Selector:a.a},data:function(){return{title:"Competitive Programming Notebook",subtitle:"Algorithms for the ACM-ICPC"}}}},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),i=n("/ocq"),s=n("s6+2");a.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Main",component:s.a}]})},YrcK:function(t,e,n){"use strict";var a=n("Jov+");e.a={name:"selector",components:{CodeView:a.a},data:function(){return{selected:"Templates",isSelected:function(t){return this.selected===t},buttons:["Templates","Data Structures","Dynamic Programming","Graph Algorithms","Math","String Processing"],algorithms:{Templates:["C++","Java"],"Data Structures":["Union Find","Segment Tree","Fenwick Tree"],"Dynamic Programming":["Max 1D Range Sum","Max 2D Range Sum","Longest Increasing Subsequence","Knapsack","Coin Change"],"Graph Algorithms":["Breadth First Search","Depth First Search","Dijkstra' SP","Bellman-Ford's SP","Warshall's APSP"],Math:["Sieve's Prime Algorithm"],"String Processing":["KMP Algorithm"]}}},methods:{select:function(t){this.selected=t.target.value}}}},hC1h:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"codeView"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 col-md-3 algorithms"},t._l(t.algorithms[t.category],function(e){return n("input",{staticClass:"algorithm",class:{selected:t.isSelected(e)},attrs:{type:"button",value:e},on:{click:t.select}})})),t._v(" "),n("div",{staticClass:"col-sm-12 col-md-9 codeEditorContainer"},[n("codeEditor",{attrs:{algorithm:t.selected}})],1)])])},i=[],s={render:a,staticRenderFns:i};e.a=s},kP5X:function(t,e){},l2Nk:function(t,e){},lRRi:function(t,e,n){"use strict";var a=n("V8mf"),i=n.n(a),s=n("LPwP"),r=n.n(s),c=n("7t+N"),o=n.n(c),l=n("TJvI");n.n(l);i.a.registerLanguage("cpp",n("fay8")),e.a={name:"codeEditor",props:{algorithm:{type:String,default:"None"}},components:{Highlight:r.a},data:function(){return{codeText:"#include <bits/stdc++.h>\nusing namespace std;\n#define pb push_back\nconst int INF = 1<<29;\ntypedef long long ll;\ntypedef vector<int> vi;\ntypedef pair<int, int> ii;\ntypedef vector<ii> vii;\n\n// Global variables here...\n\nvoid input() {\n\n}\n\nvoid output() {\n\n}\n\n/* BEGIN SOLUTION */\n\nvoid solve() {\n\n}\n\n/* END SOLUTION */\n\nint main() {\n    return 0;\n}",baseURL:"https://raw.githubusercontent.com/petr-lee/CompetitiveProgrammingAlgorithms/master/",links:{"C++":"main_lite.cpp",Java:"Main.java","Union Find":"UnionFind.cpp","Segment Tree":"SegmentTree.cpp","Fenwick Tree":"FenwickTree.cpp","Max 1D Range Sum":"Max1DSum.cpp","Max 2D Range Sum":"Max2DSum.cpp","Longest Increasing Subsequence":"LIS.cpp",Knapsack:"Knapsack.cpp","Coin Change":"CoinChange.cpp","Breadth First Search":"BFS.cpp","Depth First Search":"DFS.cpp","Dijkstra's SP":"Dijkstra.cpp","Bellman-Ford's SP":"Bellman.cpp","Warshall's APSP":"Warshall.cpp","Sieve's Prime":"Sieve.cpp","KMP Algorithm":"kmp.java"}}},watch:{algorithm:function(t){var e=this;o.a.get(this.baseURL+this.links[t],function(t){e.codeText=t})}}}},"s6+2":function(t,e,n){"use strict";function a(t){n("FyhI")}var i=n("Uhku"),s=n("6F5g"),r=n("VU/8"),c=a,o=r(i.a,s.a,c,"data-v-0d149e24",null);e.a=o.exports},xJD8:function(t,e,n){"use strict";var a=n("l2Nk"),i=(n.n(a),n("5inX"));n.n(i);e.a={name:"app"}},yNYS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cba6a97686b4a9f11736.js.map