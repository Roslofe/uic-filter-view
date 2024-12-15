import { reactive } from 'vue'
import { data } from './database'

// track the filtering across several points
export const searchState = reactive({
  filterCount: 0,
  keywords: [],
  types: [],
  impacts: [],
  identifiers: [],
  matching: { ...data },

  updateCount() {
    const newCount = [
      searchState.keywords,
      searchState.types,
      searchState.impacts,
      searchState.identifiers,
    ].filter((n) => n.length !== 0).length
    searchState.filterCount = newCount
  },

  updateKeywords(newKeys) {
    searchState.keywords = newKeys
  },

  updateTypes(newTypes) {
    searchState.types = newTypes
  },

  updateImpacted(newImpacts) {
    searchState.impacts = newImpacts
  },

  updateSymptoms(newSymptoms) {
    searchState.identifiers = newSymptoms
  },

  clearState() {
    searchState.filterCount = 0
    searchState.keywords = []
    searchState.types = []
    searchState.impacts = []
    searchState.identifiers = []
    searchState.matching = { ...data }
  },

  updateMatching() {
    const newMatching = data.filter(
      (issue) =>
        (searchState.keywords.length == 0 ||
          searchState.keywords.some((k) => issue.name.includes(k))) &&
        (searchState.types.length == 0 || searchState.types.includes(issue.type)) &&
        (searchState.impacts.length == 0 ||
          searchState.impacts.every((i) => issue.affects.includes(i))) &&
        (searchState.identifiers.length == 0 ||
          searchState.identifiers.every((i) => issue.symptoms.includes(i))),
    )
    searchState.matching = { ...newMatching }
  },
})
