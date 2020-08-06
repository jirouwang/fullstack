<template>
  <div class="home">
    <div class="topbar bg-black py-2 px-4">
      456
    </div>
    <div class="router">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <!-- <router-view :key="$route.path"/> -->
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    
  }
}
</script>

<style scoped>
  .router {
    width: 50vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
</style>