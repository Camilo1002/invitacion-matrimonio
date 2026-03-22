<script setup>
import { ref, onMounted } from 'vue'
import { Motion } from '@motionone/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'

const isVisible = ref(false)

const photos = [
  { year: '2015', image: '/images/2015.jpeg' },
  { year: '2016', image: '/images/2016.jpeg' },
  { year: '2016', image: '/images/2016-2.jpeg' },
  { year: '2017', image: '/images/2017.jpeg' },
  { year: '2018', image: '/images/2018.jpeg' },
  { year: '2019', image: '/images/2019.jpeg' },
  { year: '2019', image: '/images/2019-2.jpeg' },
  { year: '2022', image: '/images/2022.jpeg' },
  { year: '2022', image: '/images/2022-2.jpeg' },
  { year: '2022', image: '/images/2022-3.jpeg' },
  { year: '2023', image: '/images/2023.jpeg' },
  { year: '2023', image: '/images/2023-2.jpeg' },
  { year: '2024', image: '/images/2024.jpeg' },
  { year: '2024', image: '/images/2024-2.jpeg' },
  { year: '2024', image: '/images/2024-3.jpeg' },
  { year: '2024', image: '/images/2024-4.jpeg' },
  { year: '2025', image: '/images/2025.jpeg' },
  { year: '2025', image: '/images/2025-2.jpeg' },
  { year: '2025', image: '/images/2025-3.jpeg' },
  { year: '2025', image: '/images/2025-4.jpeg' }
]

const modules = [Autoplay, EffectCreative]

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 200)
})
</script>

<template>
  <section 
    id="gallery-section"
    class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-800 via-slate-700 to-zinc-800 py-20 px-6 md:px-8 overflow-hidden"
  >
    <div class="absolute inset-0 z-0">
      <img
        src="/images/2.jpeg"
        alt="Fondo"
        class="w-full h-full object-cover opacity-30"
      />
    </div>

    <div class="absolute inset-0 z-1 bg-gradient-to-br from-stone-900/70 via-slate-800/65 to-zinc-900/70"></div>

    <div class="absolute top-0 left-0 right-0 h-32 md:h-40 pointer-events-none z-20">
      <svg viewBox="0 0 1200 160" class="w-full h-full" preserveAspectRatio="none">
        <line x1="100" y1="80" x2="1100" y2="80" stroke="#d4af37" stroke-width="2" opacity="0.8"/>
        
        <line x1="100" y1="75" x2="1100" y2="75" stroke="#f59e0b" stroke-width="0.5" opacity="0.5"/>
        <line x1="100" y1="85" x2="1100" y2="85" stroke="#f59e0b" stroke-width="0.5" opacity="0.5"/>
        
        <path d="M 100,80 L 80,80 L 80,60 M 80,80 L 80,100" stroke="#d4af37" stroke-width="2" fill="none" opacity="0.8"/>
        <line x1="80" y1="60" x2="90" y2="60" stroke="#d4af37" stroke-width="1.5" opacity="0.6"/>
        <line x1="80" y1="100" x2="90" y2="100" stroke="#d4af37" stroke-width="1.5" opacity="0.6"/>
        
        <path d="M 1100,80 L 1120,80 L 1120,60 M 1120,80 L 1120,100" stroke="#d4af37" stroke-width="2" fill="none" opacity="0.8"/>
        <line x1="1120" y1="60" x2="1110" y2="60" stroke="#d4af37" stroke-width="1.5" opacity="0.6"/>
        <line x1="1120" y1="100" x2="1110" y2="100" stroke="#d4af37" stroke-width="1.5" opacity="0.6"/>
        
        <circle cx="600" cy="80" r="3" fill="#d4af37" opacity="0.9"/>
        <line x1="580" y1="80" x2="590" y2="80" stroke="#d4af37" stroke-width="1" opacity="0.7"/>
        <line x1="610" y1="80" x2="620" y2="80" stroke="#d4af37" stroke-width="1" opacity="0.7"/>
        
        <rect x="300" y="78" width="4" height="4" fill="#f59e0b" opacity="0.6" transform="rotate(45 302 80)"/>
        <rect x="900" y="78" width="4" height="4" fill="#f59e0b" opacity="0.6" transform="rotate(45 902 80)"/>
      </svg>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-32 md:h-40 pointer-events-none z-20">
      <svg viewBox="0 0 1200 160" class="w-full h-full" preserveAspectRatio="none">
        <line x1="100" y1="80" x2="1100" y2="80" stroke="#d4af37" stroke-width="2" opacity="0.8"/>
        
        <line x1="100" y1="75" x2="1100" y2="75" stroke="#f59e0b" stroke-width="0.5" opacity="0.5"/>
        <line x1="100" y1="85" x2="1100" y2="85" stroke="#f59e0b" stroke-width="0.5" opacity="0.5"/>
        
        <path d="M 100,80 L 80,80 L 80,60 M 80,80 L 80,100" stroke="#d4af37" stroke-width="2" fill="none" opacity="0.8"/>
        <line x1="80" y1="60" x2="90" y2="60" stroke="#d4af37" stroke-width="1.5" opacity="0.6"/>
        <line x1="80" y1="100" x2="90" y2="100" stroke="#d4af37" stroke-width="1.5" opacity="0.6"/>
        
        <path d="M 1100,80 L 1120,80 L 1120,60 M 1120,80 L 1120,100" stroke="#d4af37" stroke-width="2" fill="none" opacity="0.8"/>
        <line x1="1120" y1="60" x2="1110" y2="60" stroke="#d4af37" stroke-width="1.5" opacity="0.6"/>
        <line x1="1120" y1="100" x2="1110" y2="100" stroke="#d4af37" stroke-width="1.5" opacity="0.6"/>
        
        <circle cx="600" cy="80" r="3" fill="#d4af37" opacity="0.9"/>
        <line x1="580" y1="80" x2="590" y2="80" stroke="#d4af37" stroke-width="1" opacity="0.7"/>
        <line x1="610" y1="80" x2="620" y2="80" stroke="#d4af37" stroke-width="1" opacity="0.7"/>
        
        <rect x="300" y="78" width="4" height="4" fill="#f59e0b" opacity="0.6" transform="rotate(45 302 80)"/>
        <rect x="900" y="78" width="4" height="4" fill="#f59e0b" opacity="0.6" transform="rotate(45 902 80)"/>
      </svg>
    </div>

    <div class="w-full max-w-5xl mx-auto relative z-30">
      <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, easing: 'ease-out' }"
      >
        <h2 class="text-3xl md:text-6xl lg:text-7xl font-serif mb-12 md:mb-16 text-center gallery-title">
          El paso de los años
        </h2>
      </Motion>

      <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, scale: 0.9, y: 30 }"
        :animate="{ opacity: 1, scale: 1, y: 0 }"
        :transition="{ duration: 1, delay: 0.3, easing: 'ease-out' }"
      >
        <div class="w-full max-w-md md:max-w-3xl mx-auto px-6 md:px-0">
          <Swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :effect="'creative'"
            :creativeEffect="{
              prev: {
                translate: ['-100%', 0, -400],
                rotate: [0, 0, -15],
                opacity: 0,
                scale: 0.8,
              },
              next: {
                translate: ['100%', 0, -400],
                rotate: [0, 0, 15],
                opacity: 0,
                scale: 0.8,
              },
            }"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: false,
            }"
            :speed="1000"
            :loop="true"
            class="rounded-xl md:rounded-2xl overflow-visible shadow-2xl"
          >
            <SwiperSlide v-for="(photo, index) in photos" :key="index" class="overflow-hidden rounded-xl md:rounded-2xl">
              <Motion
                :initial="{ scale: 1.15 }"
                :animate="{ scale: 1 }"
                :transition="{ duration: 1.2, easing: 'ease-out' }"
              >
                <div class="relative aspect-[3/4] md:aspect-[16/9] bg-slate-100">
                  <img 
                    :src="photo.image" 
                    :alt="`Foto ${photo.year}`"
                    class="w-full h-full object-cover"
                  />
                </div>
              </Motion>
            </SwiperSlide>
          </Swiper>
        </div>
      </Motion>
    </div>
  </section>
</template>

<style scoped>
.gallery-title {
  font-weight: 300;
  letter-spacing: 0.02em;
  line-height: 1.2;
  background: linear-gradient(135deg, #f9d423 0%, #e8b923 25%, #d4af37 50%, #e8b923 75%, #f9d423 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
  font-style: italic;
  position: relative;
  padding: 0 1rem;
  white-space: nowrap;
}

.gallery-title::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -8px;
  transform: translateX(-50%);
  width: 120px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #d4af37, transparent);
  opacity: 0.6;
}

@media (min-width: 768px) {
  .gallery-title::before {
    width: 180px;
    height: 3px;
  }
}
</style>
