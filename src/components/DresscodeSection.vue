<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Motion } from '@motionone/vue'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const isVisible = ref(false)
const showModal = ref(false)
const formData = ref({
  nombre: '',
  cantidad: 1
})
const isSubmitting = ref(false)
const submitMessage = ref('')

// Contador regresivo
const weddingDate = new Date('2026-05-03T15:00:00')
const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

let countdownInterval = null

const updateCountdown = () => {
  const now = new Date()
  const difference = weddingDate - now

  if (difference > 0) {
    countdown.value.days = Math.floor(difference / (1000 * 60 * 60 * 24))
    countdown.value.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    countdown.value.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    countdown.value.seconds = Math.floor((difference % (1000 * 60)) / 1000)
  } else {
    countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 200)
  
  updateCountdown()
  countdownInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
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

const openModal = () => {
  showModal.value = true
  submitMessage.value = ''
}

const closeModal = () => {
  showModal.value = false
  formData.value = { nombre: '', cantidad: 1 }
  submitMessage.value = ''
}

const saveToFirebase = async () => {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    await addDoc(collection(db, 'confirmaciones'), {
      nombre: formData.value.nombre,
      cantidad: formData.value.cantidad,
      fecha: new Date().toISOString(),
      timestamp: Date.now()
    })
    
    submitMessage.value = '¡Confirmación guardada exitosamente! Gracias por confirmar tu asistencia.'
    
    setTimeout(() => {
      closeModal()
    }, 2000)
  } catch (error) {
    console.error('Error al guardar:', error)
    if (error.code === 'permission-denied') {
      submitMessage.value = 'Error: Necesitas configurar las reglas de Firestore. Revisa la consola de Firebase.'
    } else {
      submitMessage.value = 'Hubo un error al guardar. Por favor intenta de nuevo.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50 py-20 px-6 overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img
        src="/images/3.jpeg"
        alt="Fondo"
        class="w-full h-full object-cover opacity-50"
      />
    </div>

    <div class="absolute inset-0 z-1 bg-gradient-to-br from-slate-50/50 via-stone-50/45 to-amber-50/50"></div>

    <div class="w-full max-w-4xl mx-auto flex flex-col items-center gap-12 md:gap-16 relative z-10">
    <div class="relative z-10 w-full text-center">
      <div class="absolute inset-0 border-2 border-slate-300/40 rounded-lg"></div>
      <div class="absolute -inset-2 border border-slate-200/30 rounded-xl"></div>
      
      <div class="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-slate-400/50 rounded-tl-lg"></div>
      <div class="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-slate-400/50 rounded-tr-lg"></div>
      <div class="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-slate-400/50 rounded-bl-lg"></div>
      <div class="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-slate-400/50 rounded-br-lg"></div>
      
      <div class="relative z-10 py-12 px-8 md:px-12">
        <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 0.8, easing: 'ease-out' }"
      >
        <div class="flex justify-center mb-4 md:mb-6">
          <div class="w-24 h-16 md:w-32 md:h-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 76" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <defs>
                <clipPath id="__lottie_element_112">
                  <rect width="150" height="76" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clip-path="url(#__lottie_element_112)">
                <g class="lineasDerecha" transform="matrix(1,0,0,1,0,0)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,100.25499725341797,27.170000076293945)">
                    <path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="3.141" d=" M-11.293000221252441,3.131999969482422 C-11.293000221252441,3.131999969482422 -0.6650000214576721,-2.183000087738037 11.291999816894531,-3.131999969482422"></path>
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,101.54000091552734,48.047000885009766)">
                    <path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="3.141" d=" M-12.524999618530273,-3.322000026702881 C-12.524999618530273,-3.322000026702881 2.6570000648498535,3.321000099182129 12.524999618530273,2.750999927520752"></path>
                  </g>
                </g>
                <g class="lineasIzquierda" transform="matrix(1,0,0,1,0,0)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,49.58300018310547,27.170000076293945)">
                    <path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="3.141" d=" M11.291999816894531,3.131999969482422 C11.291999816894531,3.131999969482422 0.6639999747276306,-2.183000087738037 -11.291999816894531,-3.131999969482422"></path>
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,48.29800033569336,48.047000885009766)">
                    <path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="3.141" d=" M12.524999618530273,-3.322000026702881 C12.524999618530273,-3.322000026702881 -2.6570000648498535,3.321000099182129 -12.524999618530273,2.750999927520752"></path>
                  </g>
                </g>
                <g class="lineaDerecha" transform="matrix(1,0,0,1,0,0)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,89.24700164794922,37.702999114990234)">
                    <path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="3.141" d=" M-2.750999927520752,-15.371999740600586 C-2.750999927520752,-15.371999740600586 3.13100004196167,-1.8980000019073486 -3.131999969482422,15.371999740600586"></path>
                  </g>
                </g>
                <g class="lineaIzquierda" transform="matrix(1,0,0,1,0,0)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,60.685001373291016,37.513999938964844)">
                    <path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="3.141" d=" M2.2769999504089355,-15.562000274658203 C2.2769999504089355,-15.562000274658203 -2.2769999504089355,-3.796999931335449 2.0889999866485596,15.562000274658203"></path>
                  </g>
                </g>
                <g class="monio" transform="matrix(1,0,0,1,0,0)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,74.91899871826172,36.944000244140625)">
                    <path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(0,0,0)" stroke-opacity="1" stroke-width="3.141" d=" M-10.611000061035156,16.131999969482422 C-10.611000061035156,16.131999969482422 11.196999549865723,16.131999969482422 11.196999549865723,16.131999969482422 C11.196999549865723,16.131999969482422 30.176000595092773,33.78099822998047 52.000999450683594,35.68000030517578 C52.000999450683594,35.68000030517578 68.7020034790039,38.715999603271484 70.5999984741211,26.3799991607666 C70.5999984741211,26.3799991607666 76.86299896240234,-0.5690000057220459 70.03099822998047,-25.809999465942383 C70.03099822998047,-25.809999465942383 67.56400299072266,-40.04399871826172 50.483001708984375,-33.78200149536133 C50.483001708984375,-33.78200149536133 22.58300018310547,-26.759000778198242 11.576000213623047,-14.61299991607666 C11.576000213623047,-14.61299991607666 -11.956000328063965,-14.993000030517578 -11.956000328063965,-14.993000030517578 C-11.956000328063965,-14.993000030517578 -26.950000762939453,-33.402000427246094 -54.27899932861328,-34.72999954223633 C-54.27899932861328,-34.72999954223633 -66.23500061035156,-36.81800079345703 -70.22100067138672,-24.101999282836914 C-70.22100067138672,-24.101999282836914 -76.86299896240234,6.072999954223633 -70.79000091552734,23.913000106811523 C-70.79000091552734,23.913000106811523 -64.90699768066406,40.04399871826172 -53.709999084472656,36.058998107910156 C-53.709999084472656,36.058998107910156 -25.430999755859375,32.263999938964844 -12.145999908447266,16.131999969482422"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          
          
        </div>
      </Motion>

      <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.3, easing: 'ease-out' }"
      >
        <h2 class="text-4xl md:text-5xl lg:text-6xl text-slate-800 font-serif font-light mb-6 md:mb-6 italic">
          Dresscode
        </h2>
      </Motion>

      <Motion
        v-if="isVisible"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.6, easing: 'ease-out' }"
      >
        <p class="text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed font-serif px-4">
          ¡No te estreses! Ven tranquilo/a, tal cual como vas a misa normalmente. Lo importante para nosotros es que estés ahí.
        </p>
      </Motion>
      </div>
    </div>

    <Motion
      v-if="isVisible"
      :initial="{ opacity: 0, y: 30 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, delay: 0.9, easing: 'ease-out' }"
    >
      <div class="text-center">
        <button
          @click="openModal"
          class="px-10 py-4 bg-slate-800 hover:bg-slate-700 text-white font-serif text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Confirma tu asistencia
        </button>
      </div>
    </Motion>

    <Motion
      v-if="isVisible"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, delay: 1.2, easing: 'ease-out' }"
    >
      <div class="text-center mt-0 md:mt-12">
        <p class="text-slate-600 font-serif text-lg md:text-xl mb-4">Falta:</p>
        <div class="flex justify-center gap-4 md:gap-8">
          <div class="flex flex-col items-center">
            <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg px-4 py-3 md:px-6 md:py-4 shadow-md min-w-[70px] md:min-w-[90px]">
              <span class="text-3xl md:text-4xl font-bold text-slate-800 font-serif">{{ countdown.days }}</span>
            </div>
            <span class="text-xs md:text-sm text-slate-600 mt-2 font-medium">Días</span>
          </div>
          
          <div class="flex flex-col items-center">
            <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg px-4 py-3 md:px-6 md:py-4 shadow-md min-w-[70px] md:min-w-[90px]">
              <span class="text-3xl md:text-4xl font-bold text-slate-800 font-serif">{{ countdown.hours }}</span>
            </div>
            <span class="text-xs md:text-sm text-slate-600 mt-2 font-medium">Horas</span>
          </div>
          
          <div class="flex flex-col items-center">
            <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg px-4 py-3 md:px-6 md:py-4 shadow-md min-w-[70px] md:min-w-[90px]">
              <span class="text-3xl md:text-4xl font-bold text-slate-800 font-serif">{{ countdown.minutes }}</span>
            </div>
            <span class="text-xs md:text-sm text-slate-600 mt-2 font-medium">Minutos</span>
          </div>
          
          <div class="flex flex-col items-center">
            <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg px-4 py-3 md:px-6 md:py-4 shadow-md min-w-[70px] md:min-w-[90px]">
              <span class="text-3xl md:text-4xl font-bold text-slate-800 font-serif">{{ countdown.seconds }}</span>
            </div>
            <span class="text-xs md:text-sm text-slate-600 mt-2 font-medium">Segundos</span>
          </div>
        </div>
      </div>
    </Motion>

    <Motion
      v-if="isVisible"
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, delay: 1.5, easing: 'ease-out' }"
    >
      <div class="mt-16 md:mt-20 flex flex-col items-center gap-0 cursor-pointer" @click="scrollToNext">
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

    <Transition name="modal">
      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" @click.self="closeModal">
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
          <button
            @click="closeModal"
            class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h3 class="text-3xl font-serif text-slate-800 mb-6 text-center">Confirma tu asistencia</h3>

          <form @submit.prevent="saveToFirebase" class="space-y-6">
            <div>
              <label for="nombre" class="block text-sm font-medium text-slate-700 mb-2">Nombre completo</label>
              <input
                id="nombre"
                v-model="formData.nombre"
                type="text"
                required
                :disabled="isSubmitting"
                class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent outline-none transition-all disabled:bg-slate-100 disabled:cursor-not-allowed"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label for="cantidad" class="block text-sm font-medium text-slate-700 mb-2">Cantidad de personas</label>
              <input
                id="cantidad"
                v-model.number="formData.cantidad"
                type="number"
                min="1"
                max="10"
                required
                :disabled="isSubmitting"
                class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent outline-none transition-all disabled:bg-slate-100 disabled:cursor-not-allowed"
              />
            </div>

            <div v-if="submitMessage" class="p-3 rounded-lg text-sm text-center" :class="submitMessage.includes('error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'">
              {{ submitMessage }}
            </div>

            <div class="flex gap-4 pt-4">
              <button
                type="button"
                @click="closeModal"
                :disabled="isSubmitting"
                class="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancelar
              </button>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="flex-1 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <span v-if="isSubmitting">
                  <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                <span>{{ isSubmitting ? 'Guardando...' : 'Confirmar' }}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.9);
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
