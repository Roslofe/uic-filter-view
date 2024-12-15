<script setup>
import SearchResults from './components/SearchResults.vue'
import FilterButton from './components/FilterButton.vue'
import { searchState } from './state'
</script>

<template>
  <header>
    <div class="title-container">
      <h1>Search pests and diseases</h1>
    </div>
  </header>

  <main>
    <FilterButton />
    <SearchResults :data="searchState.matching" />
  </main>
</template>

<style>
.title-container {
  background-color: #daf3ff;
  padding: 5px;
  border-radius: 5px;
}
</style>
