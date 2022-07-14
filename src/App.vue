<template>
  <div id="app">
    <welcome />
  </div>
</template>

<script>
import Welcome from './views/Welcome.vue'

export default {
  components: { Welcome },
  name: 'App'
}
</script>

<style>
#app{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
