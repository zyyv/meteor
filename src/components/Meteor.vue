<script lang='ts' setup>
// 生成一个屏幕上方的点
function randomTopScreen() {
  const x = Math.floor(Math.random() * (window.innerWidth - 20))
  const y = -20
  return { x, y }
}

const v0 = Math.floor(Math.random() * 10)
const t = ref(0)
const moveY = computed(() => {
  return 0.5 * 9.8 * t.value ** 2 + v0 * t.value
})

const state = reactive({
  w: 20,
  h: 20,
  pos: randomTopScreen(),
})

const style = computed(() => {
  const { w, h, pos } = state
  return {
    width: `${w}px`,
    height: `${h}px`,
    left: `${pos.x}px`,
    top: `${pos.y + moveY.value}px`,
  }
})

onMounted(() => {
  setInterval(() => {
    t.value += 0.1
    if (state.pos.y + moveY.value > window.innerHeight) {
      state.pos = randomTopScreen()
      t.value = 0
    }
  }, 10)
})
</script>

<template>
  <div>
    <div pf :style="style" rotate-45 i-mdi:meteor />
  </div>
</template>
