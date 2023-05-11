<script setup lang="ts">
import Child from '../components/Child.vue'
import {ref} from 'vue'
import { useWindowSize, useDraggable } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)
const { width, height } = useWindowSize()
// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: width.value - 300, y: height.value / 3 },
  onMove: (position) => {
      if (position.x > width.value - 40) {

        position.x = width.value - 40
      }
      if (position.x < 0) {
        position.x = 0
      }
      if (position.y > height.value - 40) {
        position.y = height.value - 40
      }
      if (position.y < 0) {
        position.y = 0
      }
  }
})

</script>

<template>
    <div 
    ref="el" 
    class="my"
    :style="style"
   >
  👋 Drag me!
        I am at {{ x }}, {{ y}}
  </div>
  
  <div>
    Homedawdaw
  </div>
  <Child msg="hello word" />
</template>


<style>
 
  .my {
  border-radius: 10px;
  background-color:rgb(114, 108, 108);
  position: fixed;
  cursor: move; 
  touch-action:none ;
}

</style>
