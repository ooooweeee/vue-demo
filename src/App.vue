<template>
  <div class="app">
    <a-button type="primary">Primary Button</a-button>
    <a-input v-model:value="value" placeholder="Basic usage" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Button, Input } from 'ant-design-vue'

export default defineComponent({
  setup() {
    const value = ref('')
    return {
      value
    }
  },
  components: {
    [Button.name]: Button,
    [Input.name]: Input
  }
})
</script>

<style lang="less">
.app {
  color: @theme-color;
}
</style>
