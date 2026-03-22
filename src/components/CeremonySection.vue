<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Motion } from '@motionone/vue'

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true
        }
      })
    },
    {
      threshold: 0.2
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }

  onUnmounted(() => {
    if (sectionRef.value) {
      observer.unobserve(sectionRef.value)
    }
  })
})

const scrollToNext = () => {
  const startPosition = window.pageYOffset
  const targetPosition = startPosition + window.innerHeight
  const distance = targetPosition - startPosition
  const duration = 1000
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
  <section ref="sectionRef" class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900 py-20 px-6 overflow-hidden">
    <div class="relative z-10 max-w-4xl mx-auto">
      <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, easing: 'ease-out' }"
      >
        <h2 class="text-lg md:text-3xl lg:text-4xl text-white font-serif mb-12 md:mb-16 text-center leading-relaxed ceremony-title px-4 md:px-0">
          <span class="block">Nos encantaría que nos acompañes</span>
          <span class="block">en nuestra ceremonia religiosa</span>
        </h2>
      </Motion>

      <div class="space-y-6 md:space-y-8">
        <Motion
          v-if="isVisible"
          :initial="{ opacity: 0, x: -30 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.8, delay: 0.4, easing: 'ease-out' }"
        >
          <div class="flex items-start gap-5 md:gap-6 group">
            <div class="flex-shrink-0 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 md:w-8 md:h-8 text-slate-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="flex-1 border-b border-slate-700/50 pb-6 md:pb-8">
              <p class="text-xs md:text-sm text-slate-500 font-medium mb-2 uppercase tracking-wider">Fecha</p>
              <p class="text-2xl md:text-3xl lg:text-4xl text-white font-serif font-light">3 de mayo de 2026</p>
            </div>
          </div>
        </Motion>

        <Motion
          v-if="isVisible"
          :initial="{ opacity: 0, x: -30 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.8, delay: 0.7, easing: 'ease-out' }"
        >
          <div class="flex items-start gap-5 md:gap-6 group">
            <div class="flex-shrink-0 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 md:w-8 md:h-8 text-slate-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="flex-1 border-b border-slate-700/50 pb-6 md:pb-8">
              <p class="text-xs md:text-sm text-slate-500 font-medium mb-2 uppercase tracking-wider">Hora</p>
              <p class="text-2xl md:text-3xl lg:text-4xl text-white font-serif font-light">3:00 p.m.</p>
            </div>
          </div>
        </Motion>

        <Motion
          v-if="isVisible"
          :initial="{ opacity: 0, x: -30 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.8, delay: 1.0, easing: 'ease-out' }"
        >
          <div class="flex items-start gap-5 md:gap-6 group">
            <div class="flex-shrink-0 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 md:w-8 md:h-8 text-slate-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div class="flex-1 border-b border-slate-700/50 pb-6 md:pb-8">
              <p class="text-xs md:text-sm text-slate-500 font-medium mb-2 uppercase tracking-wider">Lugar</p>
              <p class="text-2xl md:text-3xl lg:text-4xl text-white font-serif font-light">Parroquia La Purísima Concepción</p>
            </div>
          </div>
        </Motion>

        <Motion
          v-if="isVisible"
          :initial="{ opacity: 0, x: -30 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.8, delay: 1.3, easing: 'ease-out' }"
        >
          <div class="flex items-start gap-5 md:gap-6 group">
            <div class="flex-shrink-0 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 md:w-8 md:h-8 text-slate-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="flex-1 pb-2">
              <p class="text-xs md:text-sm text-slate-500 font-medium mb-2 uppercase tracking-wider">Ubicación</p>
              <p class="text-2xl md:text-3xl lg:text-4xl text-white font-serif font-light">Loma del Chocho, Envigado</p>
            </div>
          </div>
        </Motion>
      </div>

      <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1.0, delay: 1.6, easing: 'ease-out' }"
      >
        <div class="mt-16 md:mt-20 text-center">
          <p class="text-lg md:text-xl text-slate-300 font-serif italic mb-2">Con amor,</p>
          <p class="text-2xl md:text-3xl lg:text-4xl text-amber-400 font-serif font-medium">Paula y Ronal</p>
        </div>
      </Motion>

      <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, y: 50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1.0, delay: 2.0, easing: 'ease-out' }"
      >
        <div class="mt-10 md:mt-12 flex justify-center">
          <a 
            href="https://maps.app.goo.gl/HU9Np2tfdXJa6aJG9" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 rounded-full text-white font-serif text-lg transition-all duration-300 hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Cómo llegar
          </a>
        </div>
      </Motion>

      <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, y: -20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 2.3, easing: 'ease-out' }"
      >
        <div class="mt-16 md:mt-20 flex flex-col items-center gap-0 cursor-pointer" @click="scrollToNext">
          <svg 
            class="w-10 h-16 text-white" 
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
            class="w-6 h-6 text-white scroll-arrow -mt-1" 
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
.ceremony-title {
  font-weight: 300;
  letter-spacing: 0.05em;
  line-height: 1.5;
  font-style: italic;
}

.ceremony-title span {
  display: inline-block;
  max-width: 100%;
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
