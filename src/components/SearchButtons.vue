<script setup>
const props = defineProps(['clearFunction', 'searchFunction'])
const clearFunction = props.clearFunction
const searchFunction = props.searchFunction
</script>

<template>
  <div class="searchbuttons-container">
    <button class="clearbutton" @click="clearFunction">Clear</button>
    <button class="searchbutton" @click="searchFunction">Search</button>
  </div>
</template>

<style>
.clearbutton {
  border: 2px solid #688aa8;
  border-radius: 5px;
  padding: 2px;
}

.searchbutton {
  background-color: #688aa8;
  border-radius: 5px;
  border: 2px solid #4e6172;
  color: #daf3ff;
}

.searchbuttons-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 5px;
}
</style>
