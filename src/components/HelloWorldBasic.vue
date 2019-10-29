<template>
  <div class="hello">
    <h1 v-if="message">{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ITestService } from "@/services";

export default Vue.extend({
  name: "HelloWorldBasic" as string,
  inject: ["testService"],

  computed: {
    message(): string | null {
      return this.testService ? this.testService.hello() : null;
    }
  }
});
</script>
