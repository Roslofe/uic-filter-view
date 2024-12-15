<script setup>
const props = defineProps(['result'])
const name = props.result
</script>

<template>
  <button class="item-container">
    <p>{{ name }}</p>
  </button>
</template>

<style>
.item-container {
  box-sizing: border-box;
  background-color: #e1cea9;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  width: 95%;
  max-width: 100%;
  text-align: start;
  transition: background-color 0.2s; /* some indication that the element has been pressed */
}

.item-container:active {
  background-color: #aca28c;
}
</style>
