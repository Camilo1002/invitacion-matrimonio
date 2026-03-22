<script setup>
import { ref, onMounted } from 'vue'
import { Motion } from '@motionone/vue'

const emit = defineEmits(['enter'])
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const handleClick = () => {
  emit('enter')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50 overflow-hidden relative">
    <div class="absolute top-0 left-0 right-0 z-20 pointer-events-none">
      <svg viewBox="0 0 1200 200" class="w-full h-auto" preserveAspectRatio="none">
        <path d="M 0,0 L 600,150 L 1200,0 Z" fill="#d4d4d8" opacity="0.3"/>
        <path d="M 0,0 L 600,150 L 1200,0 L 1200,20 L 600,170 L 0,20 Z" fill="#a8a29e" opacity="0.2"/>
        <line x1="0" y1="0" x2="600" y2="150" stroke="#78716c" stroke-width="2" opacity="0.3"/>
        <line x1="1200" y1="0" x2="600" y2="150" stroke="#78716c" stroke-width="2" opacity="0.3"/>
      </svg>
    </div>

    <div class="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
      <svg viewBox="0 0 1200 150" class="w-full h-auto" preserveAspectRatio="none">
        <path d="M 0,150 L 0,50 L 600,0 L 1200,50 L 1200,150 Z" fill="#d4d4d8" opacity="0.3"/>
        <path d="M 0,150 L 0,70 L 600,20 L 1200,70 L 1200,150 Z" fill="#a8a29e" opacity="0.2"/>
        <circle cx="100" cy="100" r="3" fill="#78716c" opacity="0.4"/>
        <circle cx="1100" cy="100" r="3" fill="#78716c" opacity="0.4"/>
        <path d="M 50,120 Q 100,100 150,120" stroke="#78716c" stroke-width="1.5" fill="none" opacity="0.3"/>
        <path d="M 1050,120 Q 1100,100 1150,120" stroke="#78716c" stroke-width="1.5" fill="none" opacity="0.3"/>
      </svg>
    </div>

    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-stone-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
    </div>

    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto py-12">
      <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, y: -30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, easing: 'ease-out' }"
      >
        <h2 class="text-3xl md:text-5xl lg:text-6xl text-slate-600 font-serif font-light mb-16 md:mb-20 tracking-wide italic leading-relaxed">
          Por fin damos el "Sí"<br>ante Dios 🤍
        </h2>
      </Motion>

      <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 1, delay: 0.3, easing: 'ease-out' }"
      >
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-800 mb-12 md:mb-16 leading-tight">
          Pau <span class="text-amber-600">&</span> Erre
        </h1>
      </Motion>

      <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.6, easing: 'ease-out' }"
      >
        <p class="text-2xl md:text-3xl lg:text-4xl text-slate-500 font-serif font-light mb-24 md:mb-32 tracking-wider italic">
          ¡Nos casamos!        </p>
      </Motion>

      <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, scale: 0.9 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 0.6, delay: 0.9, easing: 'ease-out' }"
      >
        <button
          @click="handleClick"
          class="group relative px-10 py-5 md:px-12 md:py-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white text-lg md:text-xl font-medium rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span class="relative z-10">Abrir Invitación</span>
          <div class="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </Motion>
    </div>
  </div>
</template>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
