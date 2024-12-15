<script setup>
import { ref } from 'vue'
import { ModalsContainer, useModal } from 'vue-final-modal'
import SearchResults from './components/SearchResults.vue'
import FilterView from './components/Filterview.vue'
import { data } from './database.js'

const activeFilters = ref(0)

const setFilter = () => {
  activeFilters.value++
}

const propData = [1, 2, 3]

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
  <header>
    <h1>View all</h1>
  </header>

  <main>
    <button @click="open">Open</button>
    <ModalsContainer />
    <div>
      <button @click="setFilter">Filter ({{ activeFilters }})</button>
    </div>
    <v-divider></v-divider>
    <SearchResults :data="data" />
  </main>
</template>
