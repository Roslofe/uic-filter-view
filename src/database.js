// Mock data, names and characteristics for the pests and diseases

const data = [
  {
    name: 'Pneumonia',
    type: 'Disease',
    affects: ['Poultry', 'Cattle', 'Goat', 'Ostrich', 'Pig', 'Sheep'],
    symptoms: [
      'Sneezing',
      'Coughing',
      'Laboured breath',
      'Face swelling',
      'Less eggs',
      'Lethargy',
      'Face swelling',
    ],
  },
  {
    name: 'Lice',
    type: 'Pest',
    affects: ['Poultry', 'Sheep', 'Cattle', 'Goat', 'Ostrich'], // also affects pigs, but removed for the sake of demonstrating the filter
    symptoms: ['Visible pests on skin'],
  },
]

const filterTypes = {
  name: ['Pneumonia', 'Lice'],
  type: ['Pest', 'Disease'],
  affects: ['Poultry', 'Cattle', 'Goat', 'Ostrich', 'Pig', 'Sheep'],
  symptoms: [
    'Sneezing',
    'Coughing',
    'Laboured breath',
    'Face swelling',
    'Less eggs',
    'Lethargy',
    'Face swelling',
    'Visible pests on skin',
  ],
}

export { data, filterTypes }
