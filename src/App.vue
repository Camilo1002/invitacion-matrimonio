<script setup>
import { ref } from 'vue'
import WelcomeScreen from './components/WelcomeScreen.vue'
import IntroSection from './components/IntroSection.vue'
import CeremonySection from './components/CeremonySection.vue'
import DresscodeSection from './components/DresscodeSection.vue'
import GallerySection from './components/GallerySection.vue'
import MusicPlayer from './components/MusicPlayer.vue'

const showWelcome = ref(true)

const handleEnter = () => {
  showWelcome.value = false
}
</script>

<template>
  <div class="min-h-screen">
    <WelcomeScreen v-if="showWelcome" @enter="handleEnter" />
    <div v-else>
      <IntroSection />
      <CeremonySection />
      <DresscodeSection />
      <GallerySection />
    </div>
    
    <!-- Reproductor de música (siempre visible después de entrar) -->
    <MusicPlayer v-if="!showWelcome" />
  </div>
</template>
