<template>
  <div class="main">
    <div class="code_background">
      <div class="overlay"></div>
      <div class="banner_heading">
        <h1>{{ title }}</h1>
      </div>
    </div>
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
h1, h2, p {
  font: 'Source Sans Pro';
  font-weight: normal;
}

.code_background{
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  padding: 50px 0px;
  background-image: url('../assets/code_background.jpg');
  background-size: cover;

  color: white;

  .banner_heading{
    position: relative;
    padding: 0 10px;
  }
}

.overlay {
  background-color: black;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
