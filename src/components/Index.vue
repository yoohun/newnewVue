<template>
  <div id="indexOut">
    <sideBar></sideBar>
    <Header></Header>  
    <div id="content-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sideBar from "./sideBar";
import Header from "./commonPage/Header";
export default {
  components: {
    sideBar,
    Header
  }
};
</script>

<style>
#indexOut{
  width: 100%;
  height: 100%;
}
</style>