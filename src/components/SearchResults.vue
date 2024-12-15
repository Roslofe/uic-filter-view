<script setup>
import ResultItem from './ResultItem.vue'

const props = defineProps(['data'])
</script>
<template>
  <ResultItem v-for="item in props.data" :result="item" v-bind:key="item.name" />
</template>
