<script setup>
import { VueFinalModal } from 'vue-final-modal'
</script>

<template>
  <VueFinalModal>
    <div class="overlayContainer">
      <p>Maybe this'll work</p>
    </div>
  </VueFinalModal>
</template>

<style scoped>
.overlayContainer {
  background-color: white; /* update to white */
  padding: 5%;
  margin: 5%;
  border-radius: 20px;
}

.p {
  color: black;
}
</style>
