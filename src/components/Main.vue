<template>
  <div class="main">
    <div class="full_screen">
      <img src="../assets/code_background.jpg"></img>
      <div class="overlay"></div>
    </div>
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

.full_screen{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.overlay{
  background-color: black;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
