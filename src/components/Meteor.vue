<script lang='ts' setup>
function randomTopScreen() {
  const x = Math.floor(Math.random() * (window.innerWidth - 20))
  const y = -20
  return { x, y }
}

const v0 = Math.floor(Math.random() * 80)
const t = ref(0)
// s = v0 * t + 1/2 * a * t^2 (a = g = 9.8)
const moveY = computed(() => {
  return v0 * t.value + 0.5 * 9.8 * t.value ** 2
})

const state = reactive({
  w: 20,
  h: 20,
  pos: randomTopScreen(),
  timer: null as any,
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

const isOut = computed(() => {
  return state.pos.y + moveY.value > window.innerHeight
})

// 碰撞检测
const isCollised = computed(() => {
  return isNear({
    x: state.pos.x + 10, // 计算中心点之前的半径 所以加 10
    y: state.pos.y + 10 + moveY.value,
  }, 25)
})

function run() {
  state.timer = setInterval(() => {
    t.value += 0.1
    if (isOut.value || isCollised.value) {
      if (isCollised.value) {
        // eslint-disable-next-line no-console
        console.log('collised')
      }
      clearInterval(state.timer)
      state.pos = randomTopScreen()
      t.value = 0
      setTimeout(run, 200)
    }
  }, 10)
}

onMounted(run)
</script>

<template>
  <div>
    <div pf :style="style" rotate-45 i-mdi:meteor />
  </div>
</template>
