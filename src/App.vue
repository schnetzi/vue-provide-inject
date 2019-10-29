<template>
  <div id="app">
    <HelloWorldBasic />
    <HelloWorldClass />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import { testService } from "@/services";
import HelloWorldBasic from "./components/HelloWorldBasic.vue";
import HelloWorldClass from "./components/HelloWorldClass.vue";

@Component({
  components: {
    HelloWorldBasic,
    HelloWorldClass
  }
})
export default class App extends Vue {
  @Provide("testService")
  orionService = testService();
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
