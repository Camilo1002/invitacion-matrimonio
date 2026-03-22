<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvasRef = ref(null)
let scene, camera, renderer, particles, rings, hearts, geometries

onMounted(() => {
  initThree()
  animate()
  window.addEventListener('resize', onWindowResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize)
  if (renderer) {
    renderer.dispose()
  }
})

const initThree = () => {
  scene = new THREE.Scene()
  
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 8

  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true,
    antialias: true
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  // Crear partículas doradas más grandes
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 2000
  const posArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 20
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0xd4af37,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  })

  particles = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particles)

  // Anillos eliminados por solicitud del usuario
  rings = []

  // Crear formas de corazón
  hearts = []
  const heartShape = new THREE.Shape()
  heartShape.moveTo(0, 0)
  heartShape.bezierCurveTo(0, -0.3, -0.6, -0.3, -0.6, 0)
  heartShape.bezierCurveTo(-0.6, 0.3, 0, 0.6, 0, 1)
  heartShape.bezierCurveTo(0, 0.6, 0.6, 0.3, 0.6, 0)
  heartShape.bezierCurveTo(0.6, -0.3, 0, -0.3, 0, 0)

  for (let i = 0; i < 8; i++) {
    const heartGeometry = new THREE.ShapeGeometry(heartShape)
    const heartMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide
    })
    const heart = new THREE.Mesh(heartGeometry, heartMaterial)
    heart.position.set(
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 8
    )
    heart.rotation.z = Math.random() * Math.PI * 2
    heart.scale.set(0.3, 0.3, 0.3)
    hearts.push(heart)
    scene.add(heart)
  }

  // Crear geometrías decorativas (cubos y esferas)
  geometries = []
  for (let i = 0; i < 10; i++) {
    const geometry = i % 2 === 0 
      ? new THREE.BoxGeometry(0.3, 0.3, 0.3)
      : new THREE.SphereGeometry(0.15, 16, 16)
    
    const material = new THREE.MeshBasicMaterial({
      color: i % 3 === 0 ? 0xd4af37 : (i % 3 === 1 ? 0xc0c0c0 : 0xe5e5e5),
      transparent: true,
      opacity: 0.4,
      wireframe: true
    })
    
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 6
    )
    geometries.push(mesh)
    scene.add(mesh)
  }

  // Luz ambiental
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)
}

const animate = () => {
  requestAnimationFrame(animate)

  // Animar partículas
  if (particles) {
    particles.rotation.y += 0.001
    particles.rotation.x += 0.0005
  }

  // Anillos eliminados

  // Animar corazones
  hearts.forEach((heart, index) => {
    heart.rotation.z += 0.002
    heart.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002
  })

  // Animar geometrías
  geometries.forEach((geo, index) => {
    geo.rotation.x += 0.003
    geo.rotation.y += 0.002
    geo.position.y += Math.sin(Date.now() * 0.0008 + index * 0.5) * 0.003
  })

  renderer.render(scene, camera)
}

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
</script>

<template>
  <canvas ref="canvasRef" class="absolute inset-0 w-full h-full"></canvas>
</template>

<style scoped>
canvas {
  pointer-events: none;
  z-index: 0;
}
</style>
