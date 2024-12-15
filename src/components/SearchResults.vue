<script setup>
import ResultItem from './ResultItem.vue'
import { searchState } from '@/state'
</script>
<template>
  <div class="result-container">
    <ResultItem v-for="item in searchState.matching" :result="item.name" v-bind:key="item.name" />
  </div>
</template>

<style>
.result-container {
  background-color: #daf3ff;
  width: 100%;
  border-radius: 5px;
}
</style>
