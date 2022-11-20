<script lang='ts' setup>
const f = ref(Math.random() > 0.5) // 移动发现 true x轴移动 false y轴移动

const v0 = Math.floor(Math.random() * 80)
const t = ref(0)

function getMoveValue() {
  // s = v0 * t + 1/2 * a * t^2 (a = g = 9.8)
  const s = computed(() => v0 * t.value + 0.5 * 9.8 * t.value ** 2)
  return {
    x: computed(() => f.value ? s.value : 0),
    y: computed(() => f.value ? 0 : s.value),
  }
}
const { x: moveX, y: moveY } = getMoveValue()

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
    left: `${pos.x + moveX.value}px`,
    top: `${pos.y + moveY.value}px`,
  }
})

const isOut = computed(() => {
  return state.pos.y + moveY.value > window.innerHeight || state.pos.x + moveX.value > window.innerWidth
})

// 碰撞检测
const isCollised = computed(() => {
  return isNear({
    x: state.pos.x + 10 + moveX.value, // 计算中心点之前的半径 所以加 10
    y: state.pos.y + 10 + moveY.value,
  }, 25)
})

function randomTopScreen() {
  const x = f.value ? -20 : Math.floor(Math.random() * (window.innerWidth - 20))
  const y = f.value ? Math.floor(Math.random() * (window.innerHeight - 20)) : -20

  return { x, y }
}

function run() {
  // state.timer = setInterval(() => {
  //   t.value += 0.1
  //   if (isOut.value) {
  //     if (isCollised.value) {
  //       // eslint-disable-next-line no-console
  //       console.log('Boom 💥 Collised ~')
  //     }
  //     clearInterval(state.timer)
  //     state.pos = randomTopScreen()
  //     t.value = 0
  //     setTimeout(run, 200)
  //   }
  // }, 10)

  useRafFn(() => {
    t.value += 0.08
    if (isOut.value) {
      if (isCollised.value) {
        // eslint-disable-next-line no-console
        console.log('Boom 💥 Collised ~')
      }
      f.value = Math.random() > 0.5
      state.pos = randomTopScreen()
      t.value = 0
    }
  })
}

onMounted(run)
</script>

<template>
  <div>
    <div pf :style="style" rotate-45 i-mdi:meteor />
  </div>
</template>
