<script setup>
import { ref, onMounted } from 'vue'

const isPlaying = ref(false)
const audioRef = ref(null)

const togglePlay = () => {
  if (!audioRef.value) return
  
  if (isPlaying.value) {
    audioRef.value.pause()
  } else {
    audioRef.value.play()
  }
  isPlaying.value = !isPlaying.value
}

onMounted(() => {
  if (audioRef.value) {
    audioRef.value.volume = 0.3 // Volumen al 30%
    
    // Intentar reproducir automáticamente
    audioRef.value.play()
      .then(() => {
        isPlaying.value = true
      })
      .catch((error) => {
        // Si el navegador bloquea el autoplay, el usuario tendrá que hacer clic
        console.log('Autoplay bloqueado:', error)
        isPlaying.value = false
      })
  }
})
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50">
    <button
      @click="togglePlay"
      class="bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-slate-300 rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
      :class="{ 'animate-pulse': isPlaying }"
    >
      <svg
        v-if="!isPlaying"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-slate-700"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z"/>
      </svg>
      
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-slate-700"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
      </svg>
    </button>

    <audio
      ref="audioRef"
      loop
      preload="auto"
    >
      <source src="/music/hoy.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(148, 163, 184, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(148, 163, 184, 0);
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}
</style>
