<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal" >
    <span class="modal-close" @click="$emit('close')">&times;</span>
    <h3 v-if="title">{{ title }}</h3>
    <slot></slot >
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style>

</style>
