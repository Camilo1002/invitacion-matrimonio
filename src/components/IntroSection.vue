<script setup>
import { ref, onMounted } from 'vue'
import { Motion } from '@motionone/vue'
import ThreeBackground from './ThreeBackground.vue'
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 200)
})

const scrollToNext = () => {
  const startPosition = window.pageYOffset
  const targetPosition = startPosition + window.innerHeight
  const distance = targetPosition - startPosition
  const duration = 1000 // 1 segundo
  let start = null

  const easeInOutCubic = (t) => {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const animation = (currentTime) => {
    if (start === null) start = currentTime
    const timeElapsed = currentTime - start
    const progress = Math.min(timeElapsed / duration, 1)
    const ease = easeInOutCubic(progress)
    
    window.scrollTo(0, startPosition + (distance * ease))
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center py-20 px-8 md:px-6 overflow-hidden">
    <div class="absolute inset-0 z-0">
      <ThreeBackground />
    </div>
    
    <div class="absolute inset-0 z-1">
      <img 
        src="/images/1.jpeg" 
        alt="Fondo" 
        class="w-full h-full object-cover opacity-20"
      />
    </div>
    
    <div class="absolute inset-0 z-2 bg-gradient-to-br from-slate-50/60 via-stone-50/55 to-amber-50/60"></div>
    
    <div class="relative z-10 max-w-4xl mx-auto px-2 md:px-0">
      <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, easing: 'ease-out' }"
      >
        <h2 class="text-4xl md:text-5xl lg:text-6xl text-slate-700 font-serif font-light mb-8 md:mb-20 italic text-left">
          Se acerca un gran día
        </h2>
      </Motion>

      <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.3, easing: 'ease-out' }"
      >
        <div class="text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed space-y-6 text-left">
          <p>
            Queremos invitarte a presenciar un momento muy especial y esperado 
            <span class="italic">(especialmente por Paula)</span>.
          </p>
          
          <p>
            Después de <span class="font-semibold text-amber-700">10 años</span> de construir una relación 
            llena de amor y dedicación, vamos a recibir la bendición de Dios.
          </p>
          
          <p>
            Es esa <span class="italic">"cerecita del pastel"</span> que nos faltaba: 
            <span class="font-semibold text-slate-700">nuestra unión en Cristo</span>.
          </p>
        </div>
      </Motion>

      <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, y: -20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 1.2, easing: 'ease-out' }"
      >
        <div class="mt-10 md:mt-24 flex flex-col items-center gap-0 cursor-pointer" @click="scrollToNext">
          <svg 
            class="w-10 h-16 text-slate-700" 
            viewBox="0 0 40 64" 
            fill="none"
          >
            <rect 
              x="8" 
              y="4" 
              width="24" 
              height="44" 
              rx="12" 
              stroke="currentColor" 
              stroke-width="3"
              fill="none"
            />
            <circle 
              cx="20" 
              cy="28" 
              r="3" 
              fill="currentColor"
              class="scroll-dot"
            />
          </svg>
          <svg 
            class="w-6 h-6 text-slate-700 scroll-arrow -mt-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2.5" 
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      </Motion>
    </div>
  </section>
</template>

<style scoped>
p {
  text-align: left;
}

@keyframes scroll-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

.scroll-dot,
.scroll-arrow {
  animation: scroll-bounce 1.5s ease-in-out infinite;
}
</style>
