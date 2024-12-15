<script setup>
import { VueFinalModal } from 'vue-final-modal'
import { filterTypes } from '@/database'
import { ref, useAttrs } from 'vue'
import { searchState } from '@/state'
import SearchButtons from './SearchButtons.vue'

// use the stored filters, but update them only when the search-button is pressed
const checkedTypes = ref([...searchState.types])
const checkedAffected = ref([...searchState.impacts])
const checkedSymptoms = ref([...searchState.identifiers])
const keywords = ref([...searchState.keywords])

const currentInput = ref('')

const attrs = useAttrs()

const addKeyword = () => {
  keywords.value.push(currentInput.value)
  currentInput.value = ''
}

const removeKeyword = (id) => {
  keywords.value = keywords.value.filter((n) => n != id)
}

const clearSearch = () => {
  checkedTypes.value = []
  checkedAffected.value = []
  checkedSymptoms.value = []
  keywords.value = []
  currentInput.value = ''
}

const search = () => {
  // first, update state
  searchState.updateKeywords(keywords.value)
  searchState.updateTypes(checkedTypes.value)
  searchState.updateImpacted(checkedAffected.value)
  searchState.updateSymptoms(checkedSymptoms.value)

  // then update count and search
  searchState.updateCount()
  searchState.updateMatching()

  // close modal
  attrs.onConfirm()
}
</script>

<template>
  <VueFinalModal>
    <div class="overlayContainer">
      <h3>Keywords</h3>
      <div class="input-container">
        <input class="keyword-input" type="text" v-model="currentInput" />
        <button @click="addKeyword">Add</button>
      </div>
      <p>Press a keyword to remove it.</p>
      <button
        class="keyword-button"
        v-for="keyword in keywords"
        v-bind:key="keyword"
        @click="removeKeyword(keyword)"
      >
        {{ keyword }}
      </button>
      <h3>Issue type</h3>
      <v-divider></v-divider>
      <div class="form-container" v-for="type in filterTypes.type.sort()" v-bind:key="type">
        <input type="checkbox" :id="type" :value="type" v-model="checkedTypes" />
        <label :for="type">{{ type }}</label>
      </div>
      <h3>Affects</h3>
      <v-divider></v-divider>
      <div class="form-container" v-for="type in filterTypes.affects.sort()" v-bind:key="type">
        <input type="checkbox" :id="type" :value="type" v-model="checkedAffected" />
        <label :for="type">{{ type }}</label>
      </div>
      <h3>Symptoms</h3>
      <v-divider></v-divider>
      <div class="form-container" v-for="type in filterTypes.symptoms.sort()" v-bind:key="type">
        <input type="checkbox" :id="type" :value="type" v-model="checkedSymptoms" />
        <label :for="type">{{ type }}</label>
      </div>
      <SearchButtons :clearFunction="clearSearch" :searchFunction="search" />
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

.form-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: space-between;
  gap: 2px;
}

.keyword-input {
  border: 2px solid #688aa8;
  width: 100%;
  border-radius: 5px;
}

.input-container {
  display: flex;
  flex-direction: row;
  gap: 2px;
}

.keyword-button {
  border: 2px solid #688aa8;
  margin: 2px;
  padding: 2px 5px;
  border-radius: 10px;
}
</style>
