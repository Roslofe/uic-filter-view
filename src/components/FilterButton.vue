<script setup>
import { ModalsContainer, useModal } from 'vue-final-modal'
import FilterView from './FilterView.vue'
import SearchButtons from './SearchButtons.vue'
import { searchState } from '@/state'

const { open, close } = useModal({
  component: FilterView,
  attrs: {
    onConfirm() {
      close()
    },
  },
})
</script>

<template>
  <div class="filter-button-container">
    <button class="filter-button" @click="open">Filter ({{ searchState.filterCount }})</button>
    <SearchButtons
      :clearFunction="searchState.clearState"
      :searchFunction="searchState.updateMatching"
    />
    <ModalsContainer />
  </div>
</template>

<style>
.filter-button-container {
  display: flex;
  flex-direction: row;
  align-content: space-between;
  background-color: #daf3ff;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
}

.filter-button {
  width: 100%;
  text-align: start;
}
</style>
