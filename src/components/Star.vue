<script lang='ts' setup>
const { x: mouseX, y: mouseY } = useCustomMouse()
const pos = reactive(randomPosition())

const isClose = computed(() => {
  const mouse = { x: mouseX.value - 10, y: mouseY.value - 10 } // 计算中心点之前的半径 所以减 10
  return isNear(mouse, pos, 25) // 相距的极限距离 - 5
})

const state = reactive({
  w: 20,
  h: 20,
  pos,
})

const style = computed(() => {
  const { w, h, pos } = state
  return {
    width: `${w}px`,
    height: `${h}px`,
    left: `${pos.x}px`,
    top: `${pos.y}px`,
  }
})

watch(isClose, () => {
  if (isClose.value) {
    setTimeout(() => {
      const { x, y } = randomPosition()
      pos.x = x
      pos.y = y
    }, 200) // 缓冲200ms
  }
})

function isNear(p1: { x: number, y: number }, p2: { x: number, y: number }, distance: number) {
  return Math.abs(p1.x - p2.x) < distance && Math.abs(p1.y - p2.y) < distance
}

function randomPosition() {
  const x = Math.floor(Math.random() * (window.innerWidth - 20))
  const y = Math.floor(Math.random() * (window.innerHeight - 20))
  return { x, y }
}
</script>

<template>
  <div>
    <span>Mouse</span>
    <span>{{ mouseX }}-{{ mouseY }}</span>
    <br>
    <span>Pos</span>
    <span>{{ pos.x }}-{{ pos.y }}</span>
    <div pf :style="style" i-mdi:star-four-points hover-i-mdi:star-four-points-outline />
    <!-- <div i-mdi:star-four-points-outline /> -->
  </div>
</template>
