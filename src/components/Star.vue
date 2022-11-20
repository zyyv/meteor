<script lang='ts' setup>
const { x: mouseX, y: mouseY } = useCustomMouse()
const pos = reactive(randomPosition())

const isClose = computed(() => {
  return isNear({
    x: pos.x + 10, // 计算中心点之前的半径 所以加 10
    y: pos.y + 10,
  }, 25)
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
    <div pf :style="style" i-mdi:star-four-points hover-i-mdi:star-four-points-outline text-purple />
    <!-- <div i-mdi:star-four-points-outline /> -->
  </div>
</template>
