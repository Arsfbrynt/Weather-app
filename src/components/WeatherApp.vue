<template>
  <div class="container p-8 bg-baby-pink">
    <h1 class="text-2xl font-bold mb-4 text-blue">Weather App</h1>

    <form @submit.prevent="getWeather" class="mb-4 flex">
      <input
        type="text"
        class="border p-2 rounded w-full"
        v-model="city"
        placeholder="tulis dengan spesifik (Kecamatan atau desa)"
      />
      <button class="bg-baby-blue text-white py-2 px-4 rounded">Get Weather</button>
    </form>

    <div v-if="weather">
      <h2 class="text-xl font-bold mt-8">{{ weather.name }}</h2>
      <p class="text-gray-600">{{ weather.weather[0].description }}</p>
      <p class="text-4xl font-bold mt-4">{{ (weather.main.temp - 273).toFixed(1) }}°C</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const city = ref('')
    const weather = ref(null)
    const apiKey = '164b0153e9327ee5273ee5d4b16f80b0'

    async function getWeather() {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city.value}&limit=1&appid=${apiKey}`
        )

        const resp = response?.data[0]
        const long = resp.lon
        const lat = resp.lat

        const cuaca = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
        )
        weather.value = cuaca.data
      } catch (error) {
        console.error(error)
      }
    }

    return {
      city,
      weather,
      getWeather
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 640px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
