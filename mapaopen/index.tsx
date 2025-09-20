/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// Data for hate crimes against LGBTQ+ people in Mexico (2015-2022)
const crimeData = {
  Aguascalientes: {
    count: 3,
    story: "Alexa Gutiérrez, una mujer trans, fue asesinada el 25 de junio de 2018 en el municipio de Aguascalientes, Aguascalientes, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 3 asesinatos contra personas LGBT+, siendo el número 29 de 32 en la república mexicana.",
    lat: 22.03,
    lon: -102.36,
    zoom: 10,
  },
  "Baja California": {
    count: 14,
    story: "Una mujer trans desconocida fue asesinada el 16 de diciembre de 2022 en el municipio de Tijuana, Baja California, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 14 asesinatos contra personas LGBT+, siendo el número 17 de 32 en la república mexicana.",
    lat: 30.84,
    lon: -115.28,
    zoom: 7,
  },
  "Baja California Sur": {
    count: 8,
    story: "Mérida Irlanda, una mujer trans, fue asesinada el 13 de agosto de 2021 en el municipio de La Paz, Baja California Sur, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 8 asesinatos contra personas LGBT+, siendo el número 23 de 32 en la república mexicana.",
    lat: 26.04,
    lon: -111.66,
    zoom: 7,
  },
  Campeche: {
    count: 3,
    story: "La Mariposa, una mujer trans, fue asesinada el 26 de marzo de 2019 en el municipio de Carmen, Campeche, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 3 asesinatos contra personas LGBT+, siendo el número 30 de 32 en la república mexicana.",
    lat: 18.65,
    lon: -90.53,
    zoom: 8,
  },
  Chiapas: {
    count: 17,
    story: "Armando N, un hombre gay, fue asesinado el 13 de febrero de 2022 en el municipio de Tuxtla Gutiérrez, Chiapas, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 17 asesinatos contra personas LGBT+, siendo el número 15 de 32 en la república mexicana.",
    lat: 16.75,
    lon: -93.12,
    zoom: 8,
  },
  Chihuahua: {
    count: 64,
    story: "Dayana Ortíz Bustamante, una mujer trans, fue asesinada el 28 de octubre de 2022 en el municipio de Juárez, Chihuahua, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 64 asesinatos contra personas LGBT+, siendo el número 2 de 32 en la república mexicana.",
    lat: 28.63,
    lon: -106.07,
    zoom: 6,
  },
  "Ciudad de México": {
    count: 34,
    story: "Manuel Ladrón de Guevara Acuña, un hombre gay, fue asesinado el 4 de noviembre de 2022 en el municipio de Cuauhtémoc, Ciudad de México, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 34 asesinatos contra personas LGBT+, siendo el número 5 de 32 en la república mexicana.",
    lat: 19.43,
    lon: -99.13,
    zoom: 11,
  },
  Coahuila: {
    count: 20,
    story: "Una persona de la comunidad LGBT+ fue asesinada el 25 de julio de 2022 en el municipio de Saltillo, Coahuila, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 20 asesinatos contra personas LGBT+, siendo el número 13 de 32 en la república mexicana.",
    lat: 27.06,
    lon: -101.71,
    zoom: 7,
  },
  Colima: {
    count: 14,
    story: "Teresa Montaño, una mujer trans, fue asesinada el 9 de septiembre de 2022 en el municipio de Tecomán, Colima, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 14 asesinatos contra personas LGBT+, siendo el número 18 de 32 en la república mexicana.",
    lat: 19.09,
    lon: -103.72,
    zoom: 10,
  },
  Durango: {
    count: 4,
    story: "Susana Villarreal, una mujer trans, fue asesinada el 14 de septiembre de 2022 en el municipio de Durango, Durango, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 4 asesinatos contra personas LGBT+, siendo el número 27 de 32 en la república mexicana.",
    lat: 24.02,
    lon: -104.65,
    zoom: 7,
  },
  "Estado de México": {
    count: 40,
    story: "Ximena Madrid Flores, una mujer trans, fue asesinada el 14 de diciembre de 2022 en el municipio de Teotihuacán, Estado de México, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 40 asesinatos contra personas LGBT+, siendo el número 4 de 32 en la república mexicana.",
    lat: 19.28,
    lon: -99.65,
    zoom: 9,
  },
  Guanajuato: {
    count: 32,
    story: "Martha Torres Lomelí, una mujer trans, fue asesinada el 6 de noviembre de 2022 en el municipio de Irapuato, Guanajuato, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 32 asesinatos contra personas LGBT+, siendo el número 6 de 32 en la república mexicana.",
    lat: 21.12,
    lon: -101.68,
    zoom: 9,
  },
  Guerrero: {
    count: 52,
    story: "Luna Flores, una mujer trans, fue asesinada el 25 de septiembre de 2022 en el municipio de Iguala de la Independencia, Guerrero, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 52 asesinatos contra personas LGBT+, siendo el número 3 de 32 en la república mexicana.",
    lat: 17.55,
    lon: -99.5,
    zoom: 8,
  },
  Hidalgo: {
    count: 1,
    story: "Renata Spencer, una mujer trans, fue asesinada el 9 de marzo de 2019 en el municipio de Tepeji del Río de Ocampo, Hidalgo, un estado donde según el informe de Letra S entre 2015 y 2018 se registró 1 asesinato contra personas LGBT+, siendo el número 32 de 32 en la república mexicana.",
    lat: 20.12,
    lon: -98.73,
    zoom: 9,
  },
  Jalisco: {
    count: 23,
    story: "Una mujer trans desconocida fue asesinada el 29 de noviembre de 2022 en el municipio de Zapopan, Jalisco, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 23 asesinatos contra personas LGBT+, siendo el número 12 de 32 en la república mexicana.",
    lat: 20.67,
    lon: -103.35,
    zoom: 7,
  },
  Michoacán: {
    count: 18,
    story: "Betty Castañeda, una mujer trans, fue asesinada el 18 de octubre de 2022 en el municipio de Sahuayo, Michoacán, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 18 asesinatos contra personas LGBT+, siendo el número 14 de 32 en la república mexicana.",
    lat: 19.7,
    lon: -101.18,
    zoom: 8,
  },
  Morelos: {
    count: 26,
    story: "Una mujer trans desconocida fue asesinada el 4 de noviembre de 2022 en el municipio de Cuautla, Morelos, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 26 asesinatos contra personas LGBT+, siendo el número 10 de 32 en la república mexicana.",
    lat: 18.92,
    lon: -99.23,
    zoom: 10,
  },
  Nayarit: {
    count: 6,
    story: "Cleto Geovanny Bernal Flores, un hombre gay, fue asesinado el 21 de diciembre de 2022 en el municipio de San Blas, Nayarit, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 6 asesinatos contra personas LGBT+, siendo el número 26 de 32 en la república mexicana.",
    lat: 21.5,
    lon: -104.89,
    zoom: 8,
  },
  "Nuevo León": {
    count: 13,
    story: "Una mujer trans no identificada fue asesinada el 10 de octubre de 2020 en el municipio de Monterrey, Nuevo León, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 13 asesinatos contra personas LGBT+, siendo el número 20 de 32 en la república mexicana.",
    lat: 25.67,
    lon: -100.32,
    zoom: 7,
  },
  Oaxaca: {
    count: 27,
    story: "Sheyla, una mujer trans, fue asesinada el 23 de diciembre de 2022 en el municipio de Santo Domingo Tehuantepec, Oaxaca, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 27 asesinatos contra personas LGBT+, siendo el número 9 de 32 en la república mexicana.",
    lat: 17.07,
    lon: -96.72,
    zoom: 7,
  },
  Puebla: {
    count: 26,
    story: "Un hombre gay desconocido fue asesinado el 7 de septiembre de 2022 en el municipio de Acajete, Puebla, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 26 asesinatos contra personas LGBT+, siendo el número 11 de 32 en la república mexicana.",
    lat: 19.04,
    lon: -98.2,
    zoom: 8,
  },
  Querétaro: {
    count: 4,
    story: "Héctor García, un hombre gay, fue asesinado el 21 de junio de 2022 en el municipio de Querétaro, Querétaro, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 4 asesinatos contra personas LGBT+, siendo el número 28 de 32 en la república mexicana.",
    lat: 20.59,
    lon: -100.39,
    zoom: 9,
  },
  "Quintana Roo": {
    count: 31,
    story: "Una mujer trans desconocida fue asesinada el 17 de octubre de 2022 en el municipio de Benito Juárez, Quintana Roo, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 31 asesinatos contra personas LGBT+, siendo el número 7 de 32 en la república mexicana.",
    lat: 18.5,
    lon: -88.3,
    zoom: 7,
  },
  "San Luis Potosí": {
    count: 7,
    story: "Fabiola Rivera, una mujer trans, fue asesinada el 21 de julio de 2021 en el municipio de San Luis Potosí, San Luis Potosí, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 7 asesinatos contra personas LGBT+, siendo el número 25 de 32 en la república mexicana.",
    lat: 22.15,
    lon: -100.98,
    zoom: 7,
  },
  Sinaloa: {
    count: 16,
    story: "Alexander Millán, un hombre gay, fue asesinado el 19 de mayo de 2022 en el municipio de Culiacán, Sinaloa, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 16 asesinatos contra personas LGBT+, siendo el número 16 de 32 en la república mexicana.",
    lat: 24.8,
    lon: -107.39,
    zoom: 7,
  },
  Sonora: {
    count: 9,
    story: "Miguel Ángel Pérez Leal, un hombre gay, fue asesinado el 22 de mayo de 2022 en el municipio de San Luis Río Colorado, Sonora, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 9 asesinatos contra personas LGBT+, siendo el número 22 de 32 en la república mexicana.",
    lat: 29.1,
    lon: -110.95,
    zoom: 6,
  },
  Tabasco: {
    count: 12,
    story: "María Lucía Chablé, una mujer lesbiana, fue asesinada el 5 de junio de 2022 en el municipio de Macuspana, Tabasco, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 12 asesinatos contra personas LGBT+, siendo el número 21 de 32 en la república mexicana.",
    lat: 17.98,
    lon: -92.93,
    zoom: 9,
  },
  Tamaulipas: {
    count: 29,
    story: "Liz, una mujer trans, fue asesinada el 3 de noviembre de 2022 en el municipio de Padilla, Tamaulipas, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 29 asesinatos contra personas LGBT+, siendo el número 8 de 32 en la república mexicana.",
    lat: 23.85,
    lon: -98.62,
    zoom: 7,
  },
  Tlaxcala: {
    count: 2,
    story: "Juan José R., un hombre gay, fue asesinado el 16 de abril de 2017 en el municipio de Calpulalpan, Tlaxcala, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 2 asesinatos contra personas LGBT+, siendo el número 31 de 32 en la república mexicana.",
    lat: 19.31,
    lon: -98.24,
    zoom: 10,
  },
  Veracruz: {
    count: 99,
    story: "Olvin Uriel Osorio, un hombre gay, fue asesinado el 22 de noviembre de 2022 en el municipio de Oluta, Veracruz, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 99 asesinatos contra personas LGBT+, siendo el número 1 de 32 en la república mexicana.",
    lat: 19.17,
    lon: -96.13,
    zoom: 7,
  },
  Yucatán: {
    count: 14,
    story: "Jesús Salinas, un hombre gay, fue asesinado el 3 de agosto de 2019 en Yucatán, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 14 asesinatos contra personas LGBT+, siendo el número 19 de 32 en la república mexicana.",
    lat: 20.97,
    lon: -89.62,
    zoom: 8,
  },
  Zacatecas: {
    count: 8,
    story: "Gónzalo Ciau, un hombre gay, fue asesinado el 21 de agosto de 2019 en Zacatecas, un estado donde según el informe de Letra S entre 2015 y 2018 se registraron 8 asesinatos contra personas LGBT+, siendo el número 24 de 32 en la república mexicana.",
    lat: 22.77,
    lon: -102.58,
    zoom: 7,
  },
};

const frame = document.querySelector('#embed-map') as HTMLIFrameElement;
const captionDiv = document.querySelector('#caption') as HTMLDivElement;
const captionState = document.querySelector('#caption-state') as HTMLHeadingElement;
const captionCount = document.querySelector('#caption-count') as HTMLParagraphElement;
const captionStory = document.querySelector('#caption-story') as HTMLParagraphElement;
const storyLink = document.querySelector('#story-link') as HTMLAnchorElement;

const modal = document.querySelector('#modal') as HTMLDivElement;
const modalStory = document.querySelector('#modal-story') as HTMLParagraphElement;
const modalCloseBtn = document.querySelector('#modal-close-btn') as HTMLButtonElement;

const mostViolentBtn = document.querySelector('#most-violent-btn') as HTMLButtonElement;
const exploreBtn = document.querySelector('#explore-btn') as HTMLButtonElement;

// Sort states by crime count for exploration
const sortedStates = Object.keys(crimeData).sort(
  (a, b) => crimeData[b].count - crimeData[a].count
);
let currentStateIndex = -1; // Start at -1 so first click is 0

function renderMap(stateName: string) {
  const state = crimeData[stateName];
  if (!state) return;
  const { lat, lon, zoom } = state;
  // Use OpenStreetMap URL which doesn't require an API key
  const url = `https://www.openstreetmap.org/export/embed.html?layer=mapnik&marker=${lat},${lon}`;
  
  // To control zoom and center more precisely, we can use the fragment identifier approach.
  // The UI is a bit more cluttered but it respects the zoom level.
  frame.src = `https://www.openstreetmap.org/#map=${zoom}/${lat}/${lon}`;
}

function updateCaption(stateName: string) {
  const state = crimeData[stateName];
  if (!state) return;
  captionState.textContent = stateName;
  captionCount.textContent = `${state.count} Homicidios`;
  captionStory.textContent = state.story;
  captionDiv.classList.remove('hidden');
}

function showState(stateName: string) {
  renderMap(stateName);
  updateCaption(stateName);
}

function showModal(story: string) {
    modalStory.textContent = story;
    modal.classList.remove('hidden');
}

function hideModal() {
    modal.classList.add('hidden');
}

function main() {
  // Initial view of Mexico using OpenStreetMap
  const initialLat = 23.6345; // A central point in Mexico
  const initialLon = -102.5528;
  const initialZoom = 5; // Zoom level to see the whole country
  frame.src = `https://www.openstreetmap.org/#map=${initialZoom}/${initialLat}/${initialLon}`;

  mostViolentBtn.addEventListener('click', () => {
    showState('Veracruz');
  });

  exploreBtn.addEventListener('click', () => {
    currentStateIndex = (currentStateIndex + 1) % sortedStates.length;
    const nextState = sortedStates[currentStateIndex];
    showState(nextState);
  });
  
  storyLink.addEventListener('click', (e) => {
      e.preventDefault();
      const stateName = captionState.textContent;
      if (stateName && crimeData[stateName]) {
          showModal(crimeData[stateName].story);
      }
  });
  
  modalCloseBtn.addEventListener('click', hideModal);
  modal.addEventListener('click', (e) => {
      if (e.target === modal) {
          hideModal();
      }
  });

}

main();
