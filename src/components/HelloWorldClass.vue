<template>
  <div class="hello">
    <h1 v-if="message">{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from "vue-property-decorator";
import { ITestService } from "@/services";

@Component
export default class HelloWorldClass extends Vue {
  @Inject("testService")
  readonly testService!: ITestService | undefined;

  get message(): string | null {
    return this.testService ? this.testService.hello() : null;
  }
}
</script>
